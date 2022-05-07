# Checkbox 复选框

### 介绍

用于在选中和非选中状态之间进行切换。


### 引入

```js
import { Checkbox, CheckboxGroup, Icon } from '@wemo-ui/marrs';
import { IconStar, IconSelect } from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<CheckboxGroup value={[1]}>
  <Checkbox
    value={[1]}
    className="demo-margin-r-10"
    label="选项 A"
    iconStyle="radio"
  />
  <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
</CheckboxGroup>
```

### 禁用状态

```html
<CheckboxGroup value={[1]} disabled>
  <Checkbox value={[1]} className="demo-margin-r-10" label="选项 A" />
  <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
</CheckboxGroup>
```

### 自定义样式

```html
<CheckboxGroup value={[1]} className="demo-margin-b-10">
  <Checkbox
    value={[1]}
    className="demo-margin-r-10"
    label="选项 A"
    iconStyle="checkbox"
  />
  <Checkbox
    value={2}
    className="demo-margin-r-10"
    label="选项 B"
    iconStyle="checkbox"
  />
</CheckboxGroup>
<CheckboxGroup value={[1]} className="demo-margin-b-10" color="info">
  <Checkbox value={[1]} className="demo-margin-r-10" label="选项 A" />
  <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
</CheckboxGroup>
<CheckboxGroup value={[1]} volume="large">
  <Checkbox value={[1]} className="demo-margin-r-10" label="选项 A" />
  <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
</CheckboxGroup>
```

### 自定义图标

```html
<CheckboxGroup value={[1]} icon={<Icon icon={<IconStar />} />}>
  <Checkbox value={[1]} className="demo-margin-r-10" label="选项 A" />
  <Checkbox
    value={2}
    className="demo-margin-r-10"
    label="选项 B"
    iconStyle="checkbox"
    icon={<Icon icon={<IconSelect />} />}
  />
</CheckboxGroup>
```

### 禁用文本点击

```html
<CheckboxGroup value={[1]}>
  <Checkbox
    value={[1]}
    className="demo-margin-r-10"
    label="选项 A"
    labelDisabled
  />
  <Checkbox
    value={2}
    className="demo-margin-r-10"
    label="选项 B"
    labelDisabled
  />
</CheckboxGroup>
```

### 限制选择数量

```html
<CheckboxGroup value={[1]} max={2}>
  <Checkbox
    value={[1]}
    className="demo-margin-r-10"
    label="选项 A"
    iconStyle="radio"
  />
  <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
  <Checkbox value={3} className="demo-margin-r-10" label="选项 C" />
</CheckboxGroup>
```

## API

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | CheckboxGroup 样式类 | - |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| volume | 尺寸，可选值为 `tiny` `small` `medium` `large` | _string_ | `medium` |
| max | 最大可选数，`0` 为无限制 | _number \| string_ | `0` |
| icon | 自定义icon | _ReactNode_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| defaultValue | 初始默认值 | _Array_ | - |
| value | 初始值 | _Array_ | - |
| gap | 子元素排列margin间距 | _number_ | - |

### Checkbox Props

| 参数          | 说明                 | 类型      | 默认值         |
| ------------- | -------------------- | --------- | -------------- |
| className     | Checkbox 样式类       | _string_    | -           |
| type          | 判断类型，可选值 `checkbox` `radio` | _string_ | -  |
| value         | 值                    | _string \| number_ | -  |
| uncheckedIcon | 未选中的checked      | _ReactNode_ |  -        |
| icon          | 勾选中的checked       | _ReactNode_ | -        |
| iconStyle     | icon的值,可选值  `checkbox` `radio` `none` | _string_ | `checkbox`      |
| icon          | 勾选中的checked       | _ReactNode_ | -        |
| iconStyle      | icon的值,可选值  `checkbox` `radio` `none` | _string_ | `checkbox`        |
| defaultChecked| 默认是否选中       | _boolean_ | `false`  |
| checked          | 是否选中       | _boolean_ | `false`  |
| labelDisabled | label 是否禁用 | _boolean_ | `false`        |
| disabled      | 禁用文本和选中框 | _boolean_ | `false`        |
| label         | 文本内容                 | _string_ | -             |
| classes       | 覆盖生成的 class     | _string_     | -            |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值改变触发 | - |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值改变触发 | - |
| onClick | 值改变触发 | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsCheckbox-root | 应用于根元素的样式类 |
| root| .MarrsCheckboxGroup-root | 应用于`CheckboxGroup`根元素的样式类 |

