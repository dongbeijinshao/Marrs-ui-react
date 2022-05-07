# Progress 进度条

### 介绍

用于展示操作的当前进度。

### 引入

```js
import { Progress, Can, Grid } from '@wemo-ui/marrs';
```

## 代码演示

### 基本样式

```html
<Can className="demo-margin-b-10" sx={{ width: 128 }}>
  <Progress value={50} />
</Can>
<Can className="demo-margin-b-10" sx={{ width: 180 }}>
  <Progress value={50} color="info" />
</Can>
<Can className="demo-margin-b-10" sx={{ width: 240 }}>
  <Progress value={50} color="warning" />
</Can>
```
### 环形样式

```html
<Grid gap={10}>
  <Progress value={50} type="circle" />
  <Progress value={50} type="circle" color="info" />
  <Progress value={50} type="circle" color="warning" />
</Grid>
```

## API

### ProgressComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|volume|尺寸规格|_tiny \| small \| medium \| big \| large_|否|
|overrideLabel| 覆盖输入值的方法，如 (p) =&gt; p + &#39;%&#39;|_any_|否|
|type| 类型，可选值 `line` `circle`|_"line"\|"circle"_|否|
|radius| 圆角|_number\|string_|否|
|value| 初始值|_number\|string_|否|
|labelPlace| label 放的位置 ，仅在 line 模式下有用|_"inner"\|"outer"_|否|

### ProgressClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|circle|应用于该名称的样式类|_string_|否|
|label|应用于该名称的样式类|_string_|否|
|box|应用于该名称的样式类|_string_|否|
|rail|应用于该名称的样式类|_string_|否|
|track|应用于该名称的样式类|_string_|否|
|inner|应用于该名称的样式类|_string_|否|
|outer|应用于该名称的样式类|_string_|否|
