export const command = 'init [AppName]';
export const desc = 'initialize react native project';
export const builder = function commandBuilder(yargs) {
  return yargs.option('bundleId', {
    describe: 'bundle identifier',
    default: 'com.ueno.reactnativestarter'
  });
};

export const handler = function commandHandler() {
  console.log('TODO');
}
