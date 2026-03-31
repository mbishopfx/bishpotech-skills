import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = '/Users/matthewbishop/BishopTech.dev/bishoptech-skills';
const SKILLS_DIR = path.join(ROOT, 'skills');
const GENERATED_DIR = path.join(ROOT, 'catalog/generated');
const BATCHES_DIR = path.join(ROOT, 'batches');

const SOURCE_ROOTS = [
  path.join(os.homedir(), '.agents/skills'),
  path.join(os.homedir(), '.openclaw/workspace/skills')
];

const PRIORITY_SKILLS = [
  'agent-creator',
  'find-skills',
  'vercel-react-best-practices',
  'next-best-practices',
  'seo-audit',
  'schema-markup',
  'scrapling-research',
  'frontend-design',
  'copywriting',
  'analytics-tracking'
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readSkillSources() {
  const found = [];
  for (const root of SOURCE_ROOTS) {
    if (!fs.existsSync(root)) continue;
    for (const entry of fs.readdirSync(root)) {
      const skillDir = path.join(root, entry);
      const skillFile = path.join(skillDir, 'SKILL.md');
      if (fs.existsSync(skillFile)) {
        found.push({ name: entry, path: skillFile, root });
      }
    }
  }
  return found;
}

function excerpt(text, max = 1200) {
  return text.replace(/\s+/g, ' ').trim().slice(0, max);
}

function buildGuide(name, originalPath, originalText) {
  return `# BishopTech ${name}\n\n## What this skill does\nThis is a BishopTech-enhanced version of the original \`${name}\` skill, rewritten to push for more autonomous execution, stronger deliverable quality, and more complete operational output.\n\n## What it helps with\n- faster execution for the target domain\n- more agentic planning and follow-through\n- better artifact quality, not just shallow answers\n- stronger handoff-ready outputs for real operator workflows\n\n## What is needed\n- the underlying tools or platform access required by the source skill\n- a project context with enough constraints to act responsibly\n- permission to execute internal/reversible work autonomously when safe\n\n## BishopTech upgrade philosophy\n- prefer execution over commentary\n- produce complete guides/checklists/assets where possible\n- optimize for reusable systems, not one-off answers\n- surface blockers, dependencies, and next actions clearly\n- be more advanced, autonomous, and operator-grade than the base skill\n\n## Source inspiration\n- Source path: ${originalPath}\n- Source summary: ${excerpt(originalText, 800)}\n\n## Install / use notes\n- This version is intended to be distributed as a BishopTech skill package.
- It should be safe to publish as a separate installable folder rather than overwriting the original.\n`;
}

function buildSkillMd(name, originalText) {
  return `---\nname: bishoptech-${name}\ndescription: BishopTech-enhanced ${name} skill focused on more agentic execution, stronger deliverables, and advanced operator-style output.\n---\n\n# BishopTech ${name}\n\nYou are running the BishopTech version of \`${name}\`.\n\n## Core upgrade rules\n- Do more than explain; execute when safe.\n- Produce advanced outputs that are installable, reusable, or deployment-ready when applicable.\n- Expand shallow source workflows into fuller operating systems: checklist, implementation brief, QA pass, and next-step guidance.\n- Prefer autonomous internal progress over passive advisory mode.\n- Always leave the user with a clearer path, stronger artifacts, and lower execution drag.\n\n## Output expectations\nWhen using this skill, prefer outputs that include:\n1. clear objective framing\n2. execution plan\n3. complete deliverable or scaffold\n4. risks / blockers\n5. best next move\n\n## BishopTech enhancement note\nThis skill was derived from an existing skill and upgraded to be more autonomous, advanced, and operator-grade.\n\n## Source context\n${excerpt(originalText, 2400)}\n`;
}

const skills = readSkillSources();
const selected = PRIORITY_SKILLS.map((name) => skills.find((skill) => skill.name === name)).filter(Boolean);
const generated = [];
const timestamp = new Date().toISOString();

ensureDir(SKILLS_DIR);
ensureDir(GENERATED_DIR);
ensureDir(BATCHES_DIR);

for (const skill of selected) {
  const originalText = fs.readFileSync(skill.path, 'utf8');
  const slug = `bishoptech-${skill.name}`;
  const outDir = path.join(SKILLS_DIR, slug);
  ensureDir(outDir);

  fs.writeFileSync(path.join(outDir, 'SKILL.md'), buildSkillMd(skill.name, originalText));
  fs.writeFileSync(path.join(outDir, 'GUIDE.md'), buildGuide(skill.name, skill.path, originalText));
  fs.writeFileSync(path.join(outDir, 'meta.json'), JSON.stringify({
    name: slug,
    sourceName: skill.name,
    sourcePath: skill.path,
    generatedAt: timestamp,
    category: 'bishoptech-enhanced',
    installMode: 'manual-folder-or-copy',
    status: 'ready-for-review'
  }, null, 2));

  generated.push({
    name: slug,
    sourceName: skill.name,
    sourcePath: skill.path,
    folder: outDir,
    generatedAt: timestamp,
    installMode: 'manual-folder-or-copy',
    status: 'ready-for-review'
  });
}

fs.writeFileSync(path.join(GENERATED_DIR, 'latest-batch.json'), JSON.stringify({ generatedAt: timestamp, count: generated.length, skills: generated }, null, 2));
fs.writeFileSync(path.join(BATCHES_DIR, `${timestamp.replace(/[:.]/g, '-')}.json`), JSON.stringify({ generatedAt: timestamp, skills: generated }, null, 2));
console.log(`Generated ${generated.length} BishopTech skill packages.`);
