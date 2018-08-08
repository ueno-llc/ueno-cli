import { Argv } from 'yargs';

export const command = 'init [AppName]';
export const desc = 'initialize react native project';
export const builder = (yargs: Argv) => {
  return yargs.option('bundleId', {
    describe: 'bundle identifier',
    default: 'com.ueno.reactnativestarter',
  });
};

export const handler = () => {
  console.log('TODO');
};
