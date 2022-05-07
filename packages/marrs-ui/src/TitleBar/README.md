# TitleBar 标题栏



### 介绍

全局通用

### 引入

```js
import { TitleBar, Icon } from '@wemo-ui/marrs';
import { IconCart } from '@wemo-ui/marrs-icons';
```

## 代码演示

```javascript
import React, { useCallback } from 'react';
import { TitleBar, Icon, Tag, Text, Typeface, Checkbox } from '@wemo-ui/marrs';
import { IconCart } from '@wemo-ui/marrs-icons';
import Demo from './Demo';

const TitleBarView = () => {
  // 模拟click事件
  const handleClick = useCallback(() => {
    console.log('模拟click事件');
  }, []);

  // 模拟change事件
  const handleChange = useCallback((e) => {
    console.log('模拟change事件', e);
  }, []);

  return (
    <div>
      <Demo title="large" padding>
        <TitleBar title="标题" showStartIcon={false} />
      </Demo>
      <Demo title="默认图标 + 标题" padding>
        <TitleBar title="标题" />
      </Demo>
      <Demo title="自定义图标 + 标题" padding>
        <TitleBar
          title="标题"
          startIcon={<Icon icon={<IconCart />} volume="small" />}
        />
      </Demo>
      <Demo title="图标+标题+文字说明" padding>
        <TitleBar title="标题" desc="文字说明" />
      </Demo>
      <Demo title="图标+标题+文字说明+右箭头" padding>
        <TitleBar
          title="标题"
          desc="文字说明"
          showRightArrow
          rightClick={handleClick}
        />
      </Demo>

      <Demo title="middle" padding>
        <TitleBar
          title="标题"
          desc="文字说明"
          showRightArrow
          volume="middle"
          rightClick={handleClick}
        />
      </Demo>
      <Demo title="small" padding>
        <TitleBar
          title="标题"
          desc="文字说明"
          showRightArrow
          volume="small"
          rightClick={handleClick}
        />
      </Demo>

      {/* slot写法 */}
      <Demo title="营销活动" padding>
        <TitleBar
          desc="去凑单"
          showRightArrow
          rightClick={handleClick}
          volume="small"
        >
          <Checkbox onChange={handleChange} />
          <Tag face="plain" sx={{ margin: '0 4px' }}>
            跨店满减
          </Tag>
          <Typeface
            sx={{
              fontSize: 12
            }}
          >
            满300元减<Text color="red">200</Text>元
          </Typeface>
        </TitleBar>
      </Demo>
    </div>
  );
};

export default TitleBarView;


```