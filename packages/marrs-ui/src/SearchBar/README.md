# SearchBar 搜索

### 介绍

用于搜索场景的输入框组件。

### 引入

```js
import { SearchBar, Toast, Icon, FlexBox } from '@wemo-ui/marrs';
import {
  IconMenu,
  IconScan,
  IconCategory,
  IconPackDown
} from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<SearchBar placeholder="请输入搜索关键词" />
```

### 居中样式

```html
<SearchBar placeholder="请输入搜索关键词" textAlign="center" />
```

### 监听事件

```html
<SearchBar
  placeholder="请输入搜索关键词"
  onSearch={handleSearch}
  rightActionControl
/>
```
### 搭配其它组件使用

```html
<SearchBar
  placeholder="请输入搜索关键词"
  onSearch={handleSearch}
  leftActionControl={<IconCategory />}
  rightActionControl={<IconMenu />}
/>
<SearchBar
  value=""
  placeholder="请输入搜索关键词"
  onSearch={handleSearch}
  leftActionControl={
    <FlexBox container>
      请选择
      <Icon icon={<IconPackDown />} />
    </FlexBox>
  }
/>
<SearchBar
  value=""
  placeholder="请输入搜索关键词"
  onSearch={handleSearch}
  rightControl={<IconScan />}
/>
```


## API

### SearchBarComponent

  > SearchBar 继承 Field 组件，Field 相关属性，请查看 Field
  

|参数|说明|类型|必须|
|--|--|--|--|
|value| 搜索框的值|_any_|否|
|defaultValue| 搜索框的默认值|_any_|否|
|placeholder| 搜索框的placeholder|_string_|否|
|leftActionControl| 左侧label控件|_ReactNode_|否|
|leftIcon| 左侧搜索控件|_ReactNode_|否|
|radius| 搜索框圆角|_number_|否|
|rightControl| 搜索框内右边控件;包括按钮、徽章、开关、图片、头像等控件。|_ReactNode_|否|
|rightActionControl| 是否在搜索框右侧显示|_ReactNode_|否|
|clearable| 是否启用清除图标，点击清除图标后会清空输入框|_boolean_|否|
|autoFocus| 是否自动获取焦点|_boolean_|否|
|textAlign| 输入框的内容布局|_"left"\|"center"\|"right"_|否|

### SearchBarAction


|参数|说明|类型|必须|
|--|--|--|--|
|onSearch| 输入框按下enter时触发;回调参数当前值|_EventHandler_|否|
|onInput| 输入时触发|_EventHandler_|否|
|onFocus| 聚焦时触发|_EventHandler_|否|
|onBlur| 失焦时触发|_EventHandler_|否|

### SearchBarClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|leftActionControl|应用于该名称的样式类|_string_|否|
|content|应用于该名称的样式类|_string_|否|
|field|应用于该名称的样式类|_string_|否|
|rightActionControl|应用于该名称的样式类|_string_|否|
