import {
  Button,
  FlexBox,
  ActivityGridSheet,
  ActivityGridSheetLine,
  Can,
  Icon,
  Text
} from '@wemo-ui/marrs';
import { makeStyles, styled } from '@wemo-ui/marrs/styles';
import {
  IconWeiXin,
  IconWeiXinFriend,
  IconWeibo,
  IconQQ
} from '@wemo-ui/marrs-icons';
import { useState, useCallback } from 'react';

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

export default function ActivityGridSheetView() {
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

  return (
    <>
      <FlexBox container gap={2} sx={{ margin: 5 }}>
        <FlexBox item>
          <Button color="info" face="plain" onClick={() => setTwoLine(true)}>
            两行
          </Button>
        </FlexBox>

        <FlexBox item>
          <Button color="info" face="plain" onClick={() => setOneScroll(true)}>
            单行可滑动
          </Button>
        </FlexBox>

        <FlexBox item>
          <Button color="info" face="plain" onClick={() => setThreeItem(true)}>
            单行三个
          </Button>
        </FlexBox>

        <FlexBox item>
          <Button color="info" face="plain" onClick={() => setFourItem(true)}>
            单行四个
          </Button>
        </FlexBox>
      </FlexBox>

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

      <ActivityGridSheet visible={oneScroll} onClose={handleCloseOneScroll}>
        <ActivityGridSheetLine>
          {data.concat(data).map((name, index) => (
            <MyDiv key={index}>
              <CircleBox channel={name} />
            </MyDiv>
          ))}
        </ActivityGridSheetLine>
      </ActivityGridSheet>

      <ActivityGridSheet visible={threeItem} onClose={handleCloseThreeItem}>
        <ActivityGridSheetLine>
          {data.slice(0, 3).map((name, index) => (
            <MyDiv key={index}>
              <CircleBox channel={name} />
            </MyDiv>
          ))}
        </ActivityGridSheetLine>
      </ActivityGridSheet>

      <ActivityGridSheet visible={fourItem} onClose={handleCloseFourItem}>
        <ActivityGridSheetLine>
          {data.map((name, index) => (
            <div className={myClasses.container} key={index}>
              <CircleBox channel={name} />
            </div>
          ))}
        </ActivityGridSheetLine>
      </ActivityGridSheet>
    </>
  );
}
