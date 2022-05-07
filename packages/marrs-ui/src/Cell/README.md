# Cell 单元格

### 介绍

单元格为列表中的单个展示项。


### 引入

```js
import { Cell } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```jsx
<CellGroup>
  <Cell title="标题文字" showArrow />
  <Cell title="标题文字" content="居右详细内容文字" />
</CellGroup>
```

### 描述信息

```jsx
<CellGroup>
  <Cell
    title="标题文字"
    label="附加信息"
    content="居右详细内容文字"
    center={false}
  />
  <Cell title="标题文字" label="附加信息" content="居右详细内容文字" />
</CellGroup>
```

### 自定义单元格

```jsx
<CellGroup>
  <Cell
    title="搭配图标"
    content="删除"
    rightIcon={
      <Icon
        icon={<IconDelete />}
        sx={{ color: (theme) => theme.palette.text.primary }}
      />
    }
  />
  <Cell
    title="搭配按钮"
    rightControl={
      <Button face="flat" color="primary">
        按钮
      </Button>
    }
  />
  <Cell
    title="搭配徽标"
    rightControl={<Badge content={5} />}
    showArrow
  />
  <Cell title="搭配开关" rightControl={<Switch checked />} />
  <Cell
    title="搭配图片"
    rightControl={
      <Can size={{ width: 40, height: 40 }}>
        <Image
          size={{ width: '100%', height: '100%' }}
          src={demoImg}
        ></Image>
      </Can>
    }
    showArrow
  />
  <Cell
    title="我的头像"
    rightControl={
      <Can size={{ width: 40, height: 40 }} circle>
        <Image
          size={{ width: '100%', height: '100%' }}
          src={demoImg}
        ></Image>
      </Can>
    }
  />
  <Cell
    title="标签标题"
    leftControl={<Tag sx={{ fontSize: 10, marginLeft: -1 }}>标签</Tag>}
    showArrow
  />
  <Cell
    title="标签标题"
    leftControl={<Icon icon={<IconHome />} />}
    showArrow
  />
</CellGroup>
```

## API

### CellComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|volume|尺寸规格|_tiny \| small \| medium \| big \| large_|否|
|title| 左侧标题 |_string_|是|
|content| 右侧内容 |_ReactNode_|否|
|label| 标题下方的描述信息 |_string\|ReactNode_|否|
|colon| 是否在 label 后面添加冒号 |_boolean_|否|
|labelAlign| label对齐方式，可选值为 center right left |_"center"\|"right"\|"left"_|否|
|center| 是否使内容居中 |_boolean_|否|
|titleWidth| title 宽度 |_number_|否|
|labelWidth| label 宽度|_number_|否|
|ellipsis| 是否省略点点，默认换行,(点点点时候指定宽度，否则无效) |_boolean_|否|
|rightIcon| 右边icon showArrow存在时，优先showArrow |_ReactNode_|否|
|showArrow| 导航 |_boolean_|否|
|rightControl| 右边控件,包括按钮、徽章、开关、图片、头像等控件。 |_ReactNode_|否|
|leftControl| 左侧控件 |_ReactNode_|否|
|leftControlPosition| 左侧控件相对于标题的位置,left,right |_"left"\|"right"_|否|
|leftControlClass| 左边icon标题class |_string_|否|
|backgroundColor| 单元格背景色 |_string_|否|

### CellClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|control|应用于该名称的样式类|_string_|否|
|title|应用于该名称的样式类|_string_|否|
|content|应用于该名称的样式类|_string_|否|
|icon|应用于该名称的样式类|_string_|否|
