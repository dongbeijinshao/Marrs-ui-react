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

/* 自定义个文本样式 */
const CartSlotText = styled(Text)(({ theme }) => {
  return {
    fontSize: 12,
    color: theme.palette.neutral.N7
  };
});

const GoodsList = styled('div')(({ theme }) => {
  console.log(theme.palette.background.default);
  return {
    display: 'grid',
    padding: 6,
    gridTemplateColumns: '50% 50%',
    gridRowGap: 12,
    placeItems: 'center center',
    background: theme.palette.background.default
  };
});

const GoodsCardView = () => {
  const handleAddToCart = useCallback((t) => {
    console.log(t);
  }, []);
  return (
    <GoodsList>
      {/* 默认写法 图片比例1:1 */}
      <GoodsCard
        data={{ id: 1, name: 'sandisk' }}
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn7%2Fs186x186_jfs%2Ft7321%2F336%2F4298968851%2F110282%2Fd146623d%2F59e5a179N3714d7e9.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638962636&t=4ab78f7d4dd9336af35707ce6349fb34"
        tags={['abc']}
        title="水洗棉系列整套卧室三件套"
        subTitle="已售9383件"
        price="50"
        originPrice="88"
        onAddToCart={handleAddToCart}
      />
      <GoodsCard
        data={{ id: 1, name: 'sandisk' }}
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn7%2Fs186x186_jfs%2Ft7321%2F336%2F4298968851%2F110282%2Fd146623d%2F59e5a179N3714d7e9.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638962636&t=4ab78f7d4dd9336af35707ce6349fb34"
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
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn7%2Fs186x186_jfs%2Ft7321%2F336%2F4298968851%2F110282%2Fd146623d%2F59e5a179N3714d7e9.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638962636&t=4ab78f7d4dd9336af35707ce6349fb34"
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
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn7%2Fs186x186_jfs%2Ft7321%2F336%2F4298968851%2F110282%2Fd146623d%2F59e5a179N3714d7e9.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638962636&t=4ab78f7d4dd9336af35707ce6349fb34"
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
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn7%2Fs186x186_jfs%2Ft7321%2F336%2F4298968851%2F110282%2Fd146623d%2F59e5a179N3714d7e9.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638962636&t=4ab78f7d4dd9336af35707ce6349fb34"
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
};

export default GoodsCardView;
