#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const emoji = require('node-emoji');
const packageJson = require('../package.json');

if (process.argv.length < 3) {
  console.log('You have to provide a name to your app.');
  console.log('For example :');
  console.log('    npx create-modern-web-dev my-app');
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath =
  projectName == '.' || projectName == './'
    ? currentPath
    : path.join(currentPath, projectName);
const git_repo = 'https://github.com/butadpj/create-modern-web-dev.git';

if (projectName != '.' && projectName != './')
  try {
    fs.mkdirSync(projectPath);
  } catch (error) {
    if (error.code === 'EEXIST')
      console.log(
        colors.red.bold(
          `The file ${projectName} already exist in the current directory, please give it another name.`,
        ),
      );

    console.log(colors.red.bold(error.message));

    process.exit(1);
  }

function buildPackageJson(packageJson, packageName) {
  try {
    const { bin, license, homepage, repository, bugs, dependencies, ...rest } =
      packageJson;

    const newPackage = {
      ...rest,
      name: packageName,
      version: '1.0.0',
      description: '',
      author: '',
    };

    fs.writeFileSync(
      `${projectPath}/package.json`,
      JSON.stringify(newPackage, null, 2),
      'utf8',
    );
  } catch (error) {
    console.log(colors.red.bold(error));
  }
}

function main() {
  try {
    const packageName =
      projectName == '.' || projectName == './'
        ? projectPath.split(path.sep).pop()
        : projectName;

    console.log(
      `${emoji.get('gear')} Setting up the app at ${colors.brightGreen(
        projectPath,
      )}...\n`,
    );
    execSync(`git clone --depth 1 ${git_repo} "${projectPath}"`, {
      stdio: 'pipe',
    });

    if (projectName != '.' || projectName != './') process.chdir(projectPath);

    console.log(`${emoji.get(':arrow_down:')} Installing packages...`);
    console.log(
      `Installing ${colors.brightMagenta(
        'webpack stuffs',
      )}, ${colors.brightMagenta(
        'modern-web-dev-utils',
      )}, and ${colors.brightMagenta('other packages')}\n`,
    );

    fs.unlinkSync(path.join(projectPath, 'package.json'));

    buildPackageJson(packageJson, packageName);

    execSync(
      'npm install --save-dev copy-webpack-plugin modern-web-dev-utils webpack webpack-cli webpack-dev-server webpack-merge rimraf',
    );

    console.log('Finalizing the app □□□□□□□□□□□□□□\n');
    execSync('npx rimraf ./.git');
    fs.rmSync(path.join(projectPath, 'bin'), { recursive: true });

    execSync('git init');

    console.log(
      `${colors.brightGreen('Success!')} ${emoji.get(
        'fire',
      )}\nCreated modern web dev app at ${projectPath}\n`,
    );

    console.log(
      `${colors.bold(
        'Inside the project, you can run some built-in commands:',
      )}\n`,
    );

    console.log(`  ${colors.brightMagenta('npm start')}`);
    console.log('    Start the development server\n');

    console.log(`  ${colors.brightMagenta('npm run build')}`);
    console.log('    Create a minified bundled app for production\n');
  } catch (error) {
    if (error.status === 128)
      console.log(
        colors.red.bold(
          `Destination path ${projectPath} is not an empty directory`,
        ),
      );

    console.log(colors.red.bold(error));
  }
}

main();
