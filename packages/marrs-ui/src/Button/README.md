# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```js
import { Button, Icon, Can } from '@wemo-ui/marrs';
import { IconHome, IconRightArrow } from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
  <Button color="primary" className="demo-margin-10">
    面性强调
  </Button>
  <Button color="primary" className="demo-margin-10" face="flat">
    面性次要
  </Button>
  <Button color="primary" className="demo-margin-10" face="plain">
    线性强调
  </Button>
  <Button color="warning" className="demo-margin-10">
    面性强调
  </Button>
  <Button color="info" className="demo-margin-10" face="flat">
    面性次要
  </Button>
  <Button className="demo-margin-10" color="success" face="plain">
    线性强调
  </Button>
  <Button
    sx={{
      backgroundImage:
        'linear-gradient(270deg, rgba(239, 71, 31, 0.75) 0%, #FFBE70 100%)'
    }}
    className="demo-margin-10"
  >
    渐变效果
  </Button>
```

### 点击样式

```html
  <Button color="primary" className="demo-margin-10">
    面性强调
  </Button>
  <Button face="flat" className="demo-margin-10">
    面性次要
  </Button>
  <Button face="plain">线性强调</Button>
```

### 禁用样式

```html
<Button disabled className="demo-margin-10">
  面性强调
</Button>
<Button disabled className="demo-margin-10">
  面性次要
</Button>
<Button disabled face="plain">
  线性强调
</Button>
```

### 圆角样式

```html
 <Button radius={0} className="demo-margin-10">
  面性强调
</Button>
<Button face="flat" radius={5} className="demo-margin-10">
  面性次要
</Button>
<Button face="plain" radius={[14, 5, 14, 5]}>
  线性强调
</Button>
```

### 按钮图标

```html
<Button
  className="demo-margin-10"
  startIcon={<Icon icon={<IconHome />} />}
></Button>
<Button
  face="flat"
  startIcon={<Icon icon={<IconHome />} />}
  className="demo-margin-10"
>
  面性次要
</Button>
<Button face="plain" endIcon={<Icon icon={<IconRightArrow />} />}>
  线性强调
</Button>
```

### 加载状态

```html
<Button loading className="demo-margin-10"></Button>
<Button loading face="flat" className="demo-margin-10">
  面性次要
</Button>
```

### 定宽

```html
 <Button width="115" className="demo-margin-10">
  少量字数
</Button>
<Button width="115" className="demo-margin-10">
  大量字数大量字数超出文字
</Button>
```

### 自适应宽度

```html
<Button className="demo-margin-10">少量字数</Button>
<Button className="demo-margin-10">大量字数大量字数</Button>
```

### 通栏宽度

```html
<Button fullWidth>通栏按钮</Button>
```

### 禁用状态

```html
<Button disabled>有disableElevation</Button>
```

### 块状按钮

```html
<Button fullWidth>设置fullWidth</Button>
```

### 按钮高度

```html
  <Can className="demo-margin-10">
    <Button volume="tiny">面性强调</Button>
  </Can>
  <Can className="demo-margin-10">
    <Button volume="small">面性强调</Button>
  </Can>
  <Can className="demo-margin-10">
    <Button volume="medium">面性强调</Button>
  </Can>
  <Can className="demo-margin-10">
    <Button volume="big">面性强调</Button>
  </Can>
  <Can className="demo-margin-10">
    <Button volume="large">面性强调</Button>
  </Can>
```

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| Button 样式类 | _string_ | - |
| color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| volume | 尺寸，可选值为 `tiny` `small` `medium` `large` | _string_ | `medium` |
| face | 类型，可选值为 `filled` `plain` `text` | _string_ | `filled` |
| textTransform | 文本内容中字母的类型，可选值为 `none` `uppercase` `capitalize` `lowercase` `inherit` | _string_ | `none` |
| startIcon | 左侧icon | _ReactNode_ | - |
| endIcon | 右边图标 | _ReactNode_ | - |
| radius | 形状 | _number_ \| _number[]_ | 4 |
| disableElevation | 取消浮雕效果，使变扁平 | _string_ | - |
| component | 原生 Button 标签的 type 属性 | _ElementType_ | `Button` |
| fullWidth | 是否100%宽度 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| width | 显示宽度 | _string_  | - |
| sx | 样式系统 | _object_ | `{}` |
| classes | 组件样式重写 | _object_ | `{}` |

### IconButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className| IconButton 样式类 | _string_ | - |
| volume | 尺寸，可选值为 `tiny` `small` `medium`、`big`、 `large` | _string_ | `medium` |
| spin | 是否旋转 | _boolean_ | `false` |
| icon | 图标 | _ReactNode_ | - |
| radius | 指定形状 | _string_ | `50%` |

### Button Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClick | 点击按钮，且按钮状态不为加载或禁用时触发 | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsButton-root | 应用于根元素的样式类 |
| text| .MarrsButton-text | 当设置了`text`,应用于按钮文本的样式类 |
| startIcon| .MarrsButton-startIcon | 当设置了`startIcon`,应用于该元素的样式类 |
| endIcon| .MarrsButton-endIcon | 当设置了`endIcon`,应用于该元素的样式类 |

