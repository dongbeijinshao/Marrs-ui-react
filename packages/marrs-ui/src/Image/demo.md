# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。


### 引入

```js
import { Image, FlexBox, Icon, Can } from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```html
<Image src={demoImg} size={{ width: 90, height: 90 }} />
```

### 填充模式

```html
<FlexBox container>
  <FlexBox className="demo-margin-r-10">
    <Image
      src={demoImg}
      size={{ width: 100, height: 100 }}
      fit="contain"
    />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      contain
    </Can>
  </FlexBox>
  <FlexBox className="demo-margin-r-10">
    <Image
      src={demoImg}
      size={{ width: 100, height: 100 }}
      fit="cover"
    />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      cover
    </Can>
  </FlexBox>
  <FlexBox className="demo-margin-r-10">
    <Image
      src={demoImg}
      size={{ width: 100, height: 100 }}
      fit="fill"
    />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      fill
    </Can>
  </FlexBox>
  <FlexBox className="demo-margin-r-10">
    <Image
      src={demoImg}
      size={{ width: 100, height: 100 }}
      fit="none"
    />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      none
    </Can>
  </FlexBox>
  <FlexBox className="demo-margin-r-10">
    <Image
      src={demoImg}
      size={{ width: 100, height: 100 }}
      fit="scale-down"
    />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      scale-down
    </Can>
  </FlexBox>
</FlexBox>
```

### 图片圆角

```html
<FlexBox container>
  <FlexBox className="demo-margin-r-10">
    <Image
      src={demoImg}
      size={{ width: 100, height: 100 }}
      sx={{ borderRadius: 4 }}
    />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      圆角矩形
    </Can>
  </FlexBox>

  <FlexBox className="demo-margin-r-10">
    <Image
      src={demoImg}
      size={{ width: 100, height: 100 }}
      sx={{ borderRadius: '100%' }}
    />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      圆形
    </Can>
  </FlexBox>
</FlexBox>
```

### 图片加载

```html
<FlexBox container>
  <FlexBox className="demo-margin-r-10">
    <Image
      src="./src"
      fallback={
        <Icon
          sx={{ fontSize: 36, color: '#E0E0E0' }}
          icon={<IconBill />}
        />
      }
      size={{ width: 100, height: 100 }}
    />
    <Can
      sx={{
        textAlign: 'center',
        color: '#757575',
        padding: '23px 0'
      }}
    >
      加载icon
    </Can>
  </FlexBox>
  <FlexBox className="demo-margin-r-10">
    <Image src="./src" size={{ width: 100, height: 100 }} />
    <Can
      sx={{ textAlign: 'center', color: '#757575', padding: '23px 0' }}
    >
      加载动画
    </Can>
  </FlexBox>
</FlexBox>
```

### 提示信息

```html
<Image src="/" size={{ width: 100, height: 100 }} />
```
