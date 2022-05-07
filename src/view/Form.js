import {
  Button,
  Checkbox,
  CheckboxGroup,
  Field,
  FlexBox,
  Form,
  // Picker,
  // PickerItem,
  Radio,
  RadioGroup,
  Stepper,
  Switch
} from '@wemo-ui/marrs';
// import PickerWindow from '@wemo-ui/marrs/Picker/PickerWindow';
import { useCallback, useState } from 'react';
import Demo from './Demo';
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

const FormView = () => {
  const handleFailed = useCallback((value) => {
    setFormValue(value);
  }, []);
  const handleSubmit = useCallback((value) => {
    setFormValue(value);
  }, []);

  const [formValue, setFormValue] = useState({});

  console.log(
    'options',
    options.find((o) => o.value === 'value-1')
  );

  return (
    <>
      <Demo title="基础样式" padding>
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
            {/* <PickerWindow
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
            </PickerWindow> */}
          </Field>
          <Field
            label="check"
            name="check"
            rules={[{ required: true, message: 'check' }]}
          >
            <CheckboxGroup value={[0, 2]}>
              <Checkbox value={0} label="男" />
              <Checkbox value={1} label="女" />
              <Checkbox value={2} label="未知" />
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
            rules={[
              { required: true, message: '请填用户名' },
              { message: '正则错误', pattern: /^[\d]{2}$/g }
            ]}
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
              { message: '正则错误', pattern: /\d{2}/ }
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

        <pre>{JSON.stringify(formValue, null, 2)}</pre>
      </Demo>
    </>
  );
};

export default FormView;
