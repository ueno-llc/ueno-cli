declare module 'ink' {
  import { createElement, Component as ReactComponent } from 'react';

  export interface Styles {
    green: boolean;
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
