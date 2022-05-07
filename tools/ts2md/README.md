# ts转化成md文档工具

### 使用
1. 【重要】检查本地是否有 ts2md.config 配置文件，必须基于配置文件才执行
2. 本地添加命令 `"ts2md": "node ./tools/ts2md/index.js"`
3. 执行 npm run ts2md，会生成对应文档

### 注意
1. 集成在工具中的组件，必须要有 `demo.md` 文档，否则不进行扫描，还按照该组件原来的文档来
2. 标准的 dts 文件请参考 `packages/marrs-ui/src/ActionSheet/ActionSheet.d.ts` ,如果写ts时有非基本用法，如 keyof 等，请联系饶驹<ju.rao@weimob.com>

### 标准demo
1. 写 dts 文档
```js
import React from 'react';
import { ClassesProps, GlobalProps } from '../types/components';

export interface ActionSheetComponent {
  /* 是否显示动作面板 */
  visible?: boolean;
  /* 选项上方的描述信息 */
  title?: string;
}

export interface ActionSheetAction {
  // 点击关闭的回调
  onClose?: React.EventHandler<any>;
}

export interface ActionSheetClasses {
  root?: string;
}

export type ActionSheetProps = Pick<GlobalProps, 'color'> &
  ClassesProps<ActionSheetClasses> &
  ActionSheetComponent &
  ActionSheetAction;

declare const ActionSheet: React.FC<ActionSheetProps>;
export default ActionSheet;

```
2. 输出文档标准的额 schema格式,如果需要修改输入的文档，请在 `ts2md.config.js` 文件中 complier.beforeRender 钩子中修改要输入的 schema
```js
 "properties": [
            {
                "name": "color",
                "description": "组件色调",
                "type": "_primary \\| secondary \\| success \\| error \\| info \\| warning_",
                "required": false
            },
            {
                "name": "visible",
                "description": " 是否显示动作面板 ",
                "type": "_boolean_",
                "required": false
            },
 ]
```

### 后续优化
1. 以下组件还没有集成到工具中
  -  含有多个 dts 的组件
      + Uploader
        + UploaderPreview 未完成 dts
  -  Typeface 全局的属性  Variant
  -  DropdownGroup 暂时不改
  -  暂时不进入自动生成文档
      +  Button  Badge（有函数类型）
      +  Toast Dialog （函数调用）
      +  CheckboxProps,Radio,Tag（纯继承）
      +  Collapse（有继承）
      +  TreeSelect 分类选择(未整理)
      +  TabBar 导航栏(里面有多个组件文件要导出)
      +  Text （有类型 keyof）
