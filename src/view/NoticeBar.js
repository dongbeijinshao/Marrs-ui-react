import { Button, Icon, NoticeBar } from '@wemo-ui/marrs';
import {
  IconClose,
  IconHome,
  IconRightArrow,
  IconShop
} from '@wemo-ui/marrs-icons';
import React, { useState } from 'react';
import Demo from './Demo';

const LeftSlot = () => {
  return (
    <Icon>
      <IconHome />
    </Icon>
  );
};

const LeftSlot1 = () => {
  return (
    <Icon>
      <IconShop />
    </Icon>
  );
};

const RightIcon = () => {
  return (
    <>
      <span>操作</span>
      <Icon>
        <IconRightArrow />
      </Icon>
    </>
  );
};

const RightIcon1 = () => {
  return (
    <>
      <Icon>
        <IconClose />
      </Icon>
    </>
  );
};

const RightIcon2 = () => {
  return (
    <>
      <Icon>
        <IconRightArrow />
      </Icon>
    </>
  );
};
const RightIcon3 = () => {
  return (
    <Button color="primary" face="plain" volume="tiny" disableElevation>
      跳转按钮
    </Button>
  );
};
function NoticeBarView() {
  const [visible, setVisible] = useState(true);
  const handleChange = () => {
    setVisible(false);
  };
  return (
    <>
      <Demo title="基础样式" padding>
        <NoticeBar
          leftSlot={<LeftSlot />}
          text="登录同步各渠道购物车中的商品"
          rightSlot={<RightIcon />}
        ></NoticeBar>
      </Demo>
      <Demo title="纯文案样式" padding>
        <NoticeBar text="登录同步各渠道购物车中的商品"></NoticeBar>
      </Demo>
      <Demo title="操作样式" padding>
        <NoticeBar
          text="登录同步各渠道购物车中的商品"
          rightSlot={<RightIcon1 onClick={handleChange} />}
          visible={visible}
        ></NoticeBar>
      </Demo>
      <Demo title="自定义外观" padding>
        <NoticeBar
          color="#fabe00"
          leftSlot={<LeftSlot1 />}
          text="登录同步各渠道购物车中的商品"
          rightSlot={<RightIcon2 />}
        ></NoticeBar>
        <NoticeBar
          sx={{ background: '#ddd', color: '#000000' }}
          text="商品未开售，看看其他热销商品吧"
          rightSlot={<RightIcon3 />}
        ></NoticeBar>
      </Demo>
      <Demo title="对齐方式" padding>
        <NoticeBar
          leftSlot={<LeftSlot />}
          text="登录同步各渠道购物车中的商品"
          center
        ></NoticeBar>
      </Demo>
      <Demo title="滚动播放" padding>
        <NoticeBar
          color="info"
          leftSlot={<LeftSlot />}
          text={[
            '登录同步各渠道购物车中的商品',
            '好好学习',
            '天天向上',
            '绵阳',
            '天空之城',
            '悬崖之上'
          ]}
          rightSlot={<RightIcon />}
          scrollable
          direction="vertical"
        ></NoticeBar>
      </Demo>
      <Demo title="滚动播放" padding>
        <NoticeBar
          color="info"
          leftSlot={<LeftSlot />}
          text="登录同步各渠道购物车中的商品"
          rightSlot={<RightIcon />}
          scrollable
        ></NoticeBar>
      </Demo>
    </>
  );
}

export default NoticeBarView;
