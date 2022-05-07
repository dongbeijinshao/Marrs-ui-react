import { useCallback } from 'react';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  GoodsActionSlot,
  Icon,
  Checkbox,
  Price
} from '@wemo-ui/marrs';
import Demo from './Demo';
import { IconHome, IconCart, IconMine } from '@wemo-ui/marrs-icons';

function GoodsActionView() {
  const hanleClick = useCallback((e) => {
    console.log('点击', e);
  }, []);
  const hanleChange = useCallback((e) => {
    console.log(e);
  }, []);
  return (
    <div style={{ padding: 0, height: '180vh', background: '#f5f5f5' }}>
      <Demo title="按钮类" padding>
        <GoodsAction>
          <GoodsActionButton
            color="primary"
            text="加入购物车"
            onClick={hanleClick}
          />
        </GoodsAction>
      </Demo>
      <Demo title="按钮类" padding>
        <GoodsAction>
          <GoodsActionButton
            color="warning"
            text="加入购物车"
            onClick={hanleClick}
          />
          <GoodsActionButton text="立即购买" onClick={hanleClick} />
        </GoodsAction>
      </Demo>
      <Demo title="按钮类" padding>
        <GoodsAction>
          <GoodsActionSlot sx={{ flex: 1 }}></GoodsActionSlot>
          <GoodsActionButton volume="small" face="plain" text="取消订单" />
          <GoodsActionButton volume="small" text="去支付" />
        </GoodsAction>
      </Demo>
      <Demo title="按钮类" padding>
        <GoodsAction>
          <GoodsActionSlot sx={{ flex: 1 }}>
            <Checkbox
              className="demo-margin-r-10"
              label="全选"
              onChange={hanleChange}
            />
          </GoodsActionSlot>
          <GoodsActionButton volume="small" face="plain" text="移入收藏夹" />
          <GoodsActionButton volume="small" face="plain" text="删除" />
        </GoodsAction>
      </Demo>
      <Demo title="宫格类" padding>
        <GoodsAction>
          <GoodsActionIcon
            icon={<Icon icon={<IconHome />} volume="medium" />}
            text="首页"
          />
          <GoodsActionButton color="warning" text="加入购物车" />
          <GoodsActionButton text="立即购买" />
        </GoodsAction>
      </Demo>

      <Demo title="宫格类" padding>
        <GoodsAction>
          <GoodsActionIcon
            icon={<Icon icon={<IconHome />} volume="medium" />}
            text="首页"
          />
          <GoodsActionIcon
            icon={<Icon icon={<IconCart />} volume="medium" />}
            text="购物车"
          />
          <GoodsActionButton color="warning" text="加入购物车" />
          <GoodsActionButton text="立即购买" />
        </GoodsAction>
      </Demo>

      <Demo title="宫格类" padding>
        <GoodsAction>
          <GoodsActionIcon
            color="info"
            icon={<Icon icon={<IconHome />} volume="medium" />}
            text="首页"
          />
          <GoodsActionIcon
            color="success"
            icon={<Icon icon={<IconCart />} volume="medium" />}
            text="购物车"
          />
          <GoodsActionIcon
            color="warning"
            icon={<Icon icon={<IconMine />} volume="medium" />}
            text="我的"
          />
          <GoodsActionButton color="warning" text="加入购物车" />
          <GoodsActionButton text="立即购买" />
        </GoodsAction>
      </Demo>
      <Demo title="失效" padding>
        <GoodsAction>
          <GoodsActionIcon
            icon={<Icon icon={<IconHome />} volume="medium" />}
            text="首页"
          />
          <GoodsActionIcon
            icon={<Icon icon={<IconCart />} volume="medium" />}
            text="购物车"
          />
          <GoodsActionIcon
            icon={<Icon icon={<IconMine />} volume="medium" />}
            text="我的"
          />
          <GoodsActionButton text="禁用" disabled />
        </GoodsAction>
      </Demo>
      <Demo title="信息类" padding>
        <GoodsAction>
          <GoodsActionSlot sx={{ flex: 3 }}>
            <Checkbox
              className="demo-margin-r-10"
              label="全选"
              onChange={hanleChange}
            />
          </GoodsActionSlot>
          <GoodsActionButton
            text="立即购买"
            sx={{
              width: (theme) => {
                theme.sizing(100);
              }
            }}
          />
        </GoodsAction>
      </Demo>

      <Demo title="信息类" padding>
        <GoodsAction>
          <GoodsActionSlot sx={{ flex: 3 }}>
            总计：
            <Price value={99.88} />
          </GoodsActionSlot>

          <GoodsActionButton
            text="立即购买"
            sx={{
              width: (theme) => {
                theme.sizing(100);
              }
            }}
          />
        </GoodsAction>
      </Demo>
    </div>
  );
}

export default GoodsActionView;
