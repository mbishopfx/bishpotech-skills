# BishopTech Skills

BishopTech-enhanced skill pipeline.

## Goal
Create improved, more agentic, more autonomous BishopTech versions of useful skills.

## Output model
- Source-inspired BishopTech skill folders live in `skills/`
- Generated catalog summaries live in `catalog/generated/`
- Website-facing JSON/markdown exports live in `website-export/`

## Commands
```bash
npm run skills:generate
npm run skills:export
npm run skills:run
```

## Cron intent
A recurring job runs every 2 hours to:
1. inspect trending/candidate skills
2. generate BishopTech-upgraded skill packages in new folders
3. prepare website install/download content
4. commit and push new skill batches to the dedicated GitHub repo
5. avoid direct installation of third-party source skills into active agent environments
