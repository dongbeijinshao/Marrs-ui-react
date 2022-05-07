# TreeSelect 分类选择

### 介绍

树型选择控件

### 引入

```js
import { TreeSelect } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<TreeSelect value="1">
  <TreeSelectContent title="水果" name="1" badge={1}>
    <BasicSelectorOption label="苹果" value={1} />
    <BasicSelectorOption label="香蕉" value={2} />
    <BasicSelectorOption label="橘子" value={3} disabled />
    <BasicSelectorOption label="龙眼" value={4} />
  </TreeSelectContent>
  <TreeSelectContent title="饮料" name="2">
    <BasicSelectorOption label="阿萨姆" value={1} />
    <BasicSelectorOption label="冰糖雪梨" value={2} />
    <BasicSelectorOption label="百事可乐" value={3} />
    <BasicSelectorOption label="雪碧" value={4} />
  </TreeSelectContent>
  <TreeSelectContent title="城市" name="3">
    <BasicSelectorOption label="北京" value={1} />
    <BasicSelectorOption label="上海" value={2} />
    <BasicSelectorOption label="广州" value={3} />
    <BasicSelectorOption label="深圳" value={4} />
  </TreeSelectContent>
</TreeSelect>
```
### 自定义内容

```html
<TreeSelect value="1">
  <TreeSelectContent title="水果" name="1">
    <Can sx={{ textAlign: 'center' }}>自定义内容</Can>
  </TreeSelectContent>
  <TreeSelectContent title="饮料" name="2">
    <Can sx={{ textAlign: 'center' }}>自定义内容</Can>
  </TreeSelectContent>
  <TreeSelectContent title="主食" name="3">
    <Can sx={{ textAlign: 'center' }}>自定义内容</Can>
  </TreeSelectContent>
</TreeSelect>
```

## API

### TreeSelect Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| TreeSelect 样式类 | _string_ | - |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| value | 默认选中值, 默认索引 | _string_ | `index` |

### TreeSelectContent Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| TreeSelectContent 样式类 | _string_ | - |
| name | 唯一标识 | _string \| number_ | - |
| title | 标题 | _string_ | - |

### BaseSelector Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| TreeSelectContent 样式类 | _string_ | - |
| multiple | 是否支持多选 | _boolean_ | `false` |
| max | 最大个数 | _number_ | - |
| min | 最小个数 | _number_ | `0` |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| value | 初始值 | _Array_ | `[]` |

### BasicSelectorOption Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| TreeSelectContent 样式类 | _string_ | - |
| label | 标题 | _string_ | - |
| checked | 是否选中 | _boolean_ | `false` |
| min | 最小个数 | _number_ | `0` |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| disabled | 是否禁用 | _boolean_ | `false` |
| value | 初始值 | _string \| number_| - |

### TreeSelect Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onTabChange | 左边导航的change事件 | - |

### BaseSelector Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值改变事件 | - |

### BasicSelectorOption Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值改变事件 | - |
| onClick | 点击按钮，且按钮状态不为禁用时触发 | - |
