# Uploader 文件上传

### 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

### 引入

```js
import { Uploader, Button, Grid, FlexBox } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';
import { IconPhoto, IconAdd } from '@wemo-ui/marrs-icons';
```

## 代码演示

### react部分

```html
const fileList = [{ url: demoImg }, { url: demoImg }];

const fileList1 = [
  { url: demoImg, status: 'pending', message: '加载中' },
  { url: demoImg, status: 'failed', message: '上传失败' },
  { url: demoImg }
];
```

### 基础样式

```html
<Grid>
  <Uploader text="上传图片" showPreview={false} />
  <Uploader showPreview={false} />
  <Uploader icon={<IconPhoto />} text="上传图片" showPreview={false} />
  <Uploader icon={<IconPhoto />} showPreview={false} />
</Grid>
```
### 尺寸规格

```html
<Uploader text="上传图片" volume="big" showPreview={false} />
<Uploader text="上传图片" showPreview={false} />
```
### 上传按钮

```html
 <Uploader
  className="demo-margin-r-10"
  uploaderControl={
    <Button startIcon={<IconAdd />} face="filled">
      上传图片
    </Button>
  }
/>
<Uploader
  uploaderControl={
    <Button startIcon={<IconAdd />} face="plain">
      上传图片
    </Button>
  }
/>
```
### 删除图片

```html
<Uploader
  value={fileList}
  onChange={({ file, fileList }) => { console.log( file )}}
  onDelete={({ file }) => console.log(file)}/>
```
### 上传状态

```html
<Uploader value={fileList1} />
```
### 限制数量

```html
<Uploader maxCount={3} value={fileList} multiple />
```
### 禁用样式

```html
<Uploader text="上传图片" disabled />
<Uploader disabled />
```


## API

### UploaderComponent


|参数|说明|类型|必须|
|--|--|--|--|
|volume|尺寸规格|_tiny \| small \| medium \| big \| large_|否|
|icon| 上传区域icon组件,图片组件等|_ReactNode_|否|
|text| 上传区域文字提示|_string_|否|
|disabled| 是否禁用文件上传|_boolean_|否|
|multiple| 是否开启图片多选|_boolean_|否|
|maxCount| 文件上传数量限制, 0代表无限制|_number_|否|
|uploaderControl| 自定义上传控件|_ReactNode_|否|
|showPreview| 是否展示预览图|_boolean_|否|
|value| 已上传的文件列表,|_valueItem[]_|否|
|deleteIconControl| 预览删除icon|_ReactNode_|否|

### valueItem

  > value 数据结构
  > value 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值
  

|参数|说明|类型|必须|
|--|--|--|--|
|url| 文件的地址|_string_|否|
|dataUrl| 文件的base64|_string_|否|
|status| 状态(pending(上传中), failed(失败)，success（成功))|_string_|否|
|message| 提示信息|_string_|否|

### UploaderAction


|参数|说明|类型|必须|
|--|--|--|--|
|onChange| 上传change事件,回调参数 { event, file, fileList}|_EventHandler_|否|
|onDelete| 删除事件，回调参数 {file}|_EventHandler_|否|

### UploaderClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|icon|应用于该名称的样式类|_string_|否|
|input|应用于该名称的样式类|_string_|否|
|text|应用于该名称的样式类|_string_|否|
|wrapper|应用于该名称的样式类|_string_|否|
|previewRoot|应用于该名称的样式类|_string_|否|
|uploader|应用于该名称的样式类|_string_|否|
