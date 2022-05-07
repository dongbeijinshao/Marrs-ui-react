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