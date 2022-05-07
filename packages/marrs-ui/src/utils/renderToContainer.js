import ReactDOM from 'react-dom';
import ThemeProvider, { systemTheme } from '../styles/ThemeProvider';
const DEFAULT_MARRS_ROOT = '__MarrsDialogCommandRoot__';

function getContainer(container) {
  return document.getElementById(container || DEFAULT_MARRS_ROOT);
}

function createContainer(container) {
  const el = document.createElement('div');
  el.id = container || DEFAULT_MARRS_ROOT;
  document.body.appendChild(el);
  return el;
}

export default function render(props, container, Comp) {
  const root = getContainer(container) || createContainer(container);
  if (systemTheme) {
    ReactDOM.render(
      <ThemeProvider theme={systemTheme}>
        <Comp {...props} />
      </ThemeProvider>,
      root
    );
  } else {
    ReactDOM.render(<Comp {...props} />, root);
  }
}
