import { Button, Toast } from '@wemo-ui/marrs';
import { PureComponent } from 'react';

export default class ToastView extends PureComponent {
  handleShow = () => {
    Toast.info({ message: 'this.context' });
  };
  render() {
    return <Button onClick={this.handleShow}>显示</Button>;
  }
}
