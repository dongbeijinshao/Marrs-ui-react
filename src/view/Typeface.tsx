import { Text, Typeface } from '@wemo-ui/marrs';
import clsx from 'clsx';

const Span = (props) => {
  return <span className={clsx('as', props.className)}>{props.children}</span>;
};

function TypefaceView() {
  return (
    <div>
      <Typeface component="p" color="secondary">
        <Text color="inherit">
          16px，但是浏览器提供了一个改变这个值的选项，所以 rem
        </Text>
        接下来，您需要做的是修改主题，来使用这一个新的字体。 如果想在全局定义
        Raleway 作为一个字体，您可以使用 CssBaseline
        组件（或者你也可以选择你想要的任意其他 CSS 方案)。
      </Typeface>
      <Typeface component="p" face="subtitle1" color="info">
        接下来，您需要做的是修改主题，来使用这一个新的字体。 如果想在全局定义
        Raleway 作为一个字体，您可以使用 CssBaseline
        组件（或者你也可以选择你想要的任意其他 CSS 方案)。
      </Typeface>
      <Typeface component={Span} face="subtitle1">
        Marrs 使用 rem 单元来定义字体的大小。 浏览器 html 元素的默认字体大小为
        <Text>16px，但是浏览器提供了一个改变这个值的选项，所以 rem</Text>
        单元能够让我们适应用户的设置，从而提供更好的无障碍设计的支持。
        其实用户改变字体大小设置的原因多种多样，有不太好的视力，或者选择适应设备的最佳设置，这样在大小和查看距离上会有很大的差异。
      </Typeface>
    </div>
  );
}

export default TypefaceView;
