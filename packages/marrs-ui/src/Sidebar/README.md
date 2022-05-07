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


## API

### SidebarComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|width| 内容宽度|_number_|否|
|value| 默认当前导航项的索引|_number_|否|

### SidebarAction


|参数|说明|类型|必须|
|--|--|--|--|
|onChange| 点击时触发|_EventHandler_|否|

### SidebarClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|badge|应用于该名称的样式类|_string_|否|

### SidebarItemProps

  > SiderBar 中每一项的 SidebarItem 属性
  

|参数|说明|类型|必须|
|--|--|--|--|
|color| 主题颜色，可选值为 `success` `primary` `secondary` `error` `info` `warning`, 默认值为 `primary`|_string_|否|
|name| 唯一标识，默认索引|_string\|number_|否|
|selected| 是否选中|_boolean_|否|
|title| 名称内容|_string_|否|
|dotOnly| 是否显示右上角小红点|_boolean_|否|
|badge| 图标右上角徽标的内容|_number\|string_|否|
|disabled| 是否禁用该项|_boolean_|否|

### SidebarItemAction

  > SiderBar 中每一项的 SidebarItem 方法
  

|参数|说明|类型|必须|
|--|--|--|--|
|onClick| 点击事件|_EventHandler_|否|
