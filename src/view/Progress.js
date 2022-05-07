import { Progress } from '@wemo-ui/marrs';
import { useEventCallback } from '@wemo-ui/marrs/utils';
import React from 'react';

function ProgressView() {
  const [percent, setPrecent] = React.useState(10);

  const handleChange = useEventCallback((event) => {
    setPrecent(event.target.value);
  });

  return (
    <div style={{ padding: 20 }}>
      <input type="text" value={percent} onChange={handleChange} />
      <br />
      默认样式
      <Progress value={percent}></Progress>
      <br />
      <Progress value={percent} color="success"></Progress>
      <br />
      <Progress value={percent} color="info"></Progress>
      <br />
      百分比内显示
      <Progress volume={2} labelPlace="inner" value={percent}></Progress>
      <br />
      <Progress
        volume={4}
        color="info"
        labelPlace="outer"
        value={percent}
        overrideLabel={(value) => '百分之: ' + value}
      ></Progress>
      <br />
      环形样式
      <br />
      <div style={{ width: 100, height: 100 }}>
        <Progress type="circle" value={percent}></Progress>
      </div>
      <Progress
        type="circle"
        color="info"
        value={percent}
        overrideLabel={(value) => value + 'percent'}
      ></Progress>
    </div>
  );
}

export default ProgressView;
