import { Icon, Toast } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';
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
  IconSort,
  IconStar,
  IconStarSolid,
  IconSubtract,
  IconSubtractSolid,
  IconTimeLimit,
  IconWaitDelivery,
  IconWaitPay,
  IconWaitTakeOver,
  IconError,
  IconBill,
  IconClearDelete,
  IconPayment,
  IconReceipt,
  IconEvaluation,
  IconShip,
  IconSelected,
  IconWeiXin,
  IconWeiXinFriend,
  IconWeibo,
  IconQQ
} from '@wemo-ui/marrs-icons';
import './font_face/iconfont.css';

const icons = {
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
  IconError: <IconError />,
  IconBill: <IconBill />,
  IconClearDelete: <IconClearDelete />,
  IconPayment: <IconPayment />,
  IconReceipt: <IconReceipt />,
  IconEvaluation: <IconEvaluation />,
  IconShip: <IconShip />,
  IconSelected: <IconSelected />,
  IconWeiXin: <IconWeiXin />,
  IconWeiXinFriend: <IconWeiXinFriend />,
  IconQQ: <IconQQ />,
  IconWeibo: <IconWeibo />
};

const iconList = Object.keys(icons);

const copy = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
};

const handleClick = (item) => {
  copy(`<Icon icon={<${item} />} />`);
  Toast.success({
    message: '已复制到剪切板'
  });
};

const IconDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false} padding>
        {iconList.map((item, index) => (
          <Icon
            key={`child-${index}`}
            icon={icons[item]}
            className="demo-margin-10"
            onClick={() => {
              handleClick(item);
            }}
          />
        ))}
      </DemoContainer>

      <DemoContainer title="icon旋转" background={false} padding>
        <Icon icon={<IconAdd />} spin />
      </DemoContainer>

      <DemoContainer title="icon大小" background={false} padding>
        <Icon icon={<IconAdd />} volume="tiny" />
        <Icon icon={<IconAdd />} volume="small" />
        <Icon icon={<IconAdd />} volume="medium" />
        <Icon icon={<IconAdd />} volume="large" />
      </DemoContainer>

      <DemoContainer title="自定义icon" background={false} padding>
        <Icon icon={<i className="weimob-icon weimob-icon-vip" />} />
      </DemoContainer>
    </>
  );
};

export default IconDemo;
