# 工具集
# @wemo-ui/marrs/styles

### 
##### marrs组件库目前已开发30+的组件，使用这些组件可快速的搭建您的应用。
##### 但是当您想自定义一些更贴合自己业务的组件时， styles中的工具可以帮助您达到这样的目的。



### 自定义组件样式

#### 1.styled
使用styled重建Marrs的组件并继承原组件功能，或者基于Html标签创建一个新的组件，在创建的新组件中可以使用theme的主题配置和组件的props。
<!-- 
@params

1.需要包装的组件或标签

2.styles样式对象或样式对象的函数,当传入的是函数时，在函数中可以使用theme主题和组件的props。

@return

一个新创建的组件 -->
##### @params
|参数|说明|必须|
|--|--|--|
|组件或标签名称|需要包装的组件或标签,若是组件库组件直接传入该组件对象，若是原生标签传出标签名称字符串，新创建的组件会继承传入组件的属性。|是|
|样式对象或样式对象的函数|样式对象或样式对象的函数,当传入的是函数时，在函数中可以使用theme主题和组件的props。|否|

##### @return
|说明|
|--|
|一个新创建的组件 |

##### 示例
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@wemo-ui/marrs';

function App() {
  const MyButton = styled(Button)(({ theme,color }) => ({
    background: theme.palette.background.default,
    color: color
  }));
  const MyDiv = styled('div')({
    color: 'red'
  });
  return <MyDiv>我的div<MyButton  color="#efc019">我的按钮</MyButton></MyDiv> 
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
#### 2.makeStyles
用来生成创建样式组件，并可以使用主题中的配置。

<!-- @params

styles样式对象或样式对象的函数,在该函数中第一个参数为主题对象。

@return

返回一个钩子函数 -->

##### @params
|参数|说明|必须|
|--|--|--|
|样式对象或样式对象的函数|样式对象或样式对象的函数,当传入的是函数时，在函数中可以使用theme主题和组件的props。|是|

##### @return
|说明|
|--|
|返回一个钩子函数，调用该函数时可传入props供样式对象中使用，在组件中使用classes属性绑定返回的样式。|

##### 示例
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
在调用useStyles的时候传入参数，起到控制样式的作用
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
#### 3.sx
使用sx来调整通过styled函数创建的组件的样式。

与style的区别是在sx中可以使用主题中的配置。
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

### 创建并使用主题
##### 1.createTheme
根据传入的主题配置项生成新的主题样式对象。

<!-- @params

1.主题配置对象

2.该参数会与返回的主题对象进行merge合并。

@return

一个主题对象 -->


##### @params
|参数|说明|必须|
|--|--|--|
|主题配置对象|可按照主题定制文档中的配置，配置您自己的主题，该主题配置会与组件库的默认主题进行合并，生成新的主题配置|是|

##### @return
|说明|
|--|
|返回一个主题对象|

##### 示例


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

##### 2.useTheme
获取主题配置对象

##### @return
|说明|
|--|
|返回主题配置对象。|
##### 示例
```jsx
import { useTheme } from '@wemo-ui/marrs/styles';

export default function MyComponent() {
  const theme = useTheme();
  return <div>{`primary ${theme.palette.primary.main}`}</div>;
}
```

<!-- #### 目前文档尚待补全，后续将持续完善。 -->

##### 3.useThemeProps
用来合并组件的props和主题配置中的defaultProps，该方法常用于组件封装时。
 
##### @params
|参数|说明|必须|
|--|--|--|
|props对象|在该对象中有以下参数：</br>1.props：组件的props对象。</br>2. name:组件的名称。</br>3.include:用于筛选GlobalProps中的属性（defaultGlobalProps = {volume: 'medium',color: 'primary'}）。</br>4.customProps，组件自定义的props|是|



##### @return
|说明|
|--|
|返回一个主题对象|

##### 示例

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

### 样式工具函数
以下工具函数都可以在styled，makeStyles，sx中通过theme进行调用，来辅助您开发组件的样式。

##### 在工具函数中传入的值无需写单位，组件库会根据当前的主题配置的sizingMode进行转换。
##### 1.createSizing
用来调整大小 

##### 示例
```jsx

makeStyles((theme) => ({
    root: {
      lineHeight: theme.sizing(15),
      fontSize: theme.sizing(13)
    }
  };
));
```

##### 2.createSpacing
用来调整间距大小（适用于padding 或者 margin）

##### @params
|参数|说明|必须|
|--|--|--|
|间距值|间距值|是|
 
##### 示例
```jsx

makeStyles((theme) => ({
    root: {
      padding: theme.spacing(8, 4, 0, 4),
      margin:theme.spacing(8, 4),
    }
  };
));
```
##### 3.createBorder
用来创建边框样式（主要用于解决1px边框问题）
##### @params
|参数|说明|必须|
|--|--|--|
|边框样式对象|用来调整边框样式，有以下属性可进行配置：</br> 1. width 边框宽度</br>2.style 边框样式</br>3.color 边框颜色</br>4.opcity 边框透明度</br>5.radius 边框圆角 |是|
 
##### 示例
```jsx

makeStyles((theme) => ({
    root: {
      height: theme.sizing(15),
      width: theme.sizing(13),
      ...theme.createBorder({
          color: theme.palette.action.disabled,
          opcity: 0.5,
          width:1,
          style:'solid',
          radius:10
      })
    }
  };
));
```

##### 4.createRadius
用来创建圆角样式 
 
##### @params
|参数|说明|必须|
|--|--|--|
|圆角值|圆角值|是|

##### 示例
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


##### 5.createTransitions
用来创建过渡动画

##### @params
|参数|说明|必须|
|--|--|--|
|名称|CSS属性的name|是|
|过渡动画配置对象|用来调整过渡动画，有以下属性可进行配置：</br>1.duration:transition效果需要指定多少秒或毫秒才能完成</br>2.easing:transition效果的转速曲线</br>3.delay:transition效果延迟多久执行|是|
##### 示例
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
```

#### 6.createAnimation
用来创建动画样式

##### @params
|参数|说明|必须|
|--|--|--|
|动画的名称|动画的名称（目前只有spin动画）持续迭代中。。。 |是|
|动画属性| 用来调整动画效果，有以下四个属性可以调整:</br>iterationCount：动画的播放次数</br> timingFunction：动画将如何完成一个周期</br> fillMode：当动画不播放时要应用到元素的样式</br> duration：动画要多少秒或毫秒完成 |否|
##### 示例
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
