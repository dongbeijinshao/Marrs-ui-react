# Divider 分割线

### 介绍

区隔内容的分割线。


### 引入

```js
import { Divider } from '@wemo-ui/marrs';
```

## 代码演示

### 基本样式

Divider 的基本使用。

```jsx
<Divider />
```

### 展示文本

```jsx
<Divider>分割线</Divider>
```

### 自定义样式

```jsx
<Divider color="primary">自定义颜色</Divider>
<Divider gap={3} tipStart={20}>
  分割线
</Divider>
<Divider tipStart={200}>分割线</Divider>
```

### 纵向分割

```jsx
内容1
  <Divider vertical sx={{ margin: `0 10px` }} />
内容2
```

## API

### DividerComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|gap| spacing tip与线的间隙|_number_|否|
|vertical| 是否垂直的,默认 false|_boolean_|否|
|thickness| 线厚度|_number_|否|
|color| 勾选中的checked|_ColorNameOrValue_|否|
|tipStart| 自定义|_string_|否|

### DividerClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|vertical|应用于该名称的样式类|_string_|否|
|horizontal|应用于该名称的样式类|_string_|否|
|line|应用于该名称的样式类|_string_|否|
|tip|应用于该名称的样式类|_string_|否|
