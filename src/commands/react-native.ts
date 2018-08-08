export const command = 'react-native [command]';
export const desc = 'React Native';
export const builder = function commandBuilder(yargs) {
  return yargs.commandDir('react-native');
};
export const handler = function commandHandler() {}
