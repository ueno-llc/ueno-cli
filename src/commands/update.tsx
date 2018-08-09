import { exec } from 'child_process';
import { h, render } from 'ink';
import * as Spinner from 'ink-spinner';

interface IPackageJson {
  version: string;
}

export const command = 'update';
export const desc = 'Update the ueno-cli';
export const builder = () => null;
export const handler = async () => {

  // tslint:disable-next-line no-require-imports
  const currentVersion = (require('../../../package.json') as IPackageJson).version;
  const unmount = render((
    <div>
      <Spinner /> Checking for newer version
    </div>
  ));

  exec('npm update --global ueno-cli', () => {
    exec('ueno-cli --version', (err: Error, stdout: string) => {

      unmount();

      if (err !== undefined) {
        return;
      }

      const newVersion = String(stdout).trim();

      if (newVersion === currentVersion) {
        console.log('You are already using the latest version:', currentVersion);
      } else {
        console.log('Bleep blob! ueno-cli has been updated to version:', newVersion);
      }
    });
  });
};
