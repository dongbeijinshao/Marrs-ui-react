# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

```js
import { Stepper, Toast } from '@wemo-ui/marrs';
```

## 代码演示

### 基本样式

```html
 <Stepper defaultValue={2} />
```
### 数字多样式

```html
<Stepper decimal="0" defaultValue={999} />
<Stepper decimal="1" defaultValue={2.2} sx={{ marginTop: 4 }} />
```
### 步长设置

```html
<Stepper step="2" defaultValue={15} />
```
### 限制范围

```html
<Stepper max={20} min={4} defaultValue={4} />
```
### 异步变更

```html
<Stepper onChange={handleChange} />
```
