# Can 排版

### 介绍

块级文本的基本格式。


### 引入

```js
import { Can } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```jsx
<Can>这是一块内容</Can>
```

### 圆形样式

```jsx
<Can
  style={{
    background: 'green',
    textAlign: 'center',
    lineHeight: '100px',
    color: '#fff'
  }}
  size={{ width: 100, height: 100 }}
  circle
>
  圆形
</Can>
```

## API

### CanComponent


|参数|说明|类型|必须|
|--|--|--|--|
|size| 具体大小|_Size_|否|
|elevation| 3D高度层级, 0-25|_number_|否|
|circle| 是否圆形|_boolean_|否|
|radius| 圆角, 基础（默认4px) 的倍数|_string\|number_|否|

### CanClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
