import { renderToContainer } from '../utils';
import OriginToast from './Toast';

function render(props) {
  renderToContainer(props, null, OriginToast);
}

export default function showToast({ message, onOpened, onClose, ...option }) {
  const props = { ...option, message, destroy, visible: true };

  function mount() {
    render(props);
    onOpened && onOpened();
  }

  function update(message) {
    props.message = message;
    render(props);
  }

  function destroy() {
    props.visible = false;
    render(props);
    onClose && onClose();
  }

  mount();

  return {
    destroy,
    update
  };
}
