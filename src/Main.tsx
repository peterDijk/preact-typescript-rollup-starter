import {h, Component } from 'preact';
import { useState } from 'preact/hooks';

export class Main extends Component<{}, any> {
  constructor(props: {}) {
    super(props);

  }

  render() {
    return <HelloWorld />
  }
}

export const HelloWorld = () => {
  const [text, setText ] = useState('init');
  return (
    <div>
      <div>{text}</div>
      <button onClick={() => setText('changed!')}>Button text</button>
    </div>
  )
}