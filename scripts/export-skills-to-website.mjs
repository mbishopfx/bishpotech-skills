import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/matthewbishop/BishopTech.dev/bishoptech-skills';
const WEBSITE = '/Users/matthewbishop/BishopTech.dev/bishoptech-website';
const SKILLS_DIR = path.join(ROOT, 'skills');
const EXPORT_DIR = path.join(ROOT, 'website-export');
const WEBSITE_DATA_DIR = path.join(WEBSITE, 'src/data');
const WEBSITE_DOC_DIR = path.join(WEBSITE, 'docs');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readSkillPackages() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs.readdirSync(SKILLS_DIR)
    .map((name) => {
      const dir = path.join(SKILLS_DIR, name);
      const metaPath = path.join(dir, 'meta.json');
      const guidePath = path.join(dir, 'GUIDE.md');
      const skillPath = path.join(dir, 'SKILL.md');
      if (!fs.existsSync(metaPath)) return null;
      return {
        ...JSON.parse(fs.readFileSync(metaPath, 'utf8')),
        guide: fs.existsSync(guidePath) ? fs.readFileSync(guidePath, 'utf8') : '',
        skill: fs.existsSync(skillPath) ? fs.readFileSync(skillPath, 'utf8') : ''
      };
    })
    .filter(Boolean);
}

const skills = readSkillPackages();
ensureDir(EXPORT_DIR);
ensureDir(WEBSITE_DATA_DIR);
ensureDir(WEBSITE_DOC_DIR);

const websiteData = skills.map((skill) => ({
  slug: skill.name,
  title: skill.name.replace(/^bishoptech-/, '').replace(/-/g, ' '),
  installMode: skill.installMode,
  status: skill.status,
  generatedAt: skill.generatedAt,
  sourceName: skill.sourceName,
  localFolder: skill.folder || path.join(SKILLS_DIR, skill.name)
}));

fs.writeFileSync(path.join(EXPORT_DIR, 'skills-catalog.json'), JSON.stringify(websiteData, null, 2));
fs.writeFileSync(path.join(WEBSITE_DATA_DIR, 'bishoptech-skills.json'), JSON.stringify(websiteData, null, 2));
fs.writeFileSync(path.join(WEBSITE_DOC_DIR, 'BISHOPTECH_SKILLS_CATALOG.md'), `# BishopTech Skills Catalog\n\nGenerated skills ready for review and website surfacing.\n\n${websiteData.map((s) => `## ${s.title}\n- slug: ${s.slug}\n- source: ${s.sourceName}\n- install: ${s.installMode}\n- status: ${s.status}\n- folder: ${s.localFolder}\n`).join('\n')}`);
console.log(`Exported ${websiteData.length} skills to website data/doc surfaces.`);
