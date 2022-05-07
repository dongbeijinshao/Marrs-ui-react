# 快速上手

### 背景知识

使用 Marrs UI 前，请确保你已经学习过 React [入门教程](https://react.docschina.org/tutorial/tutorial.html)

#### 注意：在未对外开放之前，请保证您使用的是 weimob npm 镜像源，否则可能无法下载。


## 安装

### npm 或 yarn 安装

若想安装并写入您的 `package.json` 依赖包，请运行以下命令：

```bash
# 通过 npm 安装
npm install @wemo-ui/marrs
```

### SVG 安装

您可以发现一些由我们提供的 SVG Marrs icons。若 想单独使用，也可以单独安装 @wemo-ui/marrs-icons 这个包：

```bash
# 通过 npm 安装
npm install @wemo-ui/marrs-icons
```

### 主题调色板 安装

[主题调色板](/palette)是由我们提供的便于开发者理解和扩展主题默认功能。若 想单独使用，也可以单独安装 @wemo-ui/marrs-theming 这个包：

```bash
# 通过 npm 安装
npm install @wemo-ui/marrs-theming
```

## 使用

### 快速入门

下面是来帮助您入门的一个快速示例，**而您仅需这些操作**：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';

function App() {
  return <Button color="success">hello,world</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
