import {
  Button,
  GoodsListCard,
  GoodsListCardColumn,
  GoodsListCardDescription,
  GoodsListCardDescriptionBottom,
  GoodsListCardDescriptionBottomSlot,
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
const CartSlotText = styled(Text)(() => {
  return {
    fontSize: (theme) => {
      return theme.sizing(12);
    }
  };
});

const GoodsListCardView = () => {
  const handleAddToCart = useCallback((t) => {
    console.log(t);
  }, []);

  const [count, setSoldCount] = useState(10);
  const handleClick = useCallback(() => {
    setSoldCount((count) => count + 10);
  }, []);
  const handleChange = useCallback((selected, data) => {
    console.log(selected, data);
  }, []);

  return (
    <>
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
              <Tag face="plain">极品宝贝</Tag>
              <Tag face="plain" color="info">
                特别好
              </Tag>
              <Tag color="success">不买就亏</Tag>
            </GoodsListCardDescriptionSlot>
            <GoodsListCardDescriptionSlot>
              <Typeface
                color="primary"
                sx={{
                  fontSize: (theme) => {
                    theme.sizing(12);
                  }
                }}
              >
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
                  fontSize: (theme) => {
                    return theme.sizing(12);
                  }
                }}
              >
                SKU字段、尺码、颜色
              </CartSlotText>
            </GoodsListCardDescriptionSlot>
          </GoodsListCardDescription>
          <GoodsListCardColumn>
            <CartSlotText>随时退|过期自动退</CartSlotText>
          </GoodsListCardColumn>
        </GoodsListCard>

        {/** 默认 */}
        <GoodsListCard
          selectable
          selected
          data={{ a: 1 }}
          onChange={handleChange}
          image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg"
          tags={['abc']}
          title="SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch"
          subTitle="Incredible speeds in a microSD card "
        ></GoodsListCard>

        {/** 自定义沉底 */}
        <GoodsListCard
          selectable
          image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg"
          tags={['abc']}
          ratio={1 / 1.5}
          title="SanDisk"
          subTitle="I"
          // price={88.97}
          // originPrice={98.22}
        >
          <GoodsListCardDescription>
            <GoodsListCardDescriptionBottomSlot>
              <GoodsListCardDescriptionBottom>
                <span>
                  <Price type="main" value={123.93} />
                  <Price type="delete" value={222.93} />
                </span>
                <Button volume="tiny">购买</Button>
              </GoodsListCardDescriptionBottom>
            </GoodsListCardDescriptionBottomSlot>
          </GoodsListCardDescription>
        </GoodsListCard>

        {/** 售罄 */}
        <GoodsListCard
          selectable
          image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg"
          tags={['abc']}
          ratio={1 / 1.5}
          title="SanDisk"
          subTitle="I"
          // price={88.97}
          // originPrice={98.22}
          coverInfo={{ title: '已售罄', subTitle: 'SOLD OUT' }}
        >
          <GoodsListCardDescription>
            <GoodsListCardDescriptionBottomSlot>
              <GoodsListCardDescriptionBottom>
                <span>
                  <Price type="main" value={123.93} />
                  <Price type="delete" value={222.93} />
                </span>
                <Button volume="tiny">购买</Button>
              </GoodsListCardDescriptionBottom>
            </GoodsListCardDescriptionBottomSlot>
          </GoodsListCardDescription>
        </GoodsListCard>

        {/** 无效 */}
        <GoodsListCard
          selectable
          image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SX679_.jpg"
          tags={['abc']}
          title="SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch"
          disabled
        >
          <GoodsListCardDescription>
            <GoodsListCardDescriptionBottomSlot>
              <Text
                sx={(theme) => ({
                  color: theme.palette.neutral.N6,
                  border: `1px solid ${theme.palette.neutral.N6}`,
                  borderRadius: '4px',
                  width: 'fit-content',
                  padding: theme.spacing(0.5, 4)
                })}
              >
                失效说明
              </Text>
            </GoodsListCardDescriptionBottomSlot>
          </GoodsListCardDescription>
        </GoodsListCard>
      </GoodsList>
    </>
  );
};

export default GoodsListCardView;
