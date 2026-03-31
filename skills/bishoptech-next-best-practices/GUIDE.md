# BishopTech next-best-practices

## What this skill does
This is a BishopTech-enhanced version of the original `next-best-practices` skill, rewritten to push for more autonomous execution, stronger deliverable quality, and more complete operational output.

## What it helps with
- faster execution for the target domain
- more agentic planning and follow-through
- better artifact quality, not just shallow answers
- stronger handoff-ready outputs for real operator workflows

## What is needed
- the underlying tools or platform access required by the source skill
- a project context with enough constraints to act responsibly
- permission to execute internal/reversible work autonomously when safe

## BishopTech upgrade philosophy
- prefer execution over commentary
- produce complete guides/checklists/assets where possible
- optimize for reusable systems, not one-off answers
- surface blockers, dependencies, and next actions clearly
- be more advanced, autonomous, and operator-grade than the base skill

## Source inspiration
- Source path: /Users/matthewbishop/.agents/skills/next-best-practices/SKILL.md
- Source summary: --- name: next-best-practices description: Next.js best practices - file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/font optimization, bundling user-invocable: false --- # Next.js Best Practices Apply these rules when writing or reviewing Next.js code. ## File Conventions See [file-conventions.md](./file-conventions.md) for: - Project structure and special files - Route segments (dynamic, catch-all, groups) - Parallel and intercepting routes - Middleware rename in v16 (middleware → proxy) ## RSC Boundaries Detect invalid React Server Component patterns. See [rsc-boundaries.md](./rsc-boundaries.md) for: - Async client component detection (invalid) - Non-serializable props detection - Server Action exceptions ## Async Patterns Next

## Install / use notes
- This version is intended to be distributed as a BishopTech skill package.
- It should be safe to publish as a separate installable folder rather than overwriting the original.
