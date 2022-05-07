# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

```js
import { Can, Grid, IconItem } from '@wemo-ui/marrs';
import {
  IconAppointment,
  IconCart,
  IconHome,
  IconMineGoods
} from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<Grid sx={{ background: '#fff' }}>
  <IconItem text="首页" icon={<IconHome />} />
  <IconItem text="分类" icon={<IconAppointment />} />
  <IconItem text="购物车" icon={<IconCart />} />
  <IconItem text="我的" icon={<IconMineGoods />} />
</Grid>
```
### 自定义行列数

```html
<Grid column={3} sx={{ background: '#fff' }}>
  <IconItem text="首页" icon={<IconHome />} />
  <IconItem text="分类" icon={<IconAppointment />} />
  <IconItem text="购物车" icon={<IconCart />} />
  <IconItem text="首页" icon={<IconHome />} />
  <IconItem text="分类" icon={<IconAppointment />} />
  <IconItem text="购物车" icon={<IconCart />} />
</Grid>
```
### 徽标气泡

```html
<Can sx={{ background: '#fff' }}>
  <Grid color="info">
    <IconItem text="首页" icon={<IconHome />} />
    <IconItem badge="99+" text="购物车" icon={<IconCart />} />
    <IconItem
      badge={{ dotOnly: true }}
      text="我的"
      icon={<IconMineGoods />}
    />
  </Grid>
</Can>
```
