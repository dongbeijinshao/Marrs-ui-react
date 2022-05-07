# 新手必读

<!-- ### 温馨提示 -->
<!-- 当前1.0版本，有任何问题请在企业微信群中提出，如未得到及时反馈请单独联系-`柴必青`。 -->

### 渐进式使用

- 普通使用
  1. react
  2. html/css/jsx
- 高级使用
  1. sx 工具
  2. classes-slot
  3. theme 修改: 全局 props、组件配置、调色盘等，生成自己的主题
- 进阶使用
  1. theme 在组件外代码的使用
  2. jss
  3. styled component
  4. 使用 makeStyles 生成样式或结合 classes-slot 修改组件库默认样式

#### 对于 styled component 概念或者 jss 有不理解或者困惑的请及时联系提出。

## 自定义样式

### 方式一: classes-slot，一般用于批量套用既有样式

根据组件暴露出来的classes-slot, 可以插入自己的className

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';

function App() {
  return <Button classes={{ root: 'my-className', startIcon: 'my-className-icon'}}>按钮</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

若不想写个css文件，更推荐使用jss方式生成样式，该方式可以使用主题参数

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';
import { makeStyles } from '@wemo-ui/marrs/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.getColor('info').lighten().color(),
      height: '500px'
    },
    startIcon: {
      fontSize: '20px'
    }

  };
});

function App() {
  const classes = useStyles();
  return <Button classes={{ root: classes.root, startIcon: classes.startIcon }}>按钮</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
### 方式二: sx 属性，一般用于微调

sx属性专门用于通过styled函数创建的 styled component，与直接写style的区别是sx可以使用主题

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';

function App() {
  return <Button sx={{ color: 'blue', padding: (theme) => theme.spacing(40) }}>
            超大自定义按钮
          </Button>
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### 方式三：修改 theme.components，新增样式实体，一般用于对组件库的改造

修改theme.components下某个组件的variants属性

```jsx
{
  variants: [{
    props: { face: 'dashed', color: 'primary' },
    style: {
      color: 'red',
      border: '1px dashed red'
    }
  }]
}
```
代码中可以直接使用扩展的属性样式

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';

function App() {
  return <Button face="dashed" color="primary">本来face属性没有dashed选项</Button>
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
### 方式四：使用 styled api 重建自定义组件，并继承原组件功能

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';

function App() {
  const MyButton = styled(Button)(({ theme }) => {
    background: theme.spacing(10)
  });
  return <MyButton>我的按钮</MyButton>
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
<!-- 
### 工具集

#### @wemo-ui/marrs/styles

##### 可以选择用下面几种方式定义自己的样式组件。
#### 1.makeStyles
用来生成创建样式，并可以使用主题中的配置。

@params

styles样式对象或样式对象的函数,在该函数中第一个参数为主题对象。

@return

一个钩子函数

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';
import { makeStyles } from '@wemo-ui/marrs/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.getColor('info').lighten().color(),
      height: '500px'
    },
    startIcon: {
      fontSize: '20px'
    }

  };
});

