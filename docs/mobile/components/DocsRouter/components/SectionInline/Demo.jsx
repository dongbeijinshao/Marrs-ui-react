import {
  SectionInline,
  SectionInlineGroup,
  Tag,
  FlexBox,
  Typeface
} from '@wemo-ui/marrs';
function onClick(data) {
  console.log(data);
}
const itemData = {
  goodsName: '小商品',
  goodsId: '123'
};
export default function SectionView() {
  return (
    <SectionInlineGroup>
      <SectionInline data={itemData} onClick={onClick} label="已选" showArrow>
        红色 · 39 · 1件 · 2XXL
      </SectionInline>
      <SectionInline label="领券" showArrow>
        <FlexBox container gap={2}>
          <FlexBox item>
            <Tag>满500减200</Tag>
          </FlexBox>
          <FlexBox item>
            <Tag>满500减200</Tag>
          </FlexBox>
          <FlexBox item>
            <Tag>满500减200</Tag>
          </FlexBox>
        </FlexBox>
      </SectionInline>
      <SectionInline label="促销" showArrow>
        <FlexBox container gap={2}>
          <FlexBox item>
            <Tag face="plain">满送</Tag>
          </FlexBox>
          <FlexBox item>
            <Typeface>满50减10；全店满100减25</Typeface>
          </FlexBox>
        </FlexBox>
        <FlexBox container gap={2}>
          <FlexBox item>
            <Tag face="plain">满送</Tag>
          </FlexBox>
          <FlexBox item>
            <Typeface>满50减10；全店满100减25</Typeface>
          </FlexBox>
        </FlexBox>
      </SectionInline>
      <SectionInline label="服务">红色 · 39 · 1件 · 2XXL</SectionInline>
      <SectionInline label="配送">红色 · 39 · 1件 · 2XXL</SectionInline>
    </SectionInlineGroup>
  );
}
