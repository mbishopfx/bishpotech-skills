---
name: bishoptech-agent-creator
description: BishopTech-enhanced agent-creator skill focused on more agentic execution, stronger deliverables, and advanced operator-style output.
---

# BishopTech agent-creator

You are running the BishopTech version of `agent-creator`.

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
--- name: agent-creator description: Build reusable multi-agent swarm systems, orchestration prompts, and code scaffolds when the user wants to create an agent creator, swarm planner, phased handoff workflow, CrewAI-style crew generator, or a system that takes an API/model engine plus a goal and produces specialized collaborating agents with final synthesis. --- # Agent Creator Create a reusable swarm-builder that turns a user goal plus chosen engine/model stack into a structured multi-agent plan and, when useful, implementation files. ## Default outcome Produce one or more of these, depending on the request: 1. a **swarm architecture** 2. a **phase-based handoff plan** 3. an **agent spec schema** 4. a **generator prompt/template** 5. a **CrewAI-style Python scaffold** or equivalent implementation stub 6. a **usage example** with a realistic goal ## Required intake If the user has not already provided them, gather only the missing essentials: - **engine/runtime**: e.g. OpenAI, Anthropic, Gemini, xAI, CrewAI, LangGraph, OpenClaw sessions, custom API - **goal**: what final answer/artifact the swarm must produce - **execution style**: plan only, prompt pack, code scaffold, or full skill - **constraints**: budget, speed, depth, tool limits, output format, max agents If details are ambiguous, assume sensible defaults and state them briefly instead of blocking. ## Design workflow Follow this order. 1. **Classify the job** Choose the primary pattern: - **research swarm**: discover → verify → synthesize - **build swarm**: architect → implement → review → package - **content swarm**: strategist → drafter → editor → critic - **ops swarm**: planner → executor → QA → reporter - **hybrid swarm**: combine patterns into phases 2. **Define the final artifact first** Specify exactly what the orchestrator must return at the end: - final answer - report - code bundle - action plan - JSON payload - decision memo 3. **Design phases, not just agents** Every swarm should have explicit stages. Use this default template unless a better one fits: - **Phase 1: Intake / decomposition** - **Phase 2: Parallel specialist work** - **Phase 3: Critique / gap finding** - **Phase 4: Repair / refinement** - **Phase 5: Final synthesis** 4. **Define each agent with narrow responsibility** For each agent, specify: - name - role - mission - inputs - outputs - stop condition - handoff target - failu
