# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
弹出框组件支持函数调用和组件调用两种方式。

### 引入

```js
import { Dialog, Cell, CellGroup, Text } from '@wemo-ui/marrs';
import { useState } from 'react';
```

## 代码演示

### react 部分

```html
const content = '这是一段内容';
const [visible, setVisible] = useState(false);
const [title, setTitle] = useState();
const [showCancelButton, setShowCancelButton] = useState(false);
const [confirmText, setConfirmText] = useState();
const [cancelText, setCancelText] = useState();

const handleTitle = () => {
  setTitle('标题');
  handleShow();
};

const handleNoTitle = () => {
  setTitle('');
  handleShow();
};

const handleConfirm = () => {
  setTitle('');
  handleShow();
  setShowCancelButton(true);
};

const handleClose = () => {
  setVisible(false);
};

const handleShow = () => {
  setVisible(true);
};

const handleText = () => {
  setVisible(true);
  setShowCancelButton(true);
  setConfirmText('yes');
  setCancelText('cancel');
};

```

### 基础样式

```html
<CellGroup>
  <Cell title="带标题样式" showArrow onClick={handleTitle} />
  <Cell title="无标题样式" showArrow onClick={handleNoTitle} />
  <Cell title="确认样式" showArrow onClick={handleConfirm} />
</CellGroup>
<Dialog
  visible={visible}
  title={title}
  confirmText={confirmText}
  cancelText={cancelText}
  showCancelButton={showCancelButton}
  onClose={handleClose}
  onCancel={handleClose}
  onConfirm={handleClose}
>
  <Text>{content}</Text>
</Dialog>
```
### 自定义文本内容

```html
<CellGroup>
  <Cell title="自定义文本内容" showArrow onClick={handleText} />
</CellGroup>
<Dialog
  visible={visible}
  title={title}
  confirmText={confirmText}
  cancelText={cancelText}
  showCancelButton={showCancelButton}
  onClose={handleClose}
  onCancel={handleClose}
  onConfirm={handleClose}
>
  <Text>{content}</Text>
</Dialog>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| Dialog 样式类 | _string_ | - |
| visible| 是否展示Dialog | _boolean_ | `false` |
| title| 标题 | _string_ | - |
| showCancelButton| 是否展示取消按钮 | _boolean_ | `false` |
| confirmText| 确认文案 | _string_ | `确认` |
| cancelText| 取消文案   | _string_ | `取消` |
| classes| 覆盖样式类 | _object_ | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | 确认触发 | - |
| onCancel | 取消触发 | - |
| onClose | 关闭触发 | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsDialog-root | 应用于根元素的样式类 |
| header| .MarrsDialog-header | 应用于`header`元素的样式类 |
| footer| .MarrsDialog-footer | 应用于`footer`元素的样式类 |
| body| .MarrsDialog-body | 应用于`body`元素的样式类 |
| divider| .MarrsDialog-title | 应用于`divider`元素的样式类 |
