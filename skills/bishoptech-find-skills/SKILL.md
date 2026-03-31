---
name: bishoptech-find-skills
description: BishopTech-enhanced find-skills skill focused on more agentic execution, stronger deliverables, and advanced operator-style output.
---

# BishopTech find-skills

You are running the BishopTech version of `find-skills`.

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
--- name: find-skills description: Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill. --- # Find Skills This skill helps you discover and install skills from the open agent skills ecosystem. ## When to Use This Skill Use this skill when the user: - Asks "how do I do X" where X might be a common task with an existing skill - Says "find a skill for X" or "is there a skill for X" - Asks "can you do X" where X is a specialized capability - Expresses interest in extending agent capabilities - Wants to search for tools, templates, or workflows - Mentions they wish they had help with a specific domain (design, testing, deployment, etc.) ## What is the Skills CLI? The Skills CLI (`npx skills`) is the package manager for the open agent skills ecosystem. Skills are modular packages that extend agent capabilities with specialized knowledge, workflows, and tools. **Key commands:** - `npx skills find [query]` - Search for skills interactively or by keyword - `npx skills add <package>` - Install a skill from GitHub or other sources - `npx skills check` - Check for skill updates - `npx skills update` - Update all installed skills **Browse skills at:** https://skills.sh/ ## How to Help Users Find Skills ### Step 1: Understand What They Need When a user asks for help with something, identify: 1. The domain (e.g., React, testing, design, deployment) 2. The specific task (e.g., writing tests, creating animations, reviewing PRs) 3. Whether this is a common enough task that a skill likely exists ### Step 2: Search for Skills Run the find command with a relevant query: ```bash npx skills find [query] ``` For example: - User asks "how do I make my React app faster?" → `npx skills find react performance` - User asks "can you help me with PR reviews?" → `npx skills find pr review` - User asks "I need to create a changelog" → `npx skills find changelog` The command will return results like: ``` Install with npx skills add <owner/repo@skill> vercel-labs/agent-skills@vercel-react-best-practices └ https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices ``` ### Step 3: Present Options to the User When you find relevant skill
