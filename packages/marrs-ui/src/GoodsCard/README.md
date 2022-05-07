# GoodsCard 商品卡片

### 介绍

适用于商品列表页面


### 引入

```js
import {
  GoodsCard,
  GoodsCardImage,
  GoodsCardDescription,
  GoodsCardDescriptionTitle,
  GoodsCardDescriptionSlot,
  GoodsCardDescriptionBottom,
  Tag,
  Progress,
  Text,
  Button,
  Price,
  FlexBox
} from '@wemo-ui/marrs';

import { IconRightArrow } from '@wemo-ui/marrs-icons';
import { styled } from '@wemo-ui/marrs/styles';
import { useCallback } from 'react';
```

### 代码演示

```js

/* 自定义个文本样式 */
const CartSlotText = styled(Text)(({ theme }) => {
  return {
    fontSize: 12,
    color: theme.palette.neutral.N7
  };
});

const GoodsList = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    padding: 6,
    gridTemplateColumns: '50% 50%',
    gridRowGap: 12,
    placeItems: 'center center',
    background: theme.palette.background.default
  };
});


const handleAddToCart = useCallback((t) => {
    console.log(t);
  }, []);
(
    <GoodsList>
      {/* 默认写法 图片比例1:1 */}
      <GoodsCard
        data={{ id: 1, name: 'sandisk' }}
        image={demoImage}
        tags={['abc']}
        title="水洗棉系列整套卧室三件套"
        subTitle="已售9383件"
        price="50"
        originPrice="88"
        onAddToCart={handleAddToCart}
      />
      <GoodsCard
        data={{ id: 1, name: 'sandisk' }}
        image={demoImage}
        tags={['abc']}
        title="水洗棉系列整套卧室三件套"
        subTitle="已售9383件"
        price="50"
        originPrice="88"
        onAddToCart={handleAddToCart}
      />

      {/* 默认写法 图片比例1:1.5 */}
      <GoodsCard
        data={{ id: 1, name: 'sandisk' }}
        image={demoImage}
        ratio={1 / 1.5}
        tags={['abc']}
        title="水洗棉系列整套卧室三件套"
        subTitle="已售9383件"
        price="50"
        originPrice="88"
        onAddToCart={handleAddToCart}
      />
      <GoodsCard
        data={{ id: 3, name: 'sandisk' }}
        image={demoImage}
        ratio={1 / 1.5}
        tags={['abc']}
        title="水洗棉系列整套卧室三件套"
        subTitle="已售9383件"
        price="50"
        originPrice="88"
        onAddToCart={handleAddToCart}
      />

      {/* slot写法 图片比例1.5:1 */}
      <GoodsCard
        data={{ id: 2, name: 'sandisk' }}
        image={demoImage}
        ratio={1.5 / 1}
        title="水洗棉系列整套卧室三件套"
        subTitle="已售9383件"
        onAddToCart={handleAddToCart}
      >
        <GoodsCardImage
          src="https://img2.baidu.com/it/u=596811921,3444219369&fm=26&fmt=auto"
          tags={['自定义标签']}
        />
        <GoodsCardDescription>
          <GoodsCardDescriptionTitle
            title="水洗棉系列卧室三件套"
            subTitle="已售88件"
          />
          <GoodsCardDescriptionSlot>
            <Tag face="plain" sx={{ marginRight: 2, marginBottom: 2 }}>
              极品宝贝
            </Tag>
            <Tag
              face="plain"
              color="info"
              sx={{ marginRight: 2, marginBottom: 2 }}
            >
              特别好
            </Tag>
            <Tag color="success" sx={{ marginRight: 2, marginBottom: 2 }}>
              不买就亏
            </Tag>
          </GoodsCardDescriptionSlot>
          <GoodsCardDescriptionSlot sx={{ width: '70%' }}>
            <Progress value={50} />
            <CartSlotText>已售出: 2266</CartSlotText>
          </GoodsCardDescriptionSlot>
          <GoodsCardDescriptionBottom>
            <span>
              <Price type="main" value={1} />
              <Price type="delete" value={2} />
            </span>
            <Button volume="tiny">购买</Button>
          </GoodsCardDescriptionBottom>
          <GoodsCardDescriptionSlot>
            <FlexBox container>
              <CartSlotText>门店名称</CartSlotText>
              <IconRightArrow color="#9E9E9E" />
            </FlexBox>
          </GoodsCardDescriptionSlot>
        </GoodsCardDescription>
      </GoodsCard>
    </GoodsList>
  );

```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 商品数据 | _object_ | -|
| image | 商品卡片图 | _React.Element \| string_ | - |
| tags | 商品标签 | _Array\<string\>_ | - |
| title | 商品名称 | _string_ | - |
| subTitle | 商品次标题 | _string_ | - |
| ratio  | 商品图片比例  | _number_ | 1 |
| price | 商品价格 | _number_ | - |
| originPrice | 商品原价（划线价） | _number_ | - |
| onAddToCart | 点击加入购物车事件 | _function_ | (data) => void |