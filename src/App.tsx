import { h, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export const sleep = (time: number): Promise<string> =>
  new Promise(resolve => {
    setTimeout(() => resolve('Preact PWA - Typescript w/ Rollup Starter Pack'), time);
  });

export const App: FunctionComponent = () => {
  const [text, setText] = useState<string>('...');

  useEffect(() => {
    sleep(1000).then(res => {
      setText(res);
    });
  }, []);

  return (
    <div>
      <div>
        <a href="https://github.com/peterDijk/preact-typescript-rollup-starter" target="_blank">
          <img src="images/GitHub-Mark-Light-32px.png" />
        </a>
      </div>
      {text}
    </div>
  );
};
