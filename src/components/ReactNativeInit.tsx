import * as path from 'path';
import exec from 'async-exec';
import { h, Color, Component } from 'ink';
import { kebabCase } from 'lodash';
import * as Spinner from 'ink-spinner';

interface IProps {
  appName: string;
  bundleId: string;
  next: boolean;
  onComplete(): void;
}

interface IState {
  mode: number;
  text: string;
}

const PROCESSING = 0;
const DONE = 1;

export class ReactNativeInit extends Component<IProps, IState> {

  public state: IState = {
    mode: PROCESSING,
    text: 'Loading...',
  };

  public componentDidMount() {
    this.start();
  }

  get folderName() {
    return kebabCase(this.props.appName);
  }

  get dirName() {
    return path.join(process.cwd(), this.folderName);
  }

  public async start() {
    const { appName, bundleId, next } = this.props;
    const branch = !next ? '-b master' : '';

    this.setState({ text: 'Cloning ueno-llc/react-native-starter' });
    await exec(`git clone ${branch} git@github.com:ueno-llc/react-native-starter.git ${this.dirName}`);
    this.setState({ text: 'Installing dependencies' });
    await exec(`cd ${this.dirName} && yarn`);
    this.setState({ text: 'Renaming application' });
    await exec(`cd ${this.dirName} && yarn rename "${appName}" "${bundleId}"`);
    this.setState({ mode: DONE });
    setTimeout(this.props.onComplete, 10);
  }

  public render() {
    const { appName } = this.props;

    if (this.state.mode === PROCESSING) {
      return (
        <div>
          <div>Creating a new React Native app in <Color green>{this.dirName}</Color>.</div>
          <div />
          <div><Spinner /> {this.state.text}</div>
        </div>
      );
    }

    if (this.state.mode === DONE) {
      return (
        <div>
          <div />
          <div>Success! Created app <Color yellow>{appName}</Color> at {this.dirName}</div>
          <div>Inside that directory, you can run several commands:</div>
          <div />
          <div>  <Color cyan>yarn start</Color></div>
          <div>    Starts the metro packager</div>
          <div />
          <div>  <Color cyan>react-native run-ios</Color></div>
          <div>    Builds the iOS app and starts Simulator</div>
          <div />
          <div>  <Color cyan>react-native run-android</Color></div>
          <div>    Builds the Android app</div>
          <div />
          <div>We suggest that you begin by typing:</div>
          <div>  <Color cyan>cd</Color> {this.folderName}</div>
          <div>  <Color cyan>yarn start {'&&'} react-native run-ios</Color></div>
          <div />
          <div>Happy hacking!</div>
        </div>
      );
    }

    return null;
  }
}
