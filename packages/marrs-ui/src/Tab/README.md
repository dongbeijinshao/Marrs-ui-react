# Tab 标签页

### 介绍

用于选择不同tab块。

### 引入

```js
import { Tab, TabPanel, Tabs, Icon, Toast } from '@wemo-ui/marrs';
import { IconHome } from '@wemo-ui/marrs-icons';
import { useState, useCallback } from 'react';
```

## 代码演示

### 基本样式

```html
<Tabs value={value} onChange={handleChange}>
  <Tab value={0}>全部</Tab>
  <Tab value={1}>热销</Tab>
  <Tab value={2} disabled>
    禁用
  </Tab>
  <Tab value={3}>连衣裙</Tab>
  <Tab value={4}>裤子</Tab>
</Tabs>
<TabPanel visible={value === 0}>全部内容</TabPanel>
<TabPanel visible={value === 1}>热销内容</TabPanel>
<TabPanel visible={value === 3}>连衣裙内容</TabPanel>
<TabPanel visible={value === 4}>裤子内容</TabPanel>
```
### 标签栏滑动

```html
<Tabs value={value} onChange={handleChange}>
  <Tab value={0}>全部</Tab>
  <Tab value={1}>热销</Tab>
  <Tab value={2}>上衣</Tab>
  <Tab value={3}>连衣裙</Tab>
  <Tab value={4}>裤子</Tab>
  <Tab value={4}>帽子</Tab>
</Tabs>
<TabPanel visible={value === 0}>全部内容</TabPanel>
<TabPanel visible={value === 1}>热销内容</TabPanel>
<TabPanel visible={value === 2}>上衣内容</TabPanel>
<TabPanel visible={value === 3}>连衣裙内容</TabPanel>
<TabPanel visible={value === 4}>裤子内容</TabPanel>
<TabPanel visible={value === 4}>帽子内容</TabPanel>
```
### 搭配Icon

```html
<Tabs value={value}>
  <Tab value={0}>全部</Tab>
  <Tab value={1}>热销</Tab>
  <Tab value={2}>上衣</Tab>
  <Tab value={3}>
    连衣裙 <Icon icon={<IconHome />} sx={{ marginLeft: 1 }} />
  </Tab>
</Tabs>
<TabPanel visible={value === 0}>全部内容</TabPanel>
<TabPanel visible={value === 1}>热销内容</TabPanel>
<TabPanel visible={value === 2}>上衣内容</TabPanel>
<TabPanel visible={value === 3}>连衣裙内容</TabPanel>
```
### 点击事件监听

```html
<Tabs value={value} onChange={handleChange}>
  <Tab value={0}>全部</Tab>
  <Tab value={1}>热销</Tab>
  <Tab value={2}>上衣</Tab>
  <Tab value={3}>
    连衣裙 <Icon icon={<IconHome />} sx={{ marginLeft: 1 }} />
  </Tab>
</Tabs>
<TabPanel visible={value === 0}>全部内容</TabPanel>
<TabPanel visible={value === 1}>热销内容</TabPanel>
<TabPanel visible={value === 2}>上衣内容</TabPanel>
<TabPanel visible={value === 3}>连衣裙内容</TabPanel>
```


## API

### TabComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|selected| 是否选中|_boolean_|否|
|disabled| 是否禁用|_boolean_|否|
|value| 默认值|_number\|string_|否|
|scrollspy|是否开启滚动|_boolean_|否|
|equal|布局是否为等分模式|_boolean_|否|
|ellipsis|文字超出是否显示省略号|_boolean_|否|

### TabAction


|参数|说明|类型|必须|
|--|--|--|--|
|onChange| 值改变触发|_EventHandler_|否|

### TabClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
