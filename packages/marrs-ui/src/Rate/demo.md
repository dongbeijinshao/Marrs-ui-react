# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

```js
import { Rate, Can, Toast, Icon } from '@wemo-ui/marrs';
import { IconGoods } from '@wemo-ui/marrs-icons';
```

## 代码演示

### 基础样式

```html
<Can>
  <Rate value={4} />
</Can>
<Can sx={{ marginTop: 1 }}>
  <Rate value={2} />
</Can>
```

### 自定义样式

```html
<Can>
  <Rate value={3} />
</Can>
<Can sx={{ marginTop: 1 }}>
  <Rate
    value={3}
    icon={<Icon icon={<IconGoods />} />}
    emptyIcon={<Icon icon={<IconGoods />} />}
  />
</Can>
```

### 评分数量

```html
 <Can>
  <Rate value={3} num={7} />
</Can>
<Can>
  <Rate value={2.5} />
</Can>
```

### 禁用/只读样式

```html
<Can>
  <Rate value={3} disabled />
</Can>
<Can>
  <Rate value={3} readonly />
</Can>
```

### 监听change事件

```html
<Rate value={4} onChange={handleChange} />
```
