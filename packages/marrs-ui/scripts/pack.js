/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');
const glob = require('fast-glob');

const packagePath = process.cwd();

const buildPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './src');

async function includeFileInBuild(file) {
  const sourcePath = path.resolve(packagePath, file);
  const targetPath = path.resolve(buildPath, path.basename(file));
  await fse.copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

/**
 * 支持treeshake
 * @param {object} param0
 * @param {string} param0.from
 * @param {string} param0.to
 */
async function createModulePackages({ from, to }) {
  const directoryPackages = glob
    .sync('*/index.{js,ts,tsx}', { cwd: from })
    .map(path.dirname);

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJsonPath = path.join(to, directoryPackage, 'package.json');
      const topLevelPathImportsAreCommonJSModules = await fse.pathExists(
        path.resolve(path.dirname(packageJsonPath), '../lib/esm')
      );

      const packageJson = {
        sideEffects: false,
        module: topLevelPathImportsAreCommonJSModules
          ? path.posix.join('../lib/esm', directoryPackage, 'index.js')
          : './index.js',
        main: topLevelPathImportsAreCommonJSModules
          ? './index.js'
          : path.posix.join('../lib/node', directoryPackage, 'index.js'),
        types: './index.d.ts'
      };

      const [typingsEntryExist, moduleEntryExists, mainEntryExists] =
        await Promise.all([
          fse.pathExists(
            path.resolve(path.dirname(packageJsonPath), packageJson.types)
          ),
          fse.pathExists(
            path.resolve(path.dirname(packageJsonPath), packageJson.module)
          ),
          fse.pathExists(
            path.resolve(path.dirname(packageJsonPath), packageJson.main)
          ),
          fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))
        ]);

      const manifestErrorMessages = [];
      if (!typingsEntryExist) {
        manifestErrorMessages.push(
          `'types' entry '${packageJson.types}' does not exist`
        );
      }
      if (!moduleEntryExists) {
        manifestErrorMessages.push(
          `'module' entry '${packageJson.module}' does not exist`
        );
      }
      if (!mainEntryExists) {
        manifestErrorMessages.push(
          `'main' entry '${packageJson.main}' does not exist`
        );
      }
      if (manifestErrorMessages.length > 0) {
        // TODO: AggregateError
        throw new Error(
          `${packageJsonPath}:\n${manifestErrorMessages.join('\n')}`
        );
      }

      return packageJsonPath;
    })
  );
}

async function typescriptCopy({ from, to }) {
  if (!(await fse.pathExists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  const files = await glob('**/*.d.ts', { cwd: from });
  const cmds = files.map((file) =>
    fse.copy(path.resolve(from, file), path.resolve(to, file))
  );
  return Promise.all(cmds);
}

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8'
  );
  const { ...packageDataOther } = JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOther,
    private: false,
    ...(packageDataOther.main
      ? {
          main: fse.existsSync(path.resolve(buildPath, './lib/node/index.js'))
            ? './lib/node/index.js'
            : './index.js',
          module: fse.existsSync(path.resolve(buildPath, './lib/esm/index.js'))
            ? './lib/esm/index.js'
            : './index.js'
        }
      : {}),
    types: './index.d.ts'
  };

  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function prepend(file, string) {
  const data = await fse.readFile(file, 'utf8');
  await fse.writeFile(file, string + data, 'utf8');
}

async function addLicense(packageData) {
  const license = `/** @license @wemo-ui/marrs v${packageData.version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;
  await Promise.all(
    [
      './index.js',
      './lib/legacy/index.js',
      './lib/esm/index.js',
      './lib/node/index.js',
      './lib/umd/wemo-ui.marrs.umd.js',
      './lib/umd/wemo-ui.marrs.umd.min.js'
    ].map(async (file) => {
      try {
        await prepend(path.resolve(buildPath, file), license);
      } catch (err) {
        if (err.code === 'ENOENT') {
          console.log(`Skipped license for ${file}`);
        } else {
          throw err;
        }
      }
    })
  );
}

async function run() {
  try {
    const packageData = await createPackageFile();

    console.log(packageData);
    await Promise.all(
      ['./README.md', './CHANGELOG.md', './LICENSE'].map((file) =>
        includeFileInBuild(file)
      )
    );

    await addLicense(packageData);

    // TypeScript
    await typescriptCopy({ from: srcPath, to: buildPath });

    await createModulePackages({ from: srcPath, to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();