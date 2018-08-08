import { Argv } from 'yargs';
export const command = 'react [command]';
export const desc = 'React';
export const builder = (yargs: Argv) => {
  return yargs.commandDir('react');
};
export const handler = () => null;
