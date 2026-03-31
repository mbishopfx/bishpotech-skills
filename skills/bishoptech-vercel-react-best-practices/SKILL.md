---
name: bishoptech-vercel-react-best-practices
description: BishopTech-enhanced vercel-react-best-practices skill focused on more agentic execution, stronger deliverables, and advanced operator-style output.
---

# BishopTech vercel-react-best-practices

You are running the BishopTech version of `vercel-react-best-practices`.

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
--- name: vercel-react-best-practices description: React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements. license: MIT metadata: author: vercel version: "1.0.0" --- # Vercel React Best Practices Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 57 rules across 8 categories, prioritized by impact to guide automated refactoring and code generation. ## When to Apply Reference these guidelines when: - Writing new React components or Next.js pages - Implementing data fetching (client or server-side) - Reviewing code for performance issues - Refactoring existing React/Next.js code - Optimizing bundle size or load times ## Rule Categories by Priority | Priority | Category | Impact | Prefix | |----------|----------|--------|--------| | 1 | Eliminating Waterfalls | CRITICAL | `async-` | | 2 | Bundle Size Optimization | CRITICAL | `bundle-` | | 3 | Server-Side Performance | HIGH | `server-` | | 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` | | 5 | Re-render Optimization | MEDIUM | `rerender-` | | 6 | Rendering Performance | MEDIUM | `rendering-` | | 7 | JavaScript Performance | LOW-MEDIUM | `js-` | | 8 | Advanced Patterns | LOW | `advanced-` | ## Quick Reference ### 1. Eliminating Waterfalls (CRITICAL) - `async-defer-await` - Move await into branches where actually used - `async-parallel` - Use Promise.all() for independent operations - `async-dependencies` - Use better-all for partial dependencies - `async-api-routes` - Start promises early, await late in API routes - `async-suspense-boundaries` - Use Suspense to stream content ### 2. Bundle Size Optimization (CRITICAL) - `bundle-barrel-imports` - Import directly, avoid barrel files - `bundle-dynamic-imports` - Use next/dynamic for heavy components - `bundle-defer-third-party` - Load analytics/logging after hydration - `bundle-conditional` - Load modules only when feature is activated - `bundle-preload` - Preload on hover/focus for perceived speed ### 3. Server-Side Performance (HIGH) - `server-auth-actions` - Authenticate server actions like API routes - `server-cache-react` 
