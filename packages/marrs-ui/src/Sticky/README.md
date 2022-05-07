# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中position: sticky属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

```js
import { Sticky } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
 <Sticky>
  <Button>Sticky</Button>
</Sticky>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| Sticky 样式类 | _string_ | - |
| zIndex| 层级 | _number_ | `heme.zIndex.sticky` |
| position| 位置 | _string_ | `top` |
| offset| 偏移量 | _object_ | `{}` |
| container| 容器 | _boolean_ | `false` |


### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 改变触发 | - |
