# Backdrop 背景暗化

### 介绍

提供针对特定元素或这个元素一部分的强调。


### 引入

```js
import { Backdrop } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```jsx
<Cell title="背景板" showArrow onClick={handleClick} />
<Backdrop visible={visible} onClick={handleVisible}></Backdrop>
```

## API

### BackdropComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|visible| 背景是否可见|_boolean_|否|
|alpha| 背景暗影程度|_number_|否|
|closeOnTap| 是否开启关闭点击触发 beforeClose、afterClose|_boolean_|否|
|container| 背景容器|_ReactNode_|否|

### BackdropAction


|参数|说明|类型|必须|
|--|--|--|--|
|beforeOpen| 打开之前触发|_EventHandler_|否|
|afterOpen| 打开之后触发|_EventHandler_|否|
|beforeClose| 关闭之前触发|_EventHandler_|否|
|afterClose| 关闭之后触发|_EventHandler_|否|
|onClick| 点击触发|_EventHandler_|否|

### BackdropClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
