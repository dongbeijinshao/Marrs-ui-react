# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。


### 引入

```js
import { Avatar } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Avatar icon={<IconAnnotation />} />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| Avatar 样式类 | _string_ | - |
| volume | 尺寸，可选值为 `tiny` `small` `medium` `large` | _string_ | `medium` |
| radius| 指定头像的形状 | _string \| number_ | `50%` |
| icon| 设置头像的自定义图标 | _ReactNode_ | - |


