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
