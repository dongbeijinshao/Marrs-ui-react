import { Button, Can, CellGroup, Field, Image } from '@wemo-ui/marrs';
import { IconAnnotation, IconScan, IconSearch } from '@wemo-ui/marrs-icons';
import { useState } from 'react';
import Demo from './Demo';

// 模拟change事件

// 模拟click事件
// const handleBlur = (e) => {
//   console.log('模拟blur事件', e);
// };

const FieldView = () => {
  const [value, setValue] = useState('11123123123');
  const [disabled, setdisabled] = useState(true);
  const [isFocus, setIsFocus] = useState(true);
  const [readonly] = useState(true);
  // const handelClick = useCallback(() => {
  //   setValue('aaaa');
  // }, []);
  const handleInput = (value: any) => {
    //console.log('外面接收到的输入事件: ', e);
    // console.log('外面接收到的要显示的: ', e + '1234');
    // console.log('外面的value: ', value);
    // setValue(value);
  };
  // const handlereadonly = useCallback((e) => {
  //   setreadonly(!readonly);
  // });

  // const handledisabled = useCallback((e) => {
  //   setdisabled(!disabled);
  // });
  return (
    <>
      <Demo title="基础样式" padding>
        <CellGroup>
          <Field
            label="标题文字"
            type="number"
            placeholder="请输入内容"
            onInput={handleInput}
          />
          <Field label="标题文字" placeholder="请输入内容" size="large" />
        </CellGroup>
      </Demo>
      <Demo title="对齐方式" padding>
        <CellGroup>
          <Field
            label="标题文字"
            placeholder="输入内容右对齐"
            textAlign="right"
          />
        </CellGroup>
      </Demo>
      <Demo title="内容文本多种类别" padding>
        <CellGroup>
          <Field label="文本样式" placeholder="请输入文本" clearable />
          <Field
            type="telephone"
            label="手机号码"
            placeholder="输入11位手机号"
            clearable
          />

          <Field
            type="number"
            label="数字样式"
            placeholder="输入数字"
            clearable
          />
          <Field
            type="digit"
            label="数字样式(整数)"
            placeholder="输入整数"
            clearable
          />
          <Field
            type="password"
            label="密码样式"
            placeholder="请输入密码"
            clearable
          />
        </CellGroup>
      </Demo>
      <Demo title="限宽与换行样式" padding>
        <CellGroup>
          <Field
            label="标题点点点"
            labelWidth={40}
            placeholder="限宽"
            ellipsis
          />
          <Field label="标题过长支持换行" labelWidth={60} placeholder="换行" />
        </CellGroup>
      </Demo>
      <Button onClick={setdisabled}>点击切换只读</Button>
      <Demo title="只读/禁用样式" padding>
        <CellGroup>
          <Field
            label="标题文字"
            placeholder="只读禁用样式"
            defaultValue="禁用disabled文本样式"
            readonly={readonly}
            onBlur={() => {
              console.log(222);
            }}
          />
          <Field
            label="标题文字"
            placeholder="禁用文本"
            defaultValue="禁用disabled文本样式"
            disabled={disabled}
          />
        </CellGroup>
      </Demo>
      <Demo title="错误提示" padding>
        <CellGroup>
          <Field
            label="账户名"
            placeholder="请输入账户名"
            value={value}
            // error
          />
          <Field
            label="账户名"
            placeholder="请输入账户名"
            value="请输入代填项引导文案"
            required
            errorMessage={
              <>
                <IconAnnotation />
                errorMessage
              </>
            }
          />
        </CellGroup>
      </Demo>
      <Demo title="插入样式" padding>
        <CellGroup>
          <Field
            label="搭配图标"
            placeholder="请输入搭配图标"
            rightIcon={<IconScan />}
          />
          <Field
            autoFocus
            label="搭配按钮"
            placeholder="请输入搭配按钮"
            rightControl={<Can>发送验证码</Can>}
          />
          <Field
            label="搭配图片"
            placeholder="请输入搭配按钮"
            rightControl={
              <Can size={{ width: 40, height: 40 }} circle>
                <Image
                  size={{ width: '100%', height: '100%' }}
                  src="/public/img1.png"
                ></Image>
              </Can>
            }
          />
          <Field
            label="文案文案文案文案文案文案文案"
            labelWidth={70}
            placeholder="请输入搭配文案"
            leftControl={<IconSearch />}
          />
        </CellGroup>
      </Demo>
      <Demo title="高度自适应" padding>
        <CellGroup>
          <Field
            label="备注文字"
            type="textarea"
            placeholder="请输入备注"
            autoHeight
          />
          <Field
            label="备注文字"
            // type="textarea"
            placeholder="请输入备注"
            showWord
            value={value}
            maxLength={550}

            // defaultValue={222}
            // onInput={handleInput}
            // onBlur={handleBlur}
          />
        </CellGroup>
      </Demo>
    </>
  );
};

export default FieldView;
