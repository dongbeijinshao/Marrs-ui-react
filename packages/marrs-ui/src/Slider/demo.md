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
