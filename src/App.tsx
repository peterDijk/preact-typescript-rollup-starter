import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export const sleep = (time: number): Promise<unknown> =>
  new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });

export const App = () => {
  const [text, setText] = useState<string>("wait for it ...");

  useEffect(() => {
    sleep(1000).then(res => {
      setText("Hello world!");
    });
  }, []);

  return <div>{text}</div>;
};
