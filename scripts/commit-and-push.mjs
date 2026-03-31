import { execSync } from 'node:child_process';
import process from 'node:process';

function run(command) {
  return execSync(command, { stdio: 'pipe', encoding: 'utf8' }).trim();
}

try {
  const status = run('git status --porcelain');
  if (!status) {
    console.log('No new skill changes to commit or push.');
    process.exit(0);
  }

  run('git add .');
  const timestamp = new Date().toISOString();
  run(`git commit -m "chore: publish generated bishoptech skills ${timestamp}"`);
  run('git push -u origin HEAD');
  console.log('Committed and pushed generated skill updates.');
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
