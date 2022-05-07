# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。


### 引入

```js
import { Toast, Cell, CellGroup, Icon } from '@wemo-ui/marrs';
import { IconAdd, IconLoading } from '@wemo-ui/marrs-icons';
import { useRef } from 'react';
```

## 代码演示

### react 部分

```html
const toastRef = useRef();
  const handleShow = () => {
    toastRef.current = Toast.info({
      message: '我是提示文案，建议不超过十五字~',
      duration: 1,
      onClose: () => {}
    });
  };

  const handleShowSuccess = () => {
    toastRef.current = Toast.success({
      message: '成功文案'
    });
  };
  const handleShowFailure = () => {
    toastRef.current = Toast.fail({
      message: '失败文案'
    });
  };
  const handleShowCustomIcon = () => {
    toastRef.current = Toast.info({
      message: '测试文案',
      icon: IconAdd
    });
  };

  const handleShowTop = () => {
    toastRef.current = Toast.info({
      message: '测试文案',
      position: 'top'
    });
  };
  const handleShowBottom = () => {
    toastRef.current = Toast.info({
      message: '测试文案',
      position: 'bottom'
    });
  };

  const handleShowCountdown = () => {
    let wait = 3;

    function countdown() {
      setTimeout(() => {
        wait--;
        if (wait === 0) {
          toastRef.current.destroy();
        } else {
          toastRef.current.update(`倒数${wait}秒`);
          countdown();
        }
      }, 1000);
    }

    toastRef.current = Toast.loading({
      message: `倒数${wait}秒`,
      duration: 0,
      onOpened: () => {
        countdown();
      }
    });
  };

  const handleShowLoading = () => {
    toastRef.current = Toast.loading({
      message: '加载中'
    });
  };

  const handleShowLoading1 = () => {
    toastRef.current = Toast.loading({
      message: '加载中',
      icon: <Icon icon={<IconLoading />} />
    });
  };
```

### 基本用法

```html
<CellGroup>
  <Cell title="文字提示" showArrow onClick={handleShow} />
  <Cell title="加载提示" showArrow onClick={handleShowLoading} />
  <Cell title="成功提示" showArrow onClick={handleShowSuccess} />
  <Cell title="失败提示" showArrow onClick={handleShowFailure} />
</CellGroup>
```

### 自定义样式

```html
<CellGroup>
  <Cell title="自定义图标" showArrow onClick={handleShowCustomIcon} />
  <Cell title="自定义加载提示" showArrow onClick={handleShowLoading1} />
  <Cell title="自定义位置:顶部" showArrow onClick={handleShowTop} />
  <Cell title="自定义位置:底部" showArrow onClick={handleShowBottom} />
</CellGroup>
```

### 自定义样式

```html
<CellGroup>
  <Cell title="倒计时加载" showArrow onClick={handleShowCountdown} />
</CellGroup>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible| Toast 是否可见 | _boolean_ | `false` |
| icon| 自定义Icon | _nodeElement_ | - |
| message| 显示文案 | _string_ | - |
| duration| 展示时长，设置为 0 时，需要手动关闭 | _number_ | - |
| position| 显示位置，可选值为 `top` `middle` `bottom` | _string_ | `middle` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| destroy | 销毁是回调 | - |
| onClose | 关闭时的回调函数 | - |
| onOpened | 完全显示后的回调函数 | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsToast-root | 应用于根元素的样式类 |
| icon| .MarrsToast-icon | 当设置`icon`,应用于该元素的样式类 |
| Text| .MarrsToast-Text | 应用于`Text`元素的样式类 |
