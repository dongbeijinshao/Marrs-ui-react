# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

```js
import { Button, Icon, NoticeBar } from '@wemo-ui/marrs';
import {
  IconClose,
  IconRightArrow,
  IconShop,
  IconCart
} from '@wemo-ui/marrs-icons';
import { NoticeBar } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<NoticeBar
  text="登录同步各渠道购物车中的商品"
  className="demo-margin-b-10"
></NoticeBar>
<NoticeBar
  leftSlot={<Icon icon={<IconCart />} />}
  className="demo-margin-b-10"
  text="登录同步各渠道购物车中的商品"
></NoticeBar>
<NoticeBar
  rightSlot={<Icon icon={<IconClose />} />}
  text="登录同步各渠道购物车中的商品"
  className="demo-margin-b-10"
></NoticeBar>
```
### 自定义样式

```html
<NoticeBar
  color="#fabe00"
  className="demo-margin-b-10"
  leftSlot={<Icon icon={<IconShop />} />}
  text="登录同步各渠道购物车中的商品"
  rightSlot={<Icon icon={<IconRightArrow />} />}
></NoticeBar>
<NoticeBar
  sx={{ background: 'rgba(33, 33, 33, 0.8)', color: '#fff' }}
  text="商品未开售，看看其他热销商品吧"
  rightSlot={
    <Button
      color="primary"
      face="plain"
      volume="tiny"
      sx={{ color: '#fff', border: '1px solid #fff' }}
    >
      跳转按钮
    </Button>
  }
></NoticeBar>
```
### 对齐方式

```html
<NoticeBar
  text="登录同步各渠道购物车中的商品"
  center
  className="demo-margin-b-10"
></NoticeBar>
<NoticeBar
  leftSlot={<Icon icon={<IconShop />} />}
  text="登录同步各渠道购物车中的商品"
  center
></NoticeBar>
```

### 滚动播放

```html
<NoticeBar
  color="info"
  leftSlot={<Icon icon={<IconShop />} />}
  className="demo-margin-b-10"
  text="登录同步各渠道购物车中的商品"
  scrollable
></NoticeBar>
<NoticeBar
  color="info"
  leftSlot={<Icon icon={<IconShop />} />}
  text={[
    '登录同步各渠道购物车中的商品',
    '好好学习',
    '天天向上',
    '绵阳',
    '天空之城',
    '悬崖之上'
  ]}
  scrollable
  direction="vertical"
></NoticeBar>
```


## API

### NoticeBarComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|leftSlot| 左边控件|_ReactNode_|否|
|rightSlot| 右边控件|_ReactNode_|否|
|text| 文案|_string_|否|
|center| 是否居中|_boolean_|否|
|maxWidth| 最大宽度|_string_|否|
|speed| 速度|_number_|否|
|scrollable| 是否滚动|_boolean_|否|
|visible| 是否显示|_boolean_|否|
|delay| 延迟|_number_|否|
|direction| 方向|_string_|否|

### NoticeBarClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|verticalRoot|应用于该名称的样式类|_string_|否|
|vertical|应用于该名称的样式类|_string_|否|
|text|应用于该名称的样式类|_string_|否|
|content|应用于该名称的样式类|_string_|否|
|noticeText|应用于该名称的样式类|_string_|否|
|leftSlot|应用于该名称的样式类|_string_|否|
|rightSlot|应用于该名称的样式类|_string_|否|
