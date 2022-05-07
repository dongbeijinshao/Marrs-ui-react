# Tag 标签

### 介绍

进行标记和分类的小标签。

### 引入

```js
import { Tag, Icon } from '@wemo-ui/marrs';
import { IconHome, IconClose } from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<Tag>标签</Tag>
<Tag face="flat">标签</Tag>
<Tag face="plain">标签</Tag>
```
### 自定义样式

```html
<Tag color="success" sx={{ borderRadius: 4 }}>
  标签
</Tag>
```
### 搭配图标

```html
<Tag startIcon={<Icon icon={<IconHome />} sx={{ marginLeft: 2 }} />}>
  标签
</Tag>
<Tag
  endIcon={<Icon icon={<IconClose />} sx={{ marginRight: 2 }} />}
  sx={{ paddingLeft: 2.5 }}
>
  标签
</Tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| Tag 样式类 | _string_ | - |
| radius | 形状 | _number_ \| _number[]_ | 4 |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| face | 类型，可选值为 `filled` `plain` `text` | _string_ | `filled` |
| volume | 尺寸，可选值为  `small` `medium` `big` | _string_ | `medium` |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsTag-root | 应用于根元素的样式类 |
| startIcon| .MarrsTag-root | 应用于`startIcon`的样式类 |
| endIcon| .MarrsTag-root | 应用于`endIcon`的样式类 |
| content| .MarrsTag-root | 应用于`content`的样式类 |
