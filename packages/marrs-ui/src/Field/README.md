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


## API

### FieldComponent

  > Field 继承 Cell,相关属性可以参考 Cell
  

|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|name| 标志|_string_|否|
|type| Field 的类型|_any_|否|
|label| 输入框左侧文本|_string_|否|
|colon| 是否在 label 后面添加冒号|_boolean_|否|
|size|size|_"large"\|"medium"\|"small"_|否|
|value|值|_any_|否|
|defaultValue| 初始值|_any_|否|
|rules| 表单校验规则,数据结构|_RulesItem[]_|否|
|labelWidth| 左侧文本宽度，默认单位为px,默认值6em|_string\|number_|否|
|textAlign| 输入框对齐方式，可选值为 center right, left|_"center"\|"right"\|"left"_|否|
|labelAlign| label对齐方式，可选值为 center right, left|_"center"\|"right"\|"left"_|否|
|readonly| 是否只读|_boolean_|否|
|disabled| 是否禁用输入框|_boolean_|否|
|clearable| 是否启用清除图标，点击清除图标后会清空输入框|_boolean_|否|
|rightIcon| 右边icon|_boolean\|ReactNode_|否|
|leftControl| 左侧控件|_boolean\|ReactNode_|否|
|required| 表单必填项|_boolean_|否|
|maxLength| 最大长度|_number_|否|
|showWord| 是否显示字数统计，需要设置maxlength属性|_boolean_|否|
|center| 是否使内容居中|_boolean_|否|
|ellipsis| 是否省略点点，默认换行,(点点点时候指定宽度，否则无效)|_boolean_|否|
|showArrow| 导航|_boolean_|否|
|error| 是否将输入框标红|_boolean_|否|
|errorMessage| 错误文案|_string\|ReactNode_|否|
|autoHeight| 自适应高度|_boolean_|否|
|rows| 文本域的行|_number_|否|
|placeholder| 输入框占位提示文字|_string_|否|
|rightControl| 右边控件,包括按钮、徽章、开关、图片、头像等控件。|_ReactNode_|否|
|autocompleteOff| 是否 关闭input 标签原生的自动完成属性,默认关闭|_boolean_|否|
|autoFocus| 是否自动获取焦点|_boolean_|否|

### RulesItem

  > 每一项的校验规则
  

|参数|说明|类型|必须|
|--|--|--|--|
|required| 是否为必选字段|_boolean_|否|
|message| 错误提示文案|_string_|否|
|pattern| 通过正则表达式进行校验|_string_|否|
|trigger| 本项规则的触发时机,可选值为 onChange、onBlur,默认onBlur|_string_|否|

### FieldAction


|参数|说明|类型|必须|
|--|--|--|--|
|onInput| 输入框内容变化时触发,回调参数:event: Event|_EventHandler_|否|
|onClear| 点击清除按钮时触发|_EventHandler_|否|
|onFocus| 获得焦点触发|_EventHandler_|否|
|onBlur| 失去焦点触发|_EventHandler_|否|
|onKeyPressEnter| 键盘回车事件触发|_EventHandler_|否|

### FieldClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|content|应用于该名称的样式类|_string_|否|
|input|应用于该名称的样式类|_string_|否|
|message|应用于该名称的样式类|_string_|否|
|word|应用于该名称的样式类|_string_|否|
|icon|应用于该名称的样式类|_string_|否|
