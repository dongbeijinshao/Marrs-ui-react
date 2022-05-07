# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

```js
import { Loading } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Loading>基础样式</Loading>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| Loading 样式类 | _string_ | - |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| icon | 自定义icon | _ReactNode_ | `<Icon icon={<IconHubbleBubble />}` |
| text | 加载文案 | _string_ | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsLoading-root | 应用于根元素的样式类 |
| icon| .MarrsLoading-icon | 应用于`icon`元素的样式类 |
| text| .MarrsLoading-text | 应用于`text`元素的样式类 |

