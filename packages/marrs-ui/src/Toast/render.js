import ReactDOM from 'react-dom';
import OriginToast from './Toast';

const MARRS_ROOT = 'MarrsRoot';

function getContainer() {
  return document.getElementById(MARRS_ROOT);
}

function createContainer() {
  const el = document.createElement('div');
  el.id = MARRS_ROOT;
  document.body.appendChild(el);
  return el;
}

export default function render(props) {
  const root = getContainer() || createContainer();
  ReactDOM.render(<OriginToast {...props} />, root);
}
