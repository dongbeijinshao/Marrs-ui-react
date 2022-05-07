# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

```js
import { Switch } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Switch checked />
```
### 禁用状态

```html
<Switch disabled checked />
```
### 加载状态

```html
<Switch loading checked />
```

### 自定义颜色值

```html
<Switch className="demo-margin-r-10" checkedColor="#2A6AE9" checked />
<Switch className="demo-margin-r-10" checkedColor="#07C160" checked />
```


## API

### SwitchComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|volume|尺寸规格|_tiny \| small \| medium \| big \| large_|否|
|defaultValue| 默认值|_boolean_|否|
|checked| 是否选中|_boolean_|否|
|disabled| 是否禁用|_boolean_|否|
|checkedColor| 自定义选中颜色，默认color对应主色|_ColorNameOrValue_|否|
|uncheckedColor| 自定义非选中颜色，暂不支持颜色名, 默认计算checkColor的0.38|_ColorNameOrValue_|否|
|loading| 是否用loading|_boolean_|否|

### SwitchAction


|参数|说明|类型|必须|
|--|--|--|--|
|onClick| click 事件|_EventHandler_|否|
|onChange| change 事件|_EventHandler_|否|

### SwitchClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|disabled|应用于该名称的样式类|_string_|否|
