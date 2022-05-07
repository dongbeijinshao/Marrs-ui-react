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