# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

```js
import { Slider, Can } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Slider value={30} />
<Slider value={30} color="info" />
```
### 指定范围

```html
 <Slider value={-30} min={-100} max={100} />
```
### 指定步长

```html
<Slider value={30} step={5} />
```
### 禁止样式

```html
<Slider value={30} disabled />
```
### 双滑块样式

```html
<Slider value={30} />
```
### 纵向模式

```html
 <Can style={{ height: 100 }}>
  <Slider value={30} vertical />
</Can>
```


## API

### SliderComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|vertical| 设置方向,可选值 `vertical` `horizontal`|_"vertical"\|"horizontal"_|否|
|width| 宽度|_number\|string_|否|
|height| 高度|_number_|否|
|borderRadius| 圆角,默认4|_number\|string_|否|
|trackHeight| 选中的高度|_number_|否|
|thumbSize| 移动点大小|_number\|string_|否|
|thumbColor| 移动点颜色|_string_|否|
|min| 最小值|_number\|string_|否|
|max| 最大值|_number\|string_|否|
|step| 步长，默认1|_number\|string_|否|
|value| 默认值|_number\|string_|否|
|disabled| 是否禁用|_boolean_|否|

### SliderAction


|参数|说明|类型|必须|
|--|--|--|--|
|onChange| 值改变时候触发|_EventHandler_|否|

### SliderClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|rail|应用于该名称的样式类|_string_|否|
|track|应用于该名称的样式类|_string_|否|
|thumb|应用于该名称的样式类|_string_|否|
