import {
  Button,
  Dialog,
  FlexBox,
  TreeSelect,
  TreeSelectContent,
  Typeface
} from '@wemo-ui/marrs';
import React, { useCallback, useState } from 'react';
import { Palette } from '.';
import GlobalProps from './GlobalProps';
import Steps from './Steps';

const ThemeFactory = () => {
  const [config, setConfig] = useState({});

  const updateTheme = useCallback((pt) => {
    setConfig((prev) => {
      return {
        ...prev,
        ...pt
      };
    });
    document.body.dispatchEvent(
      new CustomEvent('themechanged', { detail: pt })
    );
  }, []);

  const handleSave = useCallback(() => {
    Dialog.alert({
      title: '请复制保存',
      content: <pre>{JSON.stringify(config, null, 2)}</pre>,
      onConfirm: () => {
        localStorage.setItem('theme-saved', JSON.stringify(config, null, 2));
      }
    });
  }, [config]);

  const handleReset = useCallback(() => {
    localStorage.removeItem('theme-saved');
    window.location.reload();
  }, []);
  return (
    <div>
      <TreeSelect value="palette">
        <TreeSelectContent name="tips" title="说明">
          <Typeface face="body1">
            更多主题配置项逐步开放,UED要求固定的项目暂不开放
          </Typeface>
          <Typeface face="body2" color="secondary">
            当然，你想配也可以，不用这个工具，自己手写即可
          </Typeface>
          <Typeface face="body1">组件库支持运行时主题切换、嵌套</Typeface>
        </TreeSelectContent>
        <TreeSelectContent name="palette" title="调色盘">
          <Palette onChange={updateTheme} />
        </TreeSelectContent>
        <TreeSelectContent name="globalProps" title="全局默认">
          <GlobalProps onChange={updateTheme} />
        </TreeSelectContent>
        <TreeSelectContent name="steps" title="基础值">
          <Steps onChange={updateTheme} />
        </TreeSelectContent>
      </TreeSelect>
      <FlexBox
        container
        gap={4}
        sx={{ padding: (theme) => theme.spacing(0, 8) }}
      >
        <FlexBox item space={12}>
          <Button fullWidth color="success" onClick={handleSave}>
            保存
          </Button>
        </FlexBox>
        <FlexBox item space={12}>
          <Button fullWidth color="info" onClick={handleReset}>
            重置
          </Button>
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default ThemeFactory;
