# Form 表单

### 介绍

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

### 引入

```js
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Field,
  FlexBox,
  Form,
  Picker,
  PickerItem,
  Radio,
  RadioGroup,
  Stepper,
  Switch,
  Toast
} from '@wemo-ui/marrs';
import PickerWindow from '@wemo-ui/marrs/Picker/PickerWindow';
import { useCallback } from 'react';
```

## 代码演示

### react部分
```html
const options = [
  '小笼包子',
  '冰糖葫芦',
  '煎饼果子',
  '麻婆豆腐',
  '小炒牛肉',
  '鱼香肉丝',
  '水煮牛肉',
  '手撕包菜'
].map((label, value) => ({ label, value: 'value-' + value }));

const handleFailed = useCallback((value) => {
    Toast.fail({
      message: '提交失败'
    });
  }, []);
  const handleSubmit = useCallback((value) => {
    Toast.success({
      message: '提交成功'
    });
  }, []);
```

### 基础样式

```html
<Form
  labelWidth={70}
  labelAlign="right"
  colon
  onSubmit={handleSubmit}
  onFailed={handleFailed}
  initialValues={{
    username: 'jack',
    password: 'admin'
  }}
>
  <Field label="用户名" name="username" placeholder="用户名" />
  <Field
    label="密码"
    type="password"
    name="password"
    placeholder="密码"
  />
  <FlexBox
    container
    sx={{
      padding: '10px',
      background: '#ffffff'
    }}
  >
    <Button fullWidth type="submit">
      提交
    </Button>
  </FlexBox>
</Form>
```

### 正则校验

```html
<Form
  labelWidth={70}
  labelAlign="right"
  colon
  onSubmit={handleSubmit}
  onFailed={handleFailed}
  initialValues={{
    username: '',
    password: ''
  }}
>
  <Field
    label="用户名"
    name="username"
    placeholder="用户名"
    rules={[{ required: true, message: '请填用户名' }]}
  />
  <Field
    label="密码"
    type="password"
    name="password"
    placeholder="密码"
    rules={[{ required: true, message: '请填写密码' }]}
  />
  <FlexBox
    container
    sx={{
      padding: '10px',
      background: '#ffffff'
    }}
  >
    <Button fullWidth type="submit">
      提交
    </Button>
  </FlexBox>
</Form>
```

### 多组件使用

```html
<Form
  labelWidth={70}
  labelAlign="right"
  colon
  onSubmit={handleSubmit}
  onFailed={handleFailed}
  initialValues={{
    username: 'jack',
    step: 30,
    password: 22,
    role: '33',
    switch: true,
    textarea: 'textarea',
    pick: { option1: 'value-5' }
  }}
>
  <Field
    label="pick"
    name="pick"
    rules={[{ required: true, message: 'check' }]}
  >
    <PickerWindow
      avatar={(value) => {
        return Object.values(value)
          .map((v) => options.find((o) => o.value === v).label)
          .join('/');
      }}
    >
      <Picker name="option1">
        {options.map(({ label, value }) => {
          return (
            <PickerItem key={value} value={value}>
              {label}
            </PickerItem>
          );
        })}
      </Picker>
      <Picker name="option2">
        {options.map(({ label, value }) => {
          return (
            <PickerItem key={value} value={value}>
              {label}
            </PickerItem>
          );
        })}
      </Picker>
      <Picker name="option3">
        {options.map(({ label, value }) => {
          return (
            <PickerItem key={value} value={value}>
              {label}
            </PickerItem>
          );
        })}
      </Picker>
    </PickerWindow>
  </Field>
  <Field
    label="check"
    name="check"
    rules={[{ required: true, message: 'check' }]}
  >
    <CheckboxGroup value={[0, 2]}>
      <Checkbox value={0} label="男" />
      <Checkbox value={1} label="女" />
    </CheckboxGroup>
  </Field>
  <Field
    label="step"
    name="step"
    rules={[{ required: true, message: 'step' }]}
  >
    <Stepper />
  </Field>
  <Field
    label="textarea"
    name="textarea"
    type="textarea"
    autoHeight
    rules={[{ required: true, message: 'textarea' }]}
  ></Field>
  <Field
    label="switch"
    name="switch"
    rules={[
      { required: true, message: 'switch' },
      { message: '正则错误', pattern: /true$/g }
    ]}
  >
    <Switch />
  </Field>
  <Field
    label="radio"
    name="radio"
    rules={[{ required: true, message: '选一个' }]}
  >
    <RadioGroup value={2}>
      <Radio value={0} label="复选框" />
      <Radio value={1} label="复选框" />
      <Radio value={2} label="复选框" />
    </RadioGroup>
  </Field>
  <Field
    label="角色"
    name="role"
    placeholder="角色"
    rules={[{ required: true, message: '请填用户名' }]}
  />
  <Field
    label="用户名"
    name="username"
    placeholder="用户名"
    rules={[{ required: true, message: '请填写用户名' }]}
  />
  <Field
    label="密码"
    type="password"
    name="password"
    placeholder="密码"
    rules={[
      { required: true, message: '请填写密码' },
      { message: '正则错误', pattern: /\d/ }
    ]}
  />
  <FlexBox
    container
    sx={{
      padding: '10px',
      background: '#ffffff'
    }}
  >
    <Button fullWidth type="submit">
      提交
    </Button>
  </FlexBox>
</Form>
```

## API

### FormComponent


|参数|说明|类型|必须|
|--|--|--|--|
|labelWidth| 表单项 label 宽度，默认单位为px|_string\|number_|是|
|initialValues| 初始值|_any_|是|
|labelAlign| 表单项 label对齐方式|_string_|是|
|colon| 是否在 label 后面添加冒号|_boolean_|否|

### FormAction


|参数|说明|类型|必须|
|--|--|--|--|
|onChange| 触发表单change事件|_EventHandler_|否|
|onSubmit| 提交表单且验证通过后触发|_EventHandler_|否|
|onFailed| 提交表单且验证不通过后触发|_EventHandler_|否|

### FormClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
