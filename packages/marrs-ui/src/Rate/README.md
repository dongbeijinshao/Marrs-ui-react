# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

```js
import { Rate, Can, Toast, Icon } from '@wemo-ui/marrs';
import { IconGoods } from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<Can>
  <Rate value={4} />
</Can>
<Can sx={{ marginTop: 1 }}>
  <Rate value={2} />
</Can>
```

### 自定义样式

```html
<Can>
  <Rate value={3} />
</Can>
<Can sx={{ marginTop: 1 }}>
  <Rate
    value={3}
    icon={<Icon icon={<IconGoods />} />}
    emptyIcon={<Icon icon={<IconGoods />} />}
  />
</Can>
```

### 评分数量

```html
 <Can>
  <Rate value={3} num={7} />
</Can>
<Can>
  <Rate value={2.5} />
</Can>
```

### 禁用/只读样式

```html
<Can>
  <Rate value={3} disabled />
</Can>
<Can>
  <Rate value={3} readonly />
</Can>
```

### 监听change事件

```html
<Rate value={4} onChange={handleChange} />
```


## API

### RateComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|disabled| 是否禁用|_boolean_|否|
|emptyIcon| 自定义空icon|_ReactNode_|否|
|icon| 自定义icon|_ReactNode_|否|
|num| 自定义数量|_number_|否|
|gap| 自定义间距|_number\|string_|否|
|readonly| 是否只读,默认false|_boolean_|否|
|value| 设置展示值|_number_|否|

### RateAction


|参数|说明|类型|必须|
|--|--|--|--|
|onChange| 值改变触发|_EventHandler_|否|

### RateClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|box|应用于该名称的样式类|_string_|否|
|iconCom|应用于该名称的样式类|_string_|否|
|halfIcon|应用于该名称的样式类|_string_|否|
