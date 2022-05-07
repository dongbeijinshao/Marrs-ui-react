# BackTop 回到顶部

### 介绍

返回页面顶部的操作按钮。


### 引入

```js
import { BackTop, Cell, CellGroup } from '@wemo-ui/marrs';
```

## 代码演示

### 基本用法

```html
<CellGroup>
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
  <Cell title="单元格" showArrow />
</CellGroup>
<BackTop smooth />
```

## API

### BackTopComponent


|参数|说明|类型|必须|
|--|--|--|--|
|smooth| 是否顺滑跳跃|_boolean_|否|
|draggable| 是否可以拖拽|_boolean_|否|
|edge| 开始显示的时机 window.scrollY &gt; edge|_number_|否|
|offset| 初始化位置,可选值 &#34;top&#34;|&#34;bottom&#34;|&#34;left&#34;|&#34;right&#34;|_"top"\|"bottom"\|"left"\|"right"_|否|

### BackTopAction


|参数|说明|类型|必须|
|--|--|--|--|
|onClick| 点击触发|_EventHandler_|否|

### BackTopClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|button|应用于该名称的样式类|_string_|否|
|icon|应用于该名称的样式类|_string_|否|
