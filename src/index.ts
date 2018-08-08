import * as yargs from 'yargs';

yargs
  .commandDir('commands')
  .demandCommand()
  .help()
  .argv;
