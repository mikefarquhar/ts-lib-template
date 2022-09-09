const fs = require('fs');

{ // Ensure the dist folder exists
  fs.mkdirSync('./dist', { recursive: true });
}

{ // Copy README to dist
  const srcPath = './README.md';
  const dstPath = './dist/README.md';
  fs.copyFileSync(srcPath, dstPath);
}

{ // Copy LICENSE to dist
  const srcPath = './LICENSE';
  const dstPath = './dist/LICENSE';
  fs.copyFileSync(srcPath, dstPath);
}

{ // Copy and ammend package.json to dist
  const srcPath = './package.json';
  const dstPath = './dist/package.json';

  const packageKeyIncludeList = new Set([
    'name',
    'version',
    'description',
    'keywords',
    'homepage',
    'bugs',
    'license',
    'author',
    'contributors',
    'funding',
    'main',
    'browser',
    'bin',
    'man',
    'repository',
    'config',
    'dependencies',
    'peerDependencies',
    'bundleDependencies',
    'optionalDependencies',
    'overrides',
    'engines',
    'publishConfig',
    'workspaces',
    'types',
    'sideEffects',
  ])

  const packageJson = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));

  for (const key of Object.keys(packageJson)) {
    if (!packageKeyIncludeList.has(key)) {
      delete packageJson[key];
    }
  }

  if (packageJson.main) {
    packageJson.main = './index.js';
  }

  if (packageJson.browser) {
    packageJson.browser = './index.js';
  }

  packageJson.types = 'index.d.ts';

  fs.writeFileSync(dstPath, JSON.stringify(packageJson, null, 2));
}
