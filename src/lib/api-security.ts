import { NextResponse } from "next/server";

// Origins permitted to call the API. Same-origin browser requests from the
// production site send one of these in the Origin header.
const ALLOWED_ORIGINS = new Set([
  "https://pacificassoc.com",
  "https://www.pacificassoc.com",
]);

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------

export interface OriginCheck {
  allowed: boolean;
  origin: string | null;
}

// A request is allowed when it carries no Origin header (same-origin document
// posts and non-browser clients) or an Origin on the allowlist. Cross-origin
// browser requests from any other site are rejected.
export function checkOrigin(req: Request): OriginCheck {
  const origin = req.headers.get("origin");
  if (!origin) return { allowed: true, origin: null };
  return { allowed: ALLOWED_ORIGINS.has(origin), origin };
}

export function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    Vary: "Origin",
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

// JSON response with CORS headers attached.
export function corsJson(
  body: unknown,
  init: {
    status?: number;
    origin?: string | null;
    headers?: Record<string, string>;
  } = {},
): NextResponse {
  return NextResponse.json(body, {
    status: init.status ?? 200,
    headers: { ...corsHeaders(init.origin ?? null), ...(init.headers ?? {}) },
  });
}

// ---------------------------------------------------------------------------
// Client IP
// ---------------------------------------------------------------------------

export function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

// ---------------------------------------------------------------------------
// In-memory rate limiter (sliding-window log)
// ---------------------------------------------------------------------------
//
// Keyed by identifier. On serverless this is per warm instance rather than a
// shared global counter, so it bounds abuse per instance — enough to blunt
// spam and runaway API-bill attacks. Swap for @upstash/ratelimit if a shared
// store is required.

const buckets = new Map<string, number[]>();

export interface RateLimitResult {
  ok: boolean;
  retryAfter: number; // seconds until the caller may retry
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;
  const hits = (buckets.get(key) ?? []).filter((t) => t > windowStart);

  if (hits.length >= limit) {
    buckets.set(key, hits);
    const retryAfter = Math.ceil((hits[0]! + windowMs - now) / 1000);
    return { ok: false, retryAfter };
  }

  hits.push(now);
  buckets.set(key, hits);

  // Opportunistic cleanup so idle keys don't leak memory unbounded.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      const last = v[v.length - 1];
      if (last === undefined || last <= windowStart) buckets.delete(k);
    }
  }

  return { ok: true, retryAfter: 0 };
}
