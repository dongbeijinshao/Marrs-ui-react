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