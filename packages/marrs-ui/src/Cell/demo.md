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