import { Can, CellGroup, Field, Icon, Image, Toast } from '@wemo-ui/marrs';
import demoImg from '@wemo-ui/marrs-docs/common/image/demo.jpeg';
import { IconAnnotation, IconPhoto, IconScan } from '@wemo-ui/marrs-icons';
import { useCallback, useState } from 'react';
import DemoContainer from '../DemoContainer/Demo';

// 模拟change事件
function handleInput(e) {
  Toast.success({ message: 'input事件触发' });
}

const FieldView = () => {
  const handleKeyDown = useCallback((value) => {
    console.log(value);
  }, []);

  const [name, setName] = useState('Marrs');

  return (
    <>
      <DemoContainer title="基础样式">
        <Field
          clearable
          classes={{ content: 'aaa' }}
          label="标题文字"
          labelWidth={72}
          placeholder="请输入内容"
          value={name}
          onInput={(value) => {
            setName(value);
          }}
          onKeyPressEnter={(value) => {
            handleKeyDown(value);
          }}
        />
      </DemoContainer>

      <DemoContainer title="只读/禁用样式">
        <CellGroup>
          <Field
            clearable
            label="标题文字"
            labelWidth={72}
            placeholder="只读禁用样式"
            defaultValue="只读文本样式"
            readonly
          />
          <Field
            label="标题文字"
            labelWidth={72}
            placeholder="禁用文本"
            defaultValue="禁用文本样式"
            disabled
          />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="限宽与换行样式">
        <CellGroup>
          <Field
            clearable
            label="标题超出点点点点"
            labelWidth={72}
            placeholder="限宽"
            ellipsis
          />
          <Field
            clearable
            label="标题过长支持换行"
            labelWidth={72}
            placeholder="换行"
          />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="错误提示">
        <CellGroup>
          <Field
            clearable
            label="账户名"
            labelWidth={72}
            placeholder="请输入账户名"
            defaultValue="请输入代填项引导文案"
            // required
          />
          <Field
            clearable
            label="账户名"
            labelWidth={72}
            placeholder="请输入账户名"
            defaultValue="请输入代填项引导文案"
            // required
            errorMessage={
              <>
                <Can
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: `6px 0 0 4px`,
                    fontSize: 12
                  }}
                >
                  <Icon
                    icon={<IconAnnotation />}
                    sx={{ marginRight: 1, fontSize: 14 }}
                  />
                  身份证号格式错误
                </Can>
              </>
            }
          />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="自定义输入框">
        <CellGroup>
          <Field
            label="搭配图标"
            labelWidth={72}
            placeholder="请输入搭配图标"
            rightIcon={
              <Icon icon={<IconScan />} sx={{ fontSize: 14, height: 16 }} />
            }
          />
          <Field
            clearable
            label="搭配按钮"
            labelWidth={72}
            placeholder="请输入搭配按钮"
            rightControl={
              <Can sx={{ color: (theme) => theme.palette.primary.main }}>
                发送验证码
              </Can>
            }
          />
          <Field
            clearable
            label="搭配图片"
            labelWidth={58}
            sx={{
              alignItems: 'center',
              padding: '9px 14px'
            }}
            placeholder="请输入搭配图片"
            rightControl={
              <Can
                size={{ width: 32, height: 32 }}
                sx={{ borderRadius: 1, marginRight: 1 }}
              >
                <Image
                  size={{ width: '100%', height: '100%' }}
                  src={demoImg}
                ></Image>
              </Can>
            }
          />
          <Field
            clearable
            label="文案"
            labelWidth={53}
            placeholder="请输入搭配文案"
            leftControl={<Icon sx={{ fontSize: 14 }} icon={<IconPhoto />} />}
          />
        </CellGroup>
      </DemoContainer>

      {/* <DemoContainer title="高度自适应">
        <CellGroup>
          <Field
            label="备注文字"
            labelWidth={72}
            type="textarea"
            placeholder="请输入备注"
            autoHeight
          />
          <Field
            label="字数统计"
            labelWidth={72}
            type="textarea"
            row="2"
            placeholder="请输入备注"
            showWord
            maxLength={550}
          />
        </CellGroup>
      </DemoContainer> */}

      <DemoContainer title="对齐方式">
        <Field
          clearable
          label="标题文字"
          placeholder="输入内容右对齐"
          onInput={handleInput}
          textAlign="right"
        />
      </DemoContainer>
    </>
  );
};

export default FieldView;
