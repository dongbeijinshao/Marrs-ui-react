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
