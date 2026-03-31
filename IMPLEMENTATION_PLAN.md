# BishopTech Skills Implementation Plan

## Goal
Create BishopTech-enhanced versions of useful skills with stronger autonomy, better execution guidance, richer guides, and website-ready installation assets.

## System behavior
Every 2 hours the pipeline should:
1. inspect trending/candidate skill sources
2. select useful skills to BishopTech-enhance
3. create new skill folders instead of overwriting originals
4. generate full guide docs explaining what the skill does, what it helps with, and what is needed
5. export website-ready catalog metadata for install/download/copy flows

## Initial source strategy
- start with skills already available locally
- use skills.sh leaderboard/trending sources as inspiration and prioritization signal
- do not auto-install unknown third-party skills directly into active agents as part of this cron

## Current v1 implementation
- local generator scaffold in `scripts/generate-bishop-skills.mjs`
- website export scaffold in `scripts/export-skills-to-website.mjs`
- auto commit/push step in `scripts/commit-and-push.mjs`
- cron runner/install scripts in `cron/`
- GitHub remote target configured for dedicated skills repo
- output folders:
  - `skills/`
  - `catalog/generated/`
  - `website-export/`

## Next quality upgrades
- improve trend ingestion beyond static seed list
- rank by BishopTech relevance (automation, CRO, SEO, coding, orchestration)
- add richer skill packaging metadata
- build actual website pages/components for install/download/copy UX
- add quality review pass before public surfacing
