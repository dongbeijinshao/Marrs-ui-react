# Field 输入框

### 介绍

表单中的输入框组件。


### 引入

```js
import { Can, CellGroup, Field, Image, Toast, Button } from '@wemo-ui/marrs';
import { IconAnnotation, IconScan, IconPhoto } from '@wemo-ui/marrs-icons';
import demoImg from '@wemo-ui/marrs-docs/common/image/demo.jpeg';
```

## 代码演示

### 基础样式

```html
<Field label="标题文字" placeholder="请输入内容" />
```

### 只读/禁用样式

```html
 <CellGroup>
  <Field
    label="标题文字"
    placeholder="只读禁用样式"
    defaultValue="只读文本样式"
    readonly
  />
  <Field
    label="标题文字"
    placeholder="禁用文本"
    defaultValue="禁用文本样式"
    disabled
  />
</CellGroup>
```

### 限宽与换行样式

```html
<CellGroup>
  <Field
    label="标题超出点点点点"
    labelWidth={96}
    placeholder="限宽"
    ellipsis
  />
  <Field label="标题过长支持换行" labelWidth={96} placeholder="换行" />
</CellGroup>
```

### 错误提示

```html
<CellGroup>
  <Field
    label="账户名"
    placeholder="请输入账户名"
    defaultValue="请输入代填项引导文案"
    required
    error
  />
  <Field
    label="账户名"
    placeholder="请输入账户名"
    defaultValue="请输入代填项引导文案"
    required
    errorMessage={
      <>
        <IconAnnotation />
        <Can sx={{ marginLeft: 1 }}>身份证号格式错误</Can>
      </>
    }
  />
</CellGroup>
```

### 自定义输入框

```html
<CellGroup>
  <Field
    label="搭配图标"
    placeholder="请输入搭配图标"
    rightIcon={<IconScan />}
  />
  <Field
    label="搭配按钮"
    placeholder="请输入搭配按钮"
    rightControl={<Button volume="tiny">发送验证码</Button>}
  />
  <Field
    label="搭配图片"
    placeholder="请输入搭配图片"
    rightControl={
      <Can size={{ width: 40, height: 40 }} circle>
        <Image src={demoImg}></Image>
      </Can>
    }
  />
  <Field
    label="文案"
    labelWidth={70}
    placeholder="请输入搭配文案"
    leftControl={<IconPhoto />}
  />
</CellGroup>
```

### 对齐方式

```html
<Field
  label="标题文字"
  placeholder="输入内容右对齐"
  onInput={handleInput}
  textAlign="right"
/>
```
