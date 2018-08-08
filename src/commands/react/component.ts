import { Arguments, Argv } from 'yargs';

export const command = 'component [name]';
export const desc = 'initialize react component';
export const builder = (yargs: Argv) =>
  yargs
    .option('style', {
      describe: 'Create and import styles from file',
      choices: ['scss', 'stylus', 'less', 'css'],
    })
    .option('ext', {
      describe: 'Component file extension (tsx for TypeScript)',
      default: 'js',
      choices: ['js', 'jsx', 'tsx'],
    })
    .option('pure', {
      describe: 'Use PureComponent',
      default: false,
      type: 'boolean',
    });

export const handler = (args: Arguments) => {
  console.log('TODO', args);
};
