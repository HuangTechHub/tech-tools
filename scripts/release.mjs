import { $, argv } from 'zx';
import { consola } from 'consola';
import { rawCommitsToMarkdown } from './shared/commits.mjs';
import { addToChangelog } from './shared/changelog.mjs';

$.verbose = false;

const isDryRun = argv['dry-run'] ?? false;
const isCi = argv['ci'] ?? false;

const now = new Date();
const currentShortSha = (await $`git rev-parse --short HEAD`).stdout.trim();

const calver = now.toISOString().slice(0, 10).replace(/-/g, '.');
const version = `${calver}-${currentShortSha}`;

let rawCommits = '';
try {
  const lastTag = (await $`git describe --tags --abbrev=0`).stdout.trim();
  rawCommits = (await $`git log --pretty=oneline ${lastTag}..HEAD`).stdout;
} catch (error) {
  rawCommits = (await $`git log --pretty=oneline HEAD`).stdout;
  const commitsToRelease = rawCommits.split('\n').filter((c) => {
    const line = c.trim().toLowerCase();
    return line && !line.includes('docs(changelog)') && !line.includes('chore(version)');
  });

  if (commitsToRelease.length === 0) {
    consola.info('No new feature or bugfix commits since last release. Aborting.');
    process.exit(0);
  }
}

const markdown = rawCommitsToMarkdown({ rawCommits });

consola.info(`Changelog: \n\n${markdown}\n\n`);

if (isDryRun) {
  consola.info(`[dry-run] Not creating version nor tag`);
  consola.info('Aborting');
  process.exit(0);
}

let shouldContinue = true;
if (!isCi) {
  shouldContinue = await consola.prompt(
    'This script will create a new version and tag, and update the changelog. Continue?',
    {
      type: 'confirm',
    },
  );
}

if (!shouldContinue) {
  consola.info('Aborting');
  process.exit(0);
}

consola.info('Updating changelog');
await addToChangelog({ changelog: markdown, version });
consola.success('Changelog updated');

try {
  consola.info('Committing changelog changes');
  await $`git add CHANGELOG.md`;
  await $`git commit -m "docs(changelog): update changelog for ${version}"`;
  consola.success('Changelog changes committed');

  consola.info('Creating version and tag');
  await $`npm version ${version} -m "chore(version): release ${version}"`;
  consola.info('Npm version released with tag');
} catch (error) {
  consola.error(error);
  consola.info('Aborting');
  process.exit(1);
}
