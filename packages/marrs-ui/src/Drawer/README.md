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

## API

### DrawerComponent


|参数|说明|类型|必须|
|--|--|--|--|
|visible| Drawer 是否可见|_boolean_|是|
|position| Drawer 位置|_"top"\|"bottom"\|"left"\|"right"_|否|
|contentSpace| Drawer 内容空间大小|_string_|否|

### DrawerAction


|参数|说明|类型|必须|
|--|--|--|--|
|onClose| 关闭弹窗|_EventHandler_|否|

### DrawerClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|backdrop|应用于该名称的样式类|_string_|否|
|popupRoot|应用于该名称的样式类|_string_|否|
