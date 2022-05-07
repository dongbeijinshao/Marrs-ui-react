# ActionGridSheet 分享宫格

### 介绍

底部弹起的宫格，主要用于分享渠道，也可以自定义底部弹框。


### 引入

```js
import {
  Button,
  FlexBox,
  ActivityGridSheet, // 必须
  ActivityGridSheetLine, // 必须
  Can,
  Icon,
  Text
} from '@wemo-ui/marrs';
import {
  IconWeiXin,
  IconWeiXinFriend,
  IconWeibo,
  IconQQ
} from '@wemo-ui/marrs-icons';

// 可选，如果需要样式高级写法
import { makeStyles, styled } from '@wemo-ui/marrs/styles';

```

## 代码演示

### react部分

- ActivityGridSheet包裹，ActivityGridSheetLine是每一行，里面的数据自己填充，最多一行显示4个

``` jsx
const useStyles = makeStyles(() => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

const MyDiv = styled('div')(() => {
  return { display: 'flex', flexDirection: 'column', alignItems: 'center' };
});

const SHARE_CHANNEL = {
  wx: {
    color: '#26C85A',
    icon: <IconWeiXin />,
    text: '微信'
  },
  wx_friend: {
    color: '#26C85A',
    icon: <IconWeiXinFriend />,
    text: '朋友圈'
  },
  qq: {
    color: '#2793FF',
    icon: <IconQQ />,
    text: 'QQ'
  },
  weibo: {
    color: '#FF2F3B',
    icon: <IconWeibo />,
    text: '微博'
  }
};

const CircleBox = (props) => {
  const item = SHARE_CHANNEL[props.channel];
  return (
    <>
      <Can
        sx={{
          background: item.color,
          textAlign: 'center',
          lineHeight: '58px',
          color: '#fff'
        }}
        size={{ width: 48, height: 48 }}
        circle
      >
        <Icon icon={item.icon} volume="large" />
      </Can>
      <Text sx={{ marginTop: '6px' }} tl="t2">
        {item.text}
      </Text>
    </>
  );
};

const data = ['wx', 'wx_friend', 'qq', 'weibo'];

const [twoLine, setTwoLine] = useState(false);
const [oneScroll, setOneScroll] = useState(false);
const [threeItem, setThreeItem] = useState(false);
const [fourItem, setFourItem] = useState(false);

const myClasses = useStyles();

const handleCloseTwoLine = useCallback(() => {
  setTwoLine(false);
}, [setTwoLine]);

const handleCloseOneScroll = useCallback(() => {
  setOneScroll(false);
}, [setOneScroll]);

const handleCloseThreeItem = useCallback(() => {
  setThreeItem(false);
}, [setThreeItem]);

const handleCloseFourItem = useCallback(() => {
  setFourItem(false);
}, [setFourItem]);
```

### 单行可滑动

``` jsx
<ActivityGridSheet visible={oneScroll} onClose={handleCloseOneScroll}>
  <ActivityGridSheetLine>
    {data.concat(data).map((name, index) => (
      <MyDiv key={index}>
        <CircleBox channel={name} />
      </MyDiv>
    ))}
  </ActivityGridSheetLine>
</ActivityGridSheet>
```


### 两行

``` jsx
<ActivityGridSheet visible={twoLine} onClose={handleCloseTwoLine}>
  <ActivityGridSheetLine>
    {data.map((name, index) => (
      <MyDiv key={index}>
        <CircleBox channel={name} />
      </MyDiv>
    ))}
  </ActivityGridSheetLine>
  <ActivityGridSheetLine>
    {data.map((name, index) => (
      <MyDiv key={index}>
        <CircleBox channel={name} />
      </MyDiv>
    ))}
  </ActivityGridSheetLine>
</ActivityGridSheet>
```


## API

### Props
与ActionSheet组件一致，请参照ActionSheet组件文档。

