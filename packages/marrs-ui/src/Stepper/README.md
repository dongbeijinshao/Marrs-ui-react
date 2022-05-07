# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

```js
import { Stepper, Toast } from '@wemo-ui/marrs';
```

## 代码演示

### 基本样式

```html
 <Stepper defaultValue={2} />
```
### 数字多样式

```html
<Stepper decimal="0" defaultValue={999} />
<Stepper decimal="1" defaultValue={2.2} sx={{ marginTop: 4 }} />
```
### 步长设置

```html
<Stepper step="2" defaultValue={15} />
```
### 限制范围

```html
<Stepper max={20} min={4} defaultValue={4} />
```
### 异步变更

```html
<Stepper onChange={handleChange} />
```


## API

### StepperComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|face| 类型,可选值 `filled` `plain` `text`|_"filled"\|"plain"\|"text"_|否|
|defaultValue| 默认值|_number_|否|
|value| value值|_number_|否|
|decimal| 小数点个数|_number_|否|
|step| 步长|_number_|否|
|max| 最大范围|_number_|否|
|min| 最小范围|_number_|否|
|disabled| 是否禁用|_boolean_|否|
|tl| 主题字体,默认 t7|_string_|否|
|minusIcon| 左侧减号图标|_ReactNode_|否|
|addIcon| 右侧加号图标|_ReactNode_|否|

### StepperAction


|参数|说明|类型|必须|
|--|--|--|--|
|onChange| 值改变事件|_function_|否|

### StepperClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
