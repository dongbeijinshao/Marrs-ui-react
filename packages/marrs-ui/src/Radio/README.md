# Radio 单选框

### 介绍

用于在多个选项中选择单个结果。

### 引入

```js
import { Radio, RadioGroup, Icon } from '@wemo-ui/marrs';
import { IconMine } from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<RadioGroup value={1}>
  <Radio value={1} className="demo-margin-r-10" label="选项 A" />
  <Radio value={2} className="demo-margin-r-10" label="选项 B" />
</RadioGroup>
```
### 禁用状态

```html
<RadioGroup value={1} disabled>
  <Radio value={1} className="demo-margin-r-10" label="选项 A" />
  <Radio value={2} className="demo-margin-r-10" label="选项 B" />
</RadioGroup>
```

### 自定义样式

```html
<RadioGroup value={1} className="demo-margin-b-10">
  <Radio
    value={1}
    className="demo-margin-r-10"
    label="选项 A"
    iconStyle="checkbox"
  />
  <Radio
    value={2}
    className="demo-margin-r-10"
    label="选项 B"
    iconStyle="checkbox"
  />
</RadioGroup>
<RadioGroup value={1} className="demo-margin-b-10">
  <Radio
    value={1}
    className="demo-margin-r-10"
    label="选项 A"
    color="info"
  />
  <Radio
    value={2}
    className="demo-margin-r-10"
    label="选项 B"
    color="info"
  />
</RadioGroup>
<RadioGroup value={1}>
  <Radio
    value={1}
    className="demo-margin-r-10"
    label="选项 A"
    volume="large"
  />
  <Radio
    value={2}
    className="demo-margin-r-10"
    label="选项 B"
    volume="large"
  />
</RadioGroup>
```

### 自定义图标

```html
 <RadioGroup value={1} icon={<Icon icon={<IconMine />} />}>
  <Radio value={1} className="demo-margin-r-10" label="选项 A" />
  <Radio value={2} className="demo-margin-r-10" label="选项 B" />
</RadioGroup>
```
### 禁用文本点击

```html
<RadioGroup value={1}>
  <Radio
    value={1}
    className="demo-margin-r-10"
    label="选项 A"
    labelDisabled
  />
  <Radio
    value={2}
    className="demo-margin-r-10"
    label="选项 B"
    labelDisabled
  />
</RadioGroup>
```

## API

### RadioGroup Props

| 参数          | 说明                 | 类型      | 默认值         |
| ------------- | -------------------- | --------- | -------------- |
 className | RadioGroup 样式类 | - |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| volume | 尺寸，可选值为 `tiny` `small` `medium` `large` | _string_ | `medium` |
| max | 最大可选数，`0` 为无限制 | _number \| string_ | `0` |
| wrap | - | _boolean_ | `false` |
| icon | 自定义icon | _ReactNode_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| defaultValue | 初始默认值 | _string_ | - |
| value | 初始值 | _string_ | - |
| gap | 子元素排列margin间距 | _number_ | - |

### Radio Props

| 参数          | 说明                 | 类型      | 默认值         |
| ------------- | -------------------- | --------- | -------------- |
| className     | radio 样式          | _string_      | -             | 
| type          | 判断类型，可选值 `checkbox` `radio` | _string_ | -  |
| value         | 值                    | _string \| number_ | -  |
| uncheckedIcon | 未选中的checked      | _ReactNode_ |  -        |
| icon          | 勾选中的checked       | _ReactNode_ | -        |
| iconStyle     | icon的值,可选值  `checkbox` `radio` `none` | _string_ | `checkbox`      |
| icon          | 勾选中的checked       | _ReactNode_ | -        |
| iconStyle      | icon的值,可选值  `checkbox` `radio` `none` | _string_ | `checkbox`       |
| defaultChecked| 默认是否选中       | _boolean_ | `false`  |
| checked          | 是否选中       | _boolean_ | `false`  |
| labelDisabled | label 是否禁用 | _boolean_ | `false`        |
| disabled      | 禁用文本和选中框 | _boolean_ | `false`        |
| label         | 文本内容                 | _string_ | -             |
| classes       | 覆盖生成的 class     | _string_     | -            |

### radioGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值改变触发 | - |

### Radio Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 值改变触发 | - |
| onClick | 值改变触发 | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsRadio-root | 应用于根元素的样式类 |
