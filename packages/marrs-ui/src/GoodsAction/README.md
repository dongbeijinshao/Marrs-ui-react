# GoodsAction 底部导航



### 介绍

适用于商品详情、结算页底部的操作区域等

### 引入

```js
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  GoodsActionSlot
} from '@wemo-ui/marrs';
```

### 代码演示
- GoodsAction 组件提供了多个插槽，可以灵活地自定义内容。
  1. GoodsActionSlot 插槽类
  2. GoodsActionButton 按钮类
  3. GoodsActionIcon 图标类


```js
import { useCallback } from 'react';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  GoodsActionSlot,
  Icon,
  Checkbox,
  Price
} from '@wemo-ui/marrs';
import Demo from './Demo';
import { IconHome, IconCart, IconMine } from '@wemo-ui/marrs-icons';

 <GoodsAction>
    <GoodsActionButton
      color="primary"
      text="加入购物车"
      onClick={hanleClick}
    />
</GoodsAction>


<GoodsAction>
    <GoodsActionButton
      color="warning"
      text="加入购物车"
      onClick={hanleClick}
    />
    <GoodsActionButton text="立即购买" onClick={hanleClick} />
</GoodsAction>


<GoodsAction>
  <GoodsActionSlot sx={{ flex: 1 }}></GoodsActionSlot>
  <GoodsActionButton volume="small" face="plain" text="取消订单" />
  <GoodsActionButton volume="small" text="去支付" />
</GoodsAction>

<GoodsAction>
  <GoodsActionSlot sx={{ flex: 1 }}>
    <Checkbox
      className="demo-margin-r-10"
      label="全选"
      onChange={hanleChange}
    />
  </GoodsActionSlot>
  <GoodsActionButton volume="small" face="plain" text="移入收藏夹" />
  <GoodsActionButton volume="small" face="plain" text="删除" />
</GoodsAction>


<GoodsAction>
  <GoodsActionIcon
    icon={<Icon icon={<IconHome />} volume="medium" />}
    text="首页"
  />
  <GoodsActionButton color="warning" text="加入购物车" />
  <GoodsActionButton text="立即购买" />
</GoodsAction>


<GoodsAction>
  <GoodsActionIcon
    icon={<Icon icon={<IconHome />} volume="medium" />}
    text="首页"
  />
  <GoodsActionIcon
    icon={<Icon icon={<IconCart />} volume="medium" />}
    text="购物车"
  />
  <GoodsActionButton color="warning" text="加入购物车" />
  <GoodsActionButton text="立即购买" />
</GoodsAction>

<GoodsAction>
  <GoodsActionIcon
    color="info"
    icon={<Icon icon={<IconHome />} volume="medium" />}
    text="首页"
  />
  <GoodsActionIcon
    color="success"
    icon={<Icon icon={<IconCart />} volume="medium" />}
    text="购物车"
  />
  <GoodsActionIcon
    color="warning"
    icon={<Icon icon={<IconMine />} volume="medium" />}
    text="我的"
  />
  <GoodsActionButton color="warning" text="加入购物车" />
  <GoodsActionButton text="立即购买" />
</GoodsAction>


<GoodsAction>
  <GoodsActionIcon
    icon={<Icon icon={<IconHome />} volume="medium" />}
    text="首页"
  />
  <GoodsActionIcon
    icon={<Icon icon={<IconCart />} volume="medium" />}
    text="购物车"
  />
  <GoodsActionIcon
    icon={<Icon icon={<IconMine />} volume="medium" />}
    text="我的"
  />
  <GoodsActionButton text="禁用" disabled />
</GoodsAction>


<GoodsAction>
  <GoodsActionSlot sx={{ flex: 3 }}>
    <Checkbox
      className="demo-margin-r-10"
      label="全选"
      onChange={hanleChange}
    />
  </GoodsActionSlot>
  <GoodsActionButton text="立即购买" sx={{ width: 100 }} />
</GoodsAction>


<GoodsAction>
  <GoodsActionSlot sx={{ flex: 3 }}>
    总计：
    <Price value={99.88} />
  </GoodsActionSlot>

  <GoodsActionButton text="立即购买" sx={{ width: 100 }} />
</GoodsAction>
```