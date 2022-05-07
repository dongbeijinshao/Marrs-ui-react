# Drawer 抽屉

### 介绍

屏幕边缘滑出的浮层面板。


### 引入

```js
import { Drawer } from '@wemo-ui/marrs';
```

## 代码演示

### 基本用法

```jsx
<CellGroup>
  <Cell title="基本用法" showArrow onClick={handleShow} />
</CellGroup>
<Drawer visible={visible} position="left" onClose={handleClose}>
  这是内容
</Drawer>
```