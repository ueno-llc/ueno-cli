declare module 'ink' {
  import { createElement, Component as ReactComponent } from 'react';

  export interface Styles {
    // Colors
    black: boolean;
    red: boolean;
    green: boolean;
    yellow: boolean;
    blue: boolean;
    magenta: boolean;
    cyan: boolean;
    white: boolean;
    gray: boolean;
    redBright: boolean;
    greenBright: boolean;
    yellowBright: boolean;
    blueBright: boolean;
    magentaBright: boolean;
    cyanBright: boolean;
    whiteBright: boolean;

    // BG colors
    bgBlack: boolean;
    bgRed: boolean;
    bgGreen: boolean;
    bgYellow: boolean;
    bgBlue: boolean;
    bgMagenta: boolean;
    bgCyan: boolean;
    bgWhite: boolean;
    bgBlackBright: boolean;
    bgRedBright: boolean;
    bgGreenBright: boolean;
    bgYellowBright: boolean;
    bgBlueBright: boolean;
    bgMagentaBright: boolean;
    bgCyanBright: boolean;
    bgWhiteBright: boolean;

    // Modifiers
    reset: boolean;
    bold: boolean;
    dim: boolean;
    italic: boolean;
    underline: boolean;
    inverse: boolean;
    hidden: boolean;
    strikethrough: boolean;
    visible: boolean;

    // Other fns
    hex: string;
    bgHex: string;
    rgb: number[];
    hsl: number[];
    hsv: number[];
    keyword: string;
    bgKeyword: string;
  }

  export class Component<P, S> extends ReactComponent<P, S> {}
  export class StringComponent extends Component<{}, {}> { }
  export class Newline extends Component<{}, {}> {}
  export class Fragment extends Component<{}, {}> {}
  export class Indent extends Component<{ size: number; indent: string }, {}> {}
  export class Group extends Component<{}, {}> {}
  export class Text extends Component<Partial<Styles>, {}> {}
  export class Color extends Component<Partial<Styles>, {}> {}

  export const h: typeof createElement;
  export function renderToString(tree: JSX.Element): string;
  export function render(tree: JSX.Element, prevTree?: JSX.Element): () => void;
  export function mount(tree: JSX.Element, stream: NodeJS.WritableStream): () => void;
}
