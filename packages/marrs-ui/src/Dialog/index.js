import { helperFunctions, renderToContainer } from '../utils';
import OriginDialog from './Dialog';

const { noop } = helperFunctions;

function show({ content, ...options }) {
  renderToContainer({ ...options, children: content }, null, OriginDialog);
}

function hide(options = {}) {
  show({ ...options, visible: false });
}

function mergeOptions(external = {}, internal = {}) {
  const base = {
    onConfirm: noop,
    onCancel: noop,
    onClose: noop
  };
  return { ...base, ...external, ...internal };
}

const Dialog = OriginDialog;

Dialog.alert = function (options) {
  const { onConfirm, onClose, ...others } = mergeOptions(
    {
      showCancelButton: false
    },
    options
  );

  const handleConfirm = () => {
    hide(others);
    onConfirm();
    onClose();
  };

  const handleClose = () => {
    hide(others);
    onClose();
  };

  show({
    ...others,
    visible: true,

    onConfirm: handleConfirm,
    onClose: handleClose
  });
};

Dialog.confirm = function (options) {
  const { onConfirm, onCancel, onClose, ...others } = mergeOptions(
    {
      showCancelButton: true
    },
    options
  );

  const handleConfirm = () => {
    hide(others);
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    hide(others);
    onCancel();
    onClose();
  };

  const handleClose = () => {
    hide(others);
    onClose();
  };

  show({
    ...others,
    visible: true,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
    onClose: handleClose
  });
};

export default Dialog;
