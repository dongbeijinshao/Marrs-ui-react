# SectionInline 商详单元格

### 介绍

适用于商品详情中优惠，促销等信息的展示。


### 引入

```js
import {
  SectionInline,
  SectionInlineGroup,
  Tag,
  FlexBox,
  Typeface
} from '@wemo-ui/marrs';
```

## 代码演示

### react部分

```html
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
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据 | _boolean_ | 用于点击后传递出来的数据，组件内不做任何处理 |
| onClick | 点击时间 | _function_ | - |
| showArrow | 是否有右侧箭头 | _boolean_ | `false` |
| label | item左侧标题 | _string_ | - |
