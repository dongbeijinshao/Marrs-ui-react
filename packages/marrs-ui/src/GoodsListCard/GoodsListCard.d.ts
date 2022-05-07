import { ClassesProps } from '../types/components';

/**
 * @description GoodsListCard
 */
export interface GoodsListCardComponent {
  // 传入的数据，在点击时返数据
  data?: any;
  // 商品图片
  image?: string;
  // 商品标签
  tags?: string[];
  // 商品标题
  title?: string;
  // 副标题
  subTitle?: string;
  // 价格
  price?: number;
  // 原始价，划线价
  originPrice?: number;
  // 图片比例
  ratio?: number;
  // 图片覆盖的标题
  coverInfo?: { title: string; subTitle?: string };
  // 禁用状态
  disabled?: boolean;
}

/**
 * GoodsListCard 操作
 */
export interface GoodsListCardAction {
  // 点击购物车方法
  onAddToCart?: (data: Pick<GoodsListCardComponent, 'data'>) => void;
  // 点击整个卡片方法
  onclick?: (data: Pick<GoodsListCardComponent, 'data'>) => void;
}

/**
 * GoodsListCard classes-slot
 */
export interface GoodsListCardClasses {
  root?: string;
}

export type GoodsListCardProps = ClassesProps<GoodsListCardClasses> &
  GoodsListCardComponent &
  GoodsListCardAction;

declare const GoodsListCard: React.FC<GoodsListCardProps>;
export default GoodsListCard;
