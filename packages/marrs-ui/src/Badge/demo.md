# Badge 徽标

### 介绍

在右上角展示徽标数字或小红点。


### 引入

```js
import { Badge, Icon } from '@wemo-ui/marrs';
import { IconDelete } from '@wemo-ui/marrs-icons';
```

## 代码演示

### react 部分
```jsx
const [badgeContent, setBadgeContent] = useState(5);

useEffect(() => {
const timer = setTimeout(() => {
  setBadgeContent(badgeContent + 1);
}, 100);
return () => {
  clearTimeout(timer);
};
}, [badgeContent]);
```

### 基础样式

```jsx
<Badge content={5} color="success" className="demo-margin-r-10">
  内容
</Badge>
```

### 展示红点

```html
<Badge dotOnly>
  <Icon volume="large" icon={<IconDelete />} />
</Badge>
```

### 自定义逻辑函数

```jsx
<Badge content={badgeContent} showBadge={(c) => c % 2 === 1}>
  <Icon volume="large" icon={<IconDelete />} />
</Badge>
```

### 格式化内容

```jsx
<Badge
  content={badgeContent}
  formatter={(content) => (content > 99 ? '99+' : content)}
  sx={{ marginLeft: 10 }}
>
  <Icon volume="large" icon={<IconDelete />} />
</Badge>
```
