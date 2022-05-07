# Empty 空状态

### 介绍

空状态时的占位提示。

### 引入

```js
import { Button, Empty, Image } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Empty
  description="空态页文案"
  contentControl={<Image src={demoImg1} />}
/>
```
### 操作按钮

```html
 <Empty
  description="空态页文案"
  contentControl={<Image src={demoImg2} />}
  actionControl={
    <Button face="plain" color="#C4C4C4">
      立即前往
    </Button>
  }
/>
```

### 补充文案

```html
<Empty
  text="补充说明文案请尽量简短"
  description="空态页文案"
  contentControl={<Image src={demoImg3} />}
  actionControl={
    <Button face="plain" color="#C4C4C4">
      立即前往
    </Button>
  }
/>
```
