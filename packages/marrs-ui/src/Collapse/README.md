# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

```js
import { Collapse, CollapseGroup } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
 <CollapseGroup volume="large" value={1}>
  <Collapse title="标题文字A" contentControl="标题A下的内容" />
  <Collapse title="标题文字B" contentControl="标题B下的内容" />
  <Collapse title="标题文字C" contentControl="标题C下的内容" />
  <Collapse title="标题文字D" contentControl="标题D下的内容" />
</CollapseGroup>
```
### 手风琴模式

```html
<CollapseGroup volume="large" value={[0, 1]} accordion>
  <Collapse title="标题文字A" name={1} contentControl="标题A下的内容" />
  <Collapse title="标题文字B" name={2} contentControl="标题B下的内容" />
  <Collapse title="标题文字C" name={3} contentControl="标题C下的内容" />
  <Collapse title="标题文字D" name={4} contentControl="标题D下的内容" />
</CollapseGroup>
```

## API

### CollapseGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| CollapseGroup 样式类 | _string_ | - |
| volume | 尺寸，可选值为 `tiny` `small` `medium` `large` | _string_ | `medium` |
| border| 是否显示内边框 | _nodeElement_ | - |
| value| 当前展开面板的 name, 数组是手风琴模式，单个字符串或者数字是非手风琴模式 | _string_  | - |
| accordion| 是否手风琴 | _boolean_ | `false` |


## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| Collapse 样式类 | _string_ | - |
| name| 唯一标识符，默认为索引值 | _string \| number_ | `index` |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| volume | 尺寸，可选值为 `tiny` `small` `medium` `large` | _string_ | `medium` |
| title | 左侧标题 | _string_ | - |
| content | 右侧内容 | _ReactNode_ | - |
| label | 标题下方的描述信息 | _string_ | _ReactNode_ | - |
| colon | 是否在 title 后面添加冒号 | _boolean_ | `false` |
| ellipsis | 是否省略点点，默认换行,(点点点时候指定宽度，否则无效) | _boolean_ | `false` |
| labelAlign | label对齐方式，可选值为 center right, left | _string_ | `left` |
| titleWidth | title 宽度 | _string_ | `50%` |
| rightIcon | 右边icon, showArrow存在时，优先showArrow | _ReactNode_ | - |
| rightControl | 右边控件,包括按钮、徽章、开关、图片、头像等控件。 | _ReactNode_ | - |
| leftControl | 左侧控件 | _ReactNode_ | - |
| leftControlPosition | 左侧控件相对于标题的位置,可选值left,right | _string_ | `left` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| leftControlClass | 描述信息额外类名 | _ReactNode_ | - |
| classes | 覆盖样式 | _object_ | - |
| contentControl| 自定义面板内容 | _ReactNode_ | - |
| expand| 是否展开 | _boolean_ | `false` |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsCollapseGroup-root | 应用于`group`根元素的样式类 |
| cell| .MarrsCollapse-cell | 应用于`cell`元素的样式类 |
| wrapper| .MarrsCollapse-wrapper | 应用于`wrapper`元素的样式类 |
| content| .MarrsCollapse-content | 应用于`content`元素的样式类 |
