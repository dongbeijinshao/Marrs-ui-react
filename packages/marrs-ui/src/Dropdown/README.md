# Dropdown 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

```js
import { Dropdown } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<DropdownGroup>
  <Dropdown value={1} options={options} />
  <Dropdown value={2} options={options1} />
</DropdownGroup>
```

## API

### DropdownGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |

### Dropdown Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name| 唯一标识 | _string \| number_ | - |
| options| 选项数组, text:文字, value:标识符 | _Array_ | - |



### options 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| text      | 文案                     | _string_                    |
| value   | 唯一标识                 | _string \| number_                    |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| toggle | 外部点出触发 | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsDropdownGroup-root | 应用于`group`根元素的样式类 |
| content| .MarrsDropdownGroup-content | 应用于`group content`根元素的样式类 |
| root| .MarrsDropdown-root | 应用于根元素的样式类 |
| popup| .MarrsDropdown-popup | 应用于`popup`元素的样式类 |
