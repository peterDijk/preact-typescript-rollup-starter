import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export const sleep = (time: number): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve('Preact Typescript w/ Rollup'), time);
  });

export const App = () => {
  const [text, setText] = useState<string>('...');

  useEffect(() => {
    sleep(1000).then((res) => {
      setText(res);
    });
  }, []);

  return (
    <div>
      <div>
        <a
          href="https://github.com/peterDijk/preact-typescript-rollup-starter"
          target="_blank"
        >
          <img src="images/GitHub-Mark-32px.png" />
        </a>
      </div>
      {/* >>> */}
      {text}
    </div>
  );
};
