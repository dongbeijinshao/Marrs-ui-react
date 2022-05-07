import ActionSheetView from './ActionSheet';
import ActivityGridSheetView from './ActivityGridSheet';
import AnimationView from './Animation';
import BackdropView from './Backdrop';
import BadgeView from './Badge';
import ButtonView from './Button';
import CalendarView from './Calendar';
import CellView from './Cell';
import CheckboxView from './Checkbox';
import CollapseView from './Collapse';
import DateTimePickerView from './DateTimePicker';
import DialogView from './Dialog';
import DrawerView from './Drawer';
import DropdownView from './Dropdown';
import EmptyView from './Empty';
import FieldView from './Field';
import FlexBoxView from './FlexBox';
import FormView from './Form';
import GoodsActionView from './GoodsAction';
import GoodsCardView from './GoodsCard';
import GoodsListCardView from './GoodsListCard';
import GridView from './Grid';
import IconView from './Icon';
import ImageView from './Image';
import LoadingView from './Loading';
import NoticeBarView from './NoticeBar';
import PickerView from './Picker';
import PickerView2 from './Picker2';
import PickerClass from './PickerClass';
import ProgressView from './Progress';
import RadioView from './Radio';
import RateView from './Rate';
import SearchView from './Search';
import SectionInlineView from './SectionInline';
import SelectorView from './Selector';
import SidebarView from './Sidebar';
import SliderView from './Slider';
import StepperView from './Stepper';
import StickyView from './Sticky';
import SwitchView from './Switch';
import TabView from './Tab';
import TagView from './Tag';
import AvatarView from './Timer';
import TitleBarView from './TitleBar';
import ToastView from './Toast';
import ToastClassView from './ToastClass';
import TreeSelectView from './TreeSelect';
import TypefaceView from './Typeface';
import UploaderView from './Uploader';

const component = [
  {
    name: 'SectionInline',
    component: SectionInlineView
  },
  {
    name: 'ActivityGridSheet',
    component: ActivityGridSheetView
  },
  {
    name: 'toast',
    component: ToastView
  },
  {
    name: 'toast-class',
    component: ToastClassView
  },
  {
    name: 'grid',
    component: GridView
  },
  {
    name: 'tag',
    component: TagView
  },
  {
    name: 'loading',
    component: LoadingView
  },
  {
    name: 'drawer',
    component: DrawerView
  },
  {
    name: 'actionSheet',
    component: ActionSheetView
  },
  {
    name: 'dialog',
    component: DialogView
  },
  {
    name: 'button',
    component: ButtonView
  },
  {
    name: 'image',
    component: ImageView
  },
  {
    name: 'typeface',
    component: TypefaceView
  },
  {
    name: 'flexBox',
    component: FlexBoxView
  },
  {
    name: 'rate',
    component: RateView
  },
  {
    name: 'timer',
    alpha: true,
    component: AvatarView
  },
  {
    name: 'checkbox',
    component: CheckboxView
  },
  {
    name: 'backdrop',
    component: BackdropView
  },
  {
    name: 'radio',
    component: RadioView
  },
  {
    name: 'switch',
    component: SwitchView
  },
  {
    name: 'animation',
    alpha: true,
    component: AnimationView
  },
  {
    name: 'slider',
    component: SliderView
  },
  {
    name: 'progress',
    component: ProgressView
  },
  {
    name: 'tab',
    component: TabView
  },
  {
    name: 'icon',
    component: IconView
  },
  {
    name: 'calendar',
    // alpha: true,
    component: CalendarView
  },
  {
    name: 'sticky',
    component: StickyView
  },
  {
    name: 'cell',
    component: CellView
  },
  {
    name: 'noticeBar',
    component: NoticeBarView
  },
  {
    name: 'field',
    component: FieldView
  },
  {
    name: 'searchBar',
    component: SearchView
  },
  {
    name: 'form',
    component: FormView
  },
  {
    name: 'badge',
    component: BadgeView
  },
  {
    name: 'uploader',
    component: UploaderView
  },
  {
    name: 'empty',
    component: EmptyView
  },
  {
    name: 'Collapse',
    component: CollapseView
  },
  {
    name: 'Dropdown',
    component: DropdownView
  },
  {
    name: 'Picker',
    component: PickerView
  },
  {
    name: 'PickerClass',
    component: PickerClass
  },
  {
    name: 'Picker2',
    component: PickerView2
  },
  {
    name: 'DateTimePicker',
    component: DateTimePickerView
  },

  {
    name: 'Sidebar',
    component: SidebarView
  },
  {
    name: 'TreeSelect',
    component: TreeSelectView
  }, // 业务组件
  {
    name: 'GoodsListCard',
    component: GoodsListCardView
  },
  {
    name: 'GoodsCard',
    component: GoodsCardView
  },
  {
    name: 'TitleBar',
    component: TitleBarView
  },
  {
    name: 'GoodsAction',
    component: GoodsActionView
  },
  {
    name: 'Stepper',
    component: StepperView
  },
  {
    name: 'Selector',
    component: SelectorView
  }
].sort((a, b) => {
  return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
});

export default component;
