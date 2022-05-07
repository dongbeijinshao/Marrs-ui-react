# 商品操作卡片（横）



### 介绍

适用于商品列表、结算页等

### 引入

```js
import { Slider, Can } from '@wemo-ui/marrs';
```

### 代码演示
```javascript
import {
  Button,
  GoodsListCard,
  GoodsListCardColumn,
  GoodsListCardDescription,
  GoodsListCardDescriptionBottom,
  GoodsListCardDescriptionSlot,
  GoodsListCardDescriptionTitle,
  GoodsListCardImage,
  Progress,
  Tag,
  Text,
  Typeface
} from '@wemo-ui/marrs';
import Price from '@wemo-ui/marrs/Price';
import { styled } from '@wemo-ui/marrs/styles';
import { useCallback, useState } from 'react';

/** 自定义一个列表 */
const GoodsList = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gap: 10,
    background: theme.palette.background.default
  };
});

/* 自定义个文本样式 */
const CartSlotText = styled(Text)(({ theme }) => {
  return {
    fontSize: theme.sizing(12),
    color: theme.palette.neutral.N7
  };
});

const GoodsListCardView = () => {
  const handleAddToCart = useCallback((t) => {
    console.log(t);
  }, []);

  const [count, setSoldCount] = useState(10);
  const handleClick = useCallback((t) => {
    setSoldCount((count) => count + 10);
  }, []);
  const handleChange = useCallback((t) => {
    console.log('onchange', t);
  }, []);

  return (
    <GoodsList>
      {/** slot写法 */}
      <GoodsListCard
        data={{ id: 1, name: 'sandisk' }}
        image="/public/img1.png"
        tags={['叠层标签']}
        title="SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch"
        subTitle="Incredible speeds in a microSD card "
        price={88.97}
        originPrice={98.22}
        onAddToCart={handleAddToCart}
        onClick={handleClick}
      >
        <GoodsListCardImage
          src="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg"
          tags={['阿斯顿发送到']}
        />
        <GoodsListCardDescription>
          <GoodsListCardDescriptionTitle />
          <GoodsListCardDescriptionSlot sx={{ marginTop: 0 }}>
            <Tag volume="tiny" face="plain">
              极品宝贝
            </Tag>
            <Tag volume="tiny" face="plain" color="info">
              特别好
            </Tag>
            <Tag volume="tiny" color="success">
              不买就亏
            </Tag>
          </GoodsListCardDescriptionSlot>
          <GoodsListCardDescriptionSlot>
            <Typeface color="primary" sx={{ fontSize: 12 }}>
              88积分
            </Typeface>
          </GoodsListCardDescriptionSlot>
          <GoodsListCardDescriptionSlot sx={{ width: '70%' }}>
            <Progress value={count} />
            <CartSlotText>已售出: 2266</CartSlotText>
          </GoodsListCardDescriptionSlot>
          <GoodsListCardDescriptionBottom>
            <span>
              <Price type="main" value={123.93} />
              <Price type="delete" value={222.93} />
            </span>
            <Button volume="tiny">购买</Button>
          </GoodsListCardDescriptionBottom>

          <GoodsListCardDescriptionSlot>
            <CartSlotText>随时退|过期自动退</CartSlotText>
            <br />
            <CartSlotText
              sx={{
                color: (theme) => theme.palette.getColor('primary').color(),
                fontSize: 12
              }}
            >
              SKU字段、尺码、颜色
            </CartSlotText>
          </GoodsListCardDescriptionSlot>
        </GoodsListCardDescription>
        <GoodsListCardColumn>
          <Price value="12.3" />
        </GoodsListCardColumn>
      </GoodsListCard>

      {/** 默认 */}
      <GoodsListCard
        selectable
        selected
        onChange={handleChange}
        image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg"
        tags={['abc']}
        title="SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch"
        subTitle="Incredible speeds in a microSD card "
      ></GoodsListCard>
      <GoodsListCard
        selectable
        image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg"
        tags={['abc']}
        title="SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch"
        subTitle="Incredible speeds in a microSD card "
      ></GoodsListCard>
    </GoodsList>
  );
};

export default GoodsListCardView;

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
| selectable | 是否可以被选中 | _boolean_ | `false` |
| originPrice | 商品原价（划线价） | _number_ | - |
| onAddToCart | 点击加入购物车事件 | _function_ | (data) => void |
| onClick | 点击整个卡片 | _function_ | (data) => void |
