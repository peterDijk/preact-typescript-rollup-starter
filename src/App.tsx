import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export const sleep = (time: number): Promise<string> =>
  new Promise(resolve => {
    setTimeout(() => resolve("Hello world!"), time);
  });

export const App = () => {
  const [text, setText] = useState<string>("wait for it ...");

  useEffect(() => {
    sleep(1000).then(res => {
      setText(res);
    });
  }, []);

  return (
    <div>
      {`>> `}
      {text}
    </div>
  );
};
