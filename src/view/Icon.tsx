import { FlexBox, Icon, IconButton } from '@wemo-ui/marrs';
import {
  IconAdd,
  IconAddress,
  IconAddSolid,
  IconAnnotation,
  IconAppointment,
  IconBackTop,
  IconCart,
  IconCartSolid,
  IconCategory,
  IconCenter,
  IconClose,
  IconComment,
  IconCoupon,
  IconCourse,
  IconCycle,
  IconDelete,
  IconDial,
  IconDialSolid,
  IconDiamond,
  IconDiamondSolid,
  IconDiscount,
  IconDistribution,
  IconDraw,
  IconGiftCard,
  IconGoods,
  IconGroup,
  IconHome,
  IconHomeSolid,
  IconIDCard,
  IconInstruction,
  IconIntegral,
  IconIntegralMall,
  IconLeftArrow,
  IconLoading,
  IconLocation,
  IconMall,
  IconMenu,
  IconMenuSolid,
  IconMine,
  IconMineGoods,
  IconMineGoodsSolid,
  IconPackage,
  IconPackDown,
  IconPackUp,
  IconPhoto,
  IconRecommend,
  IconRecord,
  IconRefund,
  IconRequire,
  IconRest,
  IconRightArrow,
  IconScan,
  IconScreen,
  IconSearch,
  IconSelect,
  IconSet,
  IconShop,
  IconSolidCircle,
  IconSort,
  IconStar,
  IconStarSolid,
  IconSubtract,
  IconSubtractSolid,
  IconTimeLimit,
  IconVip,
  IconWaitDelivery,
  IconWaitPay,
  IconWaitTakeOver
} from '@wemo-ui/marrs-icons';
import { useTheme } from '@wemo-ui/marrs/styles';
import React, { useCallback, useMemo, useState } from 'react';

export const icons = {
  IconStar: <IconStar />,
  IconIDCard: <IconIDCard />,
  IconLocation: <IconLocation />,
  IconShop: <IconShop />,
  IconDial: <IconDial />,
  IconScan: <IconScan />,
  IconSort: <IconSort />,
  IconScreen: <IconScreen />,
  IconInstruction: <IconInstruction />,
  IconPackage: <IconPackage />,
  IconClose: <IconClose />,
  IconAddress: <IconAddress />,
  IconSelect: <IconSelect />,
  IconPackUp: <IconPackUp />,
  IconRightArrow: <IconRightArrow />,
  IconLeftArrow: <IconLeftArrow />,
  IconAnnotation: <IconAnnotation />,
  IconPackDown: <IconPackDown />,
  IconAdd: <IconAdd />,
  IconSubtract: <IconSubtract />,
  IconRequire: <IconRequire />,
  IconMine: <IconMine />,
  IconLoading: <IconLoading />,
  IconDiscount: <IconDiscount />,
  IconCenter: <IconCenter />,
  IconCycle: <IconCycle />,
  IconRecommend: <IconRecommend />,
  IconCart: <IconCart />,
  IconDistribution: <IconDistribution />,
  IconDraw: <IconDraw />,
  IconMenu: <IconMenu />,
  IconWaitDelivery: <IconWaitDelivery />,
  IconSet: <IconSet />,
  IconTimeLimit: <IconTimeLimit />,
  IconDelete: <IconDelete />,
  IconAppointment: <IconAppointment />,
  IconRecord: <IconRecord />,
  IconHome: <IconHome />,
  IconGroup: <IconGroup />,
  IconWaitTakeOver: <IconWaitTakeOver />,
  IconComment: <IconComment />,
  IconMall: <IconMall />,
  IconRefund: <IconRefund />,
  IconSearch: <IconSearch />,
  IconWaitPay: <IconWaitPay />,
  IconGiftCard: <IconGiftCard />,
  IconIntegralMall: <IconIntegralMall />,
  IconMineGoods: <IconMineGoods />,
  IconGoods: <IconGoods />,
  IconIntegral: <IconIntegral />,
  IconBackTop: <IconBackTop />,
  IconRest: <IconRest />,
  IconCategory: <IconCategory />,
  IconPhoto: <IconPhoto />,
  IconCourse: <IconCourse />,
  IconCoupon: <IconCoupon />,
  IconDiamond: <IconDiamond />,
  IconDialSolid: <IconDialSolid />,
  IconStarSolid: <IconStarSolid />,
  IconMineGoodsSolid: <IconMineGoodsSolid />,
  IconDiamondSolid: <IconDiamondSolid />,
  IconCartSolid: <IconCartSolid />,
  IconHomeSolid: <IconHomeSolid />,
  IconMenuSolid: <IconMenuSolid />,
  IconAddSolid: <IconAddSolid />,
  IconSubtractSolid: <IconSubtractSolid />,
  IconSolidCircle: <IconSolidCircle />,
  IconVip: <IconVip />
};

function IconView() {
  const theme = useTheme();

  const [color, setColor] = useState(theme.globalProps.color);
  const [type, setType] = useState('filled');
  const [comp, setComp] = useState('button');
  const [spin, setSpin] = useState('no');
  const [volume, setVolume] = useState(theme.globalProps.volume);
  const handleClick = useCallback((e) => {
    console.log(e.target.title);
  }, []);
  const handleChangeType = useCallback((e) => {
    setType(e.target.value);
  }, []);
  const handleChangeColor = useCallback((e) => {
    setColor(e.target.value);
  }, []);

  const handleChangeComponent = useCallback((e) => {
    setComp(e.target.value);
  }, []);
  const handleChangeSpin = useCallback((e) => {
    setSpin(e.target.value);
  }, []);

  const handleChangeSize = useCallback((e) => {
    setVolume(e.target.value);
  }, []);

  const renderSelector = useMemo(() => {
    return (
      <div>
        <select onChange={handleChangeSize} defaultValue={volume}>
          <option value="tiny">tiny</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <select onChange={handleChangeSpin}>
          <option value="no">不转</option>
          <option value="yes">转</option>
        </select>
        <select onChange={handleChangeComponent}>
          <option value="button">button</option>
          <option value="icon">icon</option>
        </select>
        <select onChange={handleChangeType}>
          <option value="filled">filled</option>
          <option value="plain">plain</option>
          <option value="text">text</option>
        </select>
        <select onChange={handleChangeColor} defaultValue={color}>
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
          <option value="info">info</option>
          <option value="warning">warning</option>
          <option value="success">success</option>
        </select>
      </div>
    );
  }, [
    handleChangeType,
    handleChangeColor,
    handleChangeComponent,
    handleChangeSpin,
    handleChangeSize,
    volume,
    color
  ]);
  return (
    <div style={{ fontSize: 30, padding: 20 }}>
      {/* <IconStar /> */}
      <Icon
        icon={<IconStar />}
        volume="large"
        // sx={{ color: 'blue', fontSize: '100px' }}
        size={100}
      ></Icon>
      {renderSelector}
      <br />
      <FlexBox container gap={2}>
        {Object.keys(icons).map((key) => {
          const Icon = icons[key];
          return (
            <FlexBox item key={key}>
              {comp === 'button' ? (
                <IconButton
                  icon={Icon}
                  volume={volume}
                  spin={spin === 'yes'}
                  onClick={handleClick}
                  color={color}
                  face={type}
                  title={key}
                />
              ) : (
                <>
                  {Icon}
                  <span style={{ fontSize: 8 }}>{key}</span>
                </>
              )}
            </FlexBox>
          );
        })}
      </FlexBox>
    </div>
  );
}

export default IconView;
