import { Button, Icon, NoticeBar } from '@wemo-ui/marrs';
import {
  IconClose,
  IconRightArrow,
  IconShop,
  IconCart,
  IconTrumpet
} from '@wemo-ui/marrs-icons';
import React from 'react';
import DemoContainer from '../DemoContainer/Demo';

function NoticeBarDemo() {
  return (
    <>
      <DemoContainer title="基础样式" background={false}>
        <NoticeBar
          text="登录同步各渠道购物车中的商品"
          className="demo-margin-b-10"
        ></NoticeBar>
        <NoticeBar
          rightSlot={<Icon sx={{ fontSize: 12 }} icon={<IconClose />} />}
          text="登录同步各渠道购物车中的商品"
          className="demo-margin-b-10"
        ></NoticeBar>
        <NoticeBar
          leftSlot={<Icon sx={{ fontSize: 18 }} icon={<IconTrumpet />} />}
          className="demo-margin-b-10"
          text="登录同步各渠道购物车中的商品"
        ></NoticeBar>
      </DemoContainer>

      <DemoContainer title="自定义样式" background={false}>
        <NoticeBar
          color="#fabe00"
          className="demo-margin-b-10"
          leftSlot={<Icon sx={{ fontSize: 18 }} icon={<IconShop />} />}
          text="登录同步各渠道购物车中的商品"
          rightSlot={<Icon sx={{ fontSize: 12 }} icon={<IconRightArrow />} />}
        ></NoticeBar>
        <NoticeBar
          sx={{
            height: '40px',
            background: 'rgba(33, 33, 33, 0.8)',
            color: '#fff'
          }}
          text="商品未开售，看看其他热销商品吧"
          rightSlot={
            <Button
              face="plain"
              volume="tiny"
              sx={{ color: '#fff', borderColor: ' #9E9E9E' }}
            >
              跳转按钮
            </Button>
          }
        ></NoticeBar>
      </DemoContainer>

      <DemoContainer title="对齐方式" background={false}>
        <NoticeBar
          text="登录同步各渠道购物车中的商品"
          center
          className="demo-margin-b-10"
        ></NoticeBar>
        <NoticeBar
          leftSlot={<Icon sx={{ fontSize: 18 }} icon={<IconTrumpet />} />}
          text="登录同步各渠道购物车中的商品"
          center
        ></NoticeBar>
      </DemoContainer>

      <DemoContainer title="滚动播放" background={false}>
        <NoticeBar
          leftSlot={<Icon sx={{ fontSize: 18 }} icon={<IconTrumpet />} />}
          className="demo-margin-b-10"
          text="登录同步各渠道购物车中的商品"
          scrollable
        ></NoticeBar>
        <NoticeBar
          leftSlot={<Icon sx={{ fontSize: 18 }} icon={<IconTrumpet />} />}
          text={[
            '登录同步各渠道购物车中的商品',
            '好好学习',
            '天天向上',
            '绵阳',
            '天空之城',
            '悬崖之上'
          ]}
          scrollable
          direction="vertical"
        ></NoticeBar>
      </DemoContainer>
    </>
  );
}

export default NoticeBarDemo;
