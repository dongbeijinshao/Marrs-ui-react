# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。


### 引入

```js
import { Icon } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<Icon icon={<IconAdd />} />
```


## API

### IconComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|volume|尺寸规格|_tiny \| small \| medium \| big \| large_|否|
|spin| 是否旋转|_boolean_|否|
|icon| icon名称|_ReactNode_|否|
|size| icon大小|_number_|否|

### IconClasses

  > Icon classes-slot
  

|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