function App() {
  const classes = useStyles();
  return <Button classes={{ root: classes.root, startIcon: classes.startIcon }}>按钮</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
在调用useStyles的时候可以传入参数，起到控制样式的作用
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';
import { makeStyles } from '@wemo-ui/marrs/styles';

const useStyles = makeStyles((theme) => {
  return {
    root:(props)=>({color:props.color})
  };
});

function App() {
  const props = {
    color:"red"
  }
  const classes = useStyles(props);
  return <Button classes={{ root: classes.root}}>按钮</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
#### 2.styled
使用styled重建Marrs的组件，并继承原组件功能。或者创建一个自己的组件。

@params

1.需要包装的组件

2.styles样式对象或样式对象的函数,在该函数中第一个参数为主题对象。

@return

一个新创建的组件

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';

function App() {
  const MyButton = styled(Button)(({ theme }) => ({
    background: theme.palette.background.default,
    color: 'yellow'
  }));
  const MyDiv = styled('div')({
    color: 'red'
  });
  return <MyDiv>
            我的div
            <MyButton>我的按钮</MyButton>
         </MyDiv> 
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

##### createTheme
用来创建你的主题

@params

1.主题配置对象

2.该参数会与返回的主题对象进行merge合并。

@return

一个主题对象
```jsx
import { createTheme, ThemeProvider } from "@wemo-ui/marrs/styles";
const myTheme = createTheme({
  globalProps: {
    color: "info",
  },
  palette: {
     primary: {
        main: 'yellow',
    },
  },
  sizingMode: "vw",
  components: {
    MarrsTag: {
      defaultProps: {
        radius: 20,
      },
    },
    MarrsButton: {
      defaultProps: {
        radius: 20,
      },
    },
  }
});
```

##### useTheme
获取当前项目中的所有主题配置
@return

主题对象
```jsx
import { useTheme } from '@mui/material/styles';

export default function MyComponent() {
  const theme = useTheme();
  return <div>{`primary ${theme.palette.primary.main}`}</div>;
}
```


##### useThemeProps
用来合并组件的prop和主题配置中的defaultProps

@params

1.组件的props对象

2.组件的名称

3.include，用于筛选GlobalProps中的属性（defaultGlobalProps = {volume: 'medium',color: 'primary'}）

4.customProps，组件自定义的props
@return

一个新的props对象
```jsx
 const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    include: [ 'color'],
    customProps: {
       data:'data'
    }
  }); 

```

##### 样式工具函数
以下工具函数都可以在styled，makeStyles，sx中通过theme进行调用，来辅助开发者开发组件的样式。

在工具函数中传入的值无需写单位，组件库会根据当前的主题配置的sizingMode进行转换。
##### createAnimation
用来创建动画样式
@params

1.要使用动画的名称（目前只有spin动画）

2.animationProps动画属性，用来调整动画效果

  iterationCount(动画的播放次数),
  timingFunction(动画将如何完成一个周期),
  fillMode(当动画不播放时要应用到元素的样式),
  duration(动画要多少秒或毫秒完成)
```jsx

makeStyles((theme) => ({
    root: {
      ...theme.animation.create('spin')
    },
    content: {
      ...theme.animation.create('spin', {
        timingFunction: 'linear',
        duration: '5s',
        iterationCount: 'infinite',
        fillMode: 'both'
      })
    }
  };
));
```

##### createRadius
用来创建圆角样式，传入的圆角值会按照主题配置的，

@params

四个角的圆角值。

```jsx

makeStyles((theme) => ({
    root: {
      borderRadius: theme.radius.create(10)
    },
    content: {
      borderRadius: theme.radius.create(10,10,20,20)
    }
  };
));
```

##### createBorder
用来创建边框样式（主要用于解决1px边框问题）

##### createSizing
用来调整大小（可根据主题中配置的sizingModel进行单位换算）

@params

大小值。

```jsx

makeStyles((theme) => ({
    root: {
      lineHeight: theme.sizing(15),
      fontSize: theme.sizing(13)
    }
  };
));
```
##### createSpacing
用来调整间距大小（适用于padding 或者 margin）

@params间距值。

```jsx

makeStyles((theme) => ({
    root: {
      padding: theme.spacing(8, 4, 0, 4),
      margin:theme.spacing(8, 4),
    }
  };
));
```
##### createTransitions
用来创建过渡动画

@params

1.指定CSS属性的name

2.TransitionProps属性，用来调整过效果
 
  duration（transition效果需要指定多少秒或毫秒才能完成）

  easing（transition效果的转速曲线）

  delay（transition效果延迟多久执行）
  
```jsx
makeStyles((theme) => ({
    root: {
      opacity:0,
      transition: theme.transitions.create(['opacity'], {
        duration: 200,
        easing:'cubic-bezier(0.0, 0, 0.2, 1)',
        delay:1
      }),
    }
  };
));
``` -->

