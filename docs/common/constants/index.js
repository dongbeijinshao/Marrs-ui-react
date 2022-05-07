// 快速上手导航
export const BASE_NAV = [
  {
    groupName: '开发指南',
    children: [
      { name: '新手必读', path: '/novice' },
      { name: '快速上手', path: '/quickstart' },
      { name: '主题定制', path: '/theme' },
      { name: '主题调色板', path: '/palette' },
      { name: '工具函数', path: '/styles' }
    ]
  }
];

// 组件导航
export const GROUP_NAV = [
  {
    groupName: '基础组件',
    children: [
      // {
      //   path: '/avatar',
      //   name: 'Avatar 头像'
      // },
      {
        path: '/button',
        name: 'Button 按钮'
      },
      {
        path: '/backTop',
        name: 'BackTop 回到顶部'
      },
      {
        path: '/backdrop',
        name: 'Backdrop 背景暗化'
      },
      {
        path: '/badge',
        name: 'Badge 徽标'
      },
      {
        path: '/can',
        name: 'Can 排版'
      },
      {
        path: '/cell',
        name: 'Cell 单元格'
      },
      {
        path: '/drawer',
        name: 'Drawer 抽屉'
      },
      {
        path: '/divider',
        name: 'Divider 分割线'
      },
      {
        path: '/flexBox',
        name: 'FlexBox 布局'
      },
      {
        path: '/icon',
        name: 'Icon 图标'
      },
      {
        path: '/image',
        name: 'Image 图片'
      },
      // {
      //   path: '/pin',
      //   name: 'Pin 固钉'
      // },
      {
        path: '/text',
        name: 'Text 文本'
      },
      {
        path: '/toast',
        name: 'Toast 轻提示'
      }
    ]
  },
  {
    groupName: '表单组件',
    children: [
      {
        path: '/checkbox',
        name: 'Checkbox 复选框'
      },
      {
        path: '/field',
        name: 'Field 输入框'
      },
      {
        path: '/form',
        name: 'Form 表单'
      },
      {
        path: '/rate',
        name: 'Rate 评分'
      },
      {
        path: '/radio',
        name: 'Radio 单选框'
      },
      {
        path: '/picker',
        name: 'Picker 选择器'
      },
      {
        path: '/searchBar',
        name: 'SearchBar 搜索'
      },
      {
        path: '/stepper',
        name: 'Stepper 步进器'
      },
      {
        path: '/slider',
        name: 'Slider 滑块'
      },
      {
        path: '/switch',
        name: 'Switch 开关'
      },
      {
        path: '/uploader',
        name: 'Uploader 文件上传'
      }
    ]
  },
  {
    groupName: '反馈组件',
    children: [
      {
        path: '/actionSheet',
        name: 'ActionSheet 动作面板'
      },
      {
        path: '/dialog',
        name: 'Dialog 弹出框'
      }
      // {
      //   path: '/dropdown',
      //   name: 'Dropdown 下拉菜单'
      // },
      // {
      //   path: '/loading',
      //   name: 'Loading 加载'
      // }
    ]
  },
  {
    groupName: '展示组件',
    children: [
      {
        path: '/collapse',
        name: 'Collapse 折叠面板'
      },
      {
        path: '/empty',
        name: 'Empty 空状态'
      },
      {
        path: '/noticeBar',
        name: 'NoticeBar 通告栏'
      },
      {
        path: '/progress',
        name: 'Progress 进度条'
      },
      // {
      //   path: '/sticky',
      //   name: 'Sticky 粘性布局'
      // },
      {
        path: '/tag',
        name: 'Tag 标签'
      },
      {
        path: '/treeSelect',
        name: 'TreeSelect 分类选择'
      }
    ]
  },
  {
    groupName: '导航组件',
    children: [
      {
        path: '/grid',
        name: 'Grid 宫格'
      },
      {
        path: '/tabbar',
        name: 'Tabbar 导航栏'
      },
      {
        path: '/sidebar',
        name: 'Sidebar 侧边导航'
      },
      {
        path: '/tab',
        name: 'Tab 标签页'
      }
    ]
  },
  {
    groupName: '业务组件',
    children: [
      {
        path: '/activityGridSheet',
        name: 'ActivityGridSheet 分享宫格'
      },
      {
        path: '/goodsCard',
        name: 'GoodsCard 商品卡片'
      },
      {
        path: '/goodsAction',
        name: 'GoodsAction 底部导航'
      },
      {
        path: '/goodsListCard',
        name: 'GoodsListCard 商品列表'
      },
      {
        path: '/sectionInline',
        name: 'SectionInline 商详单元格'
      }
    ]
  }
];

// 是否是开发环境
export const IS_DEV = process.env.NODE_ENV === 'development';

// 手机端口默认值
export const MOBILE_PORT = '3001';
