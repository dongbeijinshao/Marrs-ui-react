# Empty 空状态

### 介绍

空状态时的占位提示。

### 引入

```js
import { Button, Empty, Image } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Empty
  description="空态页文案"
  contentControl={<Image src={demoImg1} />}
/>
```
### 操作按钮

```html
 <Empty
  description="空态页文案"
  contentControl={<Image src={demoImg2} />}
  actionControl={
    <Button face="plain" color="#C4C4C4">
      立即前往
    </Button>
  }
/>
```

### 补充文案

```html
<Empty
  text="补充说明文案请尽量简短"
  description="空态页文案"
  contentControl={<Image src={demoImg3} />}
  actionControl={
    <Button face="plain" color="#C4C4C4">
      立即前往
    </Button>
  }
/>
```


## API

### EmptyComponent


|参数|说明|类型|必须|
|--|--|--|--|
|volume|尺寸规格|_tiny \| small \| medium \| big \| large_|否|
|contentControl| 自定义内容控件|_ReactNode_|否|
|description| 描述文字|_string_|否|
|text| 补充文案|_string_|否|
|actionControl| 自定义底部内容|_ReactNode_|否|
|size| 自定义尺寸|_Size_|否|

### EmptyClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|contentControl|应用于该名称的样式类|_string_|否|
|description|应用于该名称的样式类|_string_|否|
|content|应用于该名称的样式类|_string_|否|
|text|应用于该名称的样式类|_string_|否|
|actionControl|应用于该名称的样式类|_string_|否|
