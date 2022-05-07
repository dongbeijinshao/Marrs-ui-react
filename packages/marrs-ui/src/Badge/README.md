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


## API

### BadgeComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|volume|尺寸规格|_tiny \| small \| medium \| big \| large_|否|
|content| 徽标内容|_string\|number_|否|
|dotOnly| 是否仅展示小红点|_boolean_|否|
|showBadge| 是否展示badge的逻辑函数|_function_|否|
|formatter| 重新格式化内容|_function_|否|

### BadgeClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|content|应用于该名称的样式类|_string_|否|
