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
