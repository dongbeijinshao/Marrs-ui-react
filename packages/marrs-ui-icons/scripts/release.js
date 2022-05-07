const chalk = require('chalk');

const util = require('util');

const child_process = require('child_process');

const exec = util.promisify(child_process.exec);

const tagList = ['alpha', 'beta', 'latest'];

const TAG = process.argv.slice(2)[0];

const VERSION = process.argv.slice(2)[1];

const isLatest = TAG === 'latest';

const run = async (command) => {
  await exec(command);
};

const verify = async () => {
  if (!TAG) {
    console.log(
      chalk.redBright('为确保发布失误，请将tag务必带上, alpha、beta、latest;')
    );
    return false;
  }

  if (!tagList.includes(TAG)) {
    console.log(chalk.redBright('你的tag值有误,如 alpha、beta、latest(线上);'));
    return false;
  }

  if (!VERSION) {
    console.log(
      chalk.yellowBright(
        '请执行npm view @wemo-ui/marrs-icons,查看当前tag版本, 确定版本;'
      )
    );

    console.log(
      chalk.yellowBright(
        '请执行命令: npm run release tag version, 例如: npm run release alpha 1.0.0-alpha.1;'
      )
    );

    console.log(
      chalk.redBright('为确保发布失误，请将tag务必带上, alpha、beta、latest;')
    );

    return false;
  }

  return true;
};

const runVersion = async () => {
  await run(`npm version ${VERSION}`);
};

// const runPush = async () => {
//   await run('git add package.json');
//   await run(`git commit -m "${TAG} ${VERSION} 提交"`);
//   await run('git push');
// };

const runBuild = async () => {
  await run('npm run build');
};

const runPublish = async () => {
  if (isLatest) {
    await run(`cd dist && npm publish`);
    return;
  }
  await run(`cd dist && npm publish --tag ${TAG}`);
};

const init = async () => {
  if (!(await verify())) {
    return;
  }

  const startTime = Date.now();

  await runVersion();
  // await runPush();
  await runBuild();
  await runPublish();

  console.log(
    `✨ 发布${TAG}流程结束, 共耗时${((Date.now() - startTime) / 1000).toFixed(
      3
    )}s`
  );
};

init();
