# Tabbar 导航栏

### 介绍

可以用于底部导航。

### 引入

```js
import { Tabbar, TabbarItem } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Tabbar current="home" volume="large" color="info">
  <TabbarItem text="首页" name="home" color="info" />
  <TabbarItem text="购物车" name="car" />
  <TabbarItem text="我的" name="/" badge="99+" />
</Tabbar>

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
 color | 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning` | _string_ | `primary` |
| volume | 尺寸，可选值为 `tiny` `small` `medium` `large` | _string_ | `medium` |
| current| 当前值 | _number \| string_ | - |

### classes-slots

| 规则名称 | 全局类 | 描述 |
| --- | --- | --- |
| root| .MarrsTabbar-root | 应用于根元素的样式类 |
| root| .MarrsItem-root | 应用于`item`根元素的样式类 |


