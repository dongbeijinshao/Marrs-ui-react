# FlexBox 布局

### 介绍

元素布局。


### 引入

```js
import { FlexBox } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<FlexBox item space={1}>
</FlexBox>
```

## API

### FlexBoxComponent


|参数|说明|类型|必须|
|--|--|--|--|
|wrap| 换行方式|_"nowrap"\|"wrap"\|"wrap-reverse"_|否|
|container| 是否所有子元素自动成为容器成员|_boolean_|否|
|item| 是否是容器中的子元素|_boolean_|否|
|gap| 间隔, 4px 的倍数, 默认 0|_number_|否|
|textAlign| 对齐方式|_string_|否|
|alignItems| 交叉轴上如何对齐|_string_|否|
|justifyContent| 主轴上的对齐方式|_string_|否|
|space| 占据多少位置，24 等分取整数|_number_|否|
|rowGap| 行间隔|_string_|否|
|columnGap| 列间隔|_string_|否|

### FlexBoxClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|container|应用于该名称的样式类|_string_|否|
|item|应用于该名称的样式类|_string_|否|
