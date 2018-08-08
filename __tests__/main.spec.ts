import { execFile } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execFile);

describe('--version', () => {

  it('should report package.json version', async () => {
    // tslint:disable-next-line no-require-imports
    const pkg = require('../package.json');
    const { stdout } = await exec('node', ['./build/src', '--version']);
    expect(stdout.trim()).toBe(pkg.version);
  });

});

describe('--help', () => {
  it('should show help', () => {
    expect(
      exec('node', ['./build/src', '--help']),
    ).resolves.toBeTruthy();
  });
});
