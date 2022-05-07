import { Slider } from '@wemo-ui/marrs';
import React from 'react';

function SliderView() {
  const [value, setValue] = React.useState([0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ padding: 20 }}>
      默认样式：<Slider onChange={handleChange}></Slider>
      自定义样式：
      <Slider
        color="info"
        height={12}
        borderRadius={2}
        trackHeight={6}
        thumbSize={22}
        thumbColor="info"
        onChange={handleChange}
      ></Slider>
      指定范围（-100～100）默认（0～100）：
      <Slider min={-100} max={100} onChange={handleChange}></Slider>
      指定步长5（默认是1）
      <Slider step={5} onChange={handleChange}></Slider>
      禁用样式（默认值30）
      <Slider disabled value={30} onChange={handleChange}></Slider>
      双滑块样式[30, 60]
      <Slider value={[30, 60]} onChange={handleChange}></Slider>
      <div style={{ height: 200 }}>
        垂直滑块：<Slider vertical onChange={handleChange}></Slider>
      </div>
      <div style={{ height: 200 }}>
        垂直双滑块[30, 60]：
        <Slider value={[30, 60]} vertical onChange={handleChange}></Slider>
      </div>
      <br />
      <div>
        当前值{value[0]} , {value[1]}
      </div>
    </div>
  );
}

export default SliderView;
