# Text 文本

### 介绍

行内文本的基本格式。


### 引入

```js
import { Text, Can } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Text>文本</Text>
```

### 自定义字体

```html
<Can>
  <Text tl="t1">文本内容</Text>
</Can>
<Can>
  <Text tl="t2">文本内容</Text>
</Can>
<Can>
  <Text tl="t3">文本内容</Text>
</Can>
<Can>
  <Text tl="t4">文本内容</Text>
</Can>
<Can>
  <Text tl="t5">文本内容</Text>
</Can>
<Can>
  <Text tl="t6">文本内容</Text>
</Can>
```


## API

### TextComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|tl| 自定义主题字体, 可选值t1 t2 t3 t4 t5 t6 t7|__|否|
|component| 该组件被编译成那种元素，默认 span|_React.ElementType_|否|

### TextClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
