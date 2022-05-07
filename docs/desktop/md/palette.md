# 主题调色板

### 背景知识

主题调色板是当前的主题色值，你可以通过[主题定制](/theme)，改变其色值。

### 引入

```js
import { ThemeFactory } from '@wemo-ui/marrs-theming';
```

## 使用

### 演示代码

右边是演示，**而您仅需这些操作**：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeFactory } from '@wemo-ui/marrs-theming';

function App() {
  return <ThemeFactory />;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
