# Sidebar 侧边导航

### 介绍

用于侧边导航。

### 引入

```js
import { Sidebar, SidebarItem, Toast } from '@wemo-ui/marrs';
```

## 代码演示

### react 部分

```html
const handleChange = (index) => {
  Toast.success({
    message: `当前选中${index}`
  });
};

const badgeProps = {
  dotOnly: true,
  content: '123'
};
```

### 基础样式

```html
<Sidebar value={1}>
  <SidebarItem title="IP联名款" name={0} />
  <SidebarItem title="侧边导航" name={1} />
  <SidebarItem title="禁用选项" name={2} disabled />
  <SidebarItem title="明星同款" name={3} />
</Sidebar>
```
### 徽标气泡

```html
<Sidebar value={1}>
  <SidebarItem title="IP联名款" badge={badgeProps} name={0} />
  <SidebarItem title="侧边导航" badge={6} name={1} />
  <SidebarItem title="禁用选项" badge={99} name={2} disabled />
  <SidebarItem title="明星同款" name={3} />
</Sidebar>
```
### 监听切换事件

```html
<Sidebar onChange={handleChange}>
  <SidebarItem title="标签名称" />
  <SidebarItem title="标签名称" />
  <SidebarItem title="标签名称" />
</Sidebar>
```
