import { h, render } from 'preact';
import { App } from './App';
import './style/style.css';
import './style/tailwind.css';

import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root') as HTMLElement;

render(<App />, root);

serviceWorker.register();
