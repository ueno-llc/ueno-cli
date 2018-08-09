import { Arguments, Argv } from 'yargs';
import { h, render } from 'ink';
import { ReactNativeInit } from '../../components/ReactNativeInit';

export const command = 'init [AppName]';
export const desc = 'initialize react native project';
export const builder = (yargs: Argv) =>
  yargs
    .option('bundleId', {
      describe: 'bundle identifier',
      default: 'com.ueno.reactnativestarter',
    })
    .option('next', {
      type: 'boolean',
      describe: 'use latest development version',
      default: false,
    });

export const handler = async (args: Arguments) => {
  const { AppName, bundleId, next } = args;

  const unmount = render(
    <ReactNativeInit
      appName={AppName}
      bundleId={bundleId}
      next={next}
      onComplete={doUnmount}
    />,
  );

  function doUnmount() {
    unmount();
  }
};
