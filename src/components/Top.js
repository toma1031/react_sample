// 参考資料
// https://reactnative.dev/docs/button
// https://stackoverflow.com/questions/49667452/module-not-found-cant-resolve-react-native-react-native
// https://www.yuuuki-blog.com/2020/10/02/%E3%80%90React%E3%80%91%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA%E3%81%A7useState%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F/

import React, { useState } from 'react';
import { Button } from 'react-native';

const Top = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const countReset = () => {
    setCount(0);
  };

  console.log(count)
  return (
      <div className="">
        <h1>{count}</h1>
        <Button
        title="+"
        onPress={countUp}
        />
        <Button
        title="-"
        onPress={countDown}
        />
        <Button
        title="Reset"
        onPress={countReset}
        />
      </div>
  );
}

export default Top;