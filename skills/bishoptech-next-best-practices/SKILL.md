---
name: bishoptech-next-best-practices
description: BishopTech-enhanced next-best-practices skill focused on more agentic execution, stronger deliverables, and advanced operator-style output.
---

# BishopTech next-best-practices

You are running the BishopTech version of `next-best-practices`.

## Core upgrade rules
- Do more than explain; execute when safe.
- Produce advanced outputs that are installable, reusable, or deployment-ready when applicable.
- Expand shallow source workflows into fuller operating systems: checklist, implementation brief, QA pass, and next-step guidance.
- Prefer autonomous internal progress over passive advisory mode.
- Always leave the user with a clearer path, stronger artifacts, and lower execution drag.

## Output expectations
When using this skill, prefer outputs that include:
1. clear objective framing
2. execution plan
3. complete deliverable or scaffold
4. risks / blockers
5. best next move

## BishopTech enhancement note
This skill was derived from an existing skill and upgraded to be more autonomous, advanced, and operator-grade.

## Source context
--- name: next-best-practices description: Next.js best practices - file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/font optimization, bundling user-invocable: false --- # Next.js Best Practices Apply these rules when writing or reviewing Next.js code. ## File Conventions See [file-conventions.md](./file-conventions.md) for: - Project structure and special files - Route segments (dynamic, catch-all, groups) - Parallel and intercepting routes - Middleware rename in v16 (middleware → proxy) ## RSC Boundaries Detect invalid React Server Component patterns. See [rsc-boundaries.md](./rsc-boundaries.md) for: - Async client component detection (invalid) - Non-serializable props detection - Server Action exceptions ## Async Patterns Next.js 15+ async API changes. See [async-patterns.md](./async-patterns.md) for: - Async `params` and `searchParams` - Async `cookies()` and `headers()` - Migration codemod ## Runtime Selection See [runtime-selection.md](./runtime-selection.md) for: - Default to Node.js runtime - When Edge runtime is appropriate ## Directives See [directives.md](./directives.md) for: - `'use client'`, `'use server'` (React) - `'use cache'` (Next.js) ## Functions See [functions.md](./functions.md) for: - Navigation hooks: `useRouter`, `usePathname`, `useSearchParams`, `useParams` - Server functions: `cookies`, `headers`, `draftMode`, `after` - Generate functions: `generateStaticParams`, `generateMetadata` ## Error Handling See [error-handling.md](./error-handling.md) for: - `error.tsx`, `global-error.tsx`, `not-found.tsx` - `redirect`, `permanentRedirect`, `notFound` - `forbidden`, `unauthorized` (auth errors) - `unstable_rethrow` for catch blocks ## Data Patterns See [data-patterns.md](./data-patterns.md) for: - Server Components vs Server Actions vs Route Handlers - Avoiding data waterfalls (`Promise.all`, Suspense, preload) - Client component data fetching ## Route Handlers See [route-handlers.md](./route-handlers.md) for: - `route.ts` basics - GET handler conflicts with `page.tsx` - Environment behavior (no React DOM) - When to use vs Server Actions ## Metadata & OG Images See [metadata.md](./metadata.md) for: - Static and dynamic metadata - `generateMetadata` function - OG image generation with `next/og` - File-based metadata conventions ## Image Optimization See [image.md](./image.md) for:
