import { Argv } from 'yargs';

export const command = 'react-native [command]';
export const desc = 'React Native';
export const builder = (yargs: Argv) => {
  return yargs.commandDir('react-native');
};
export const handler = () => null;
