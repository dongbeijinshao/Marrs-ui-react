import {
  IconClearDelete,
  IconLoading,
  IconSelected
} from '@wemo-ui/marrs-icons';
import Icon from '../Icon';
import Loading from '../Loading';
import { noop } from '../utils/helperFunctions';
import showToast from './showToast';

export const info = showToast;

export function success(option) {
  return showToast({
    ...option,
    type: 'iconToast',
    children: (
      <Icon
        sx={{
          fontSize: (theme) => theme.sizing(24),
          color: '#FFF',
          marginBottom: '6px'
        }}
        icon={<IconSelected />}
      />
    )
  });
}

export function fail(option) {
  return showToast({
    ...option,
    type: 'iconToast',
    children: (
      <Icon
        sx={{
          fontSize: (theme) => theme.sizing(24),
          color: '#FFF',
          marginBottom: (theme) => theme.sizing(6)
        }}
        icon={<IconClearDelete />}
      />
    )
  });
}

export function loading(option) {
  const { onClose = noop } = option;
  document.body.style.pointerEvents = 'none';
  return showToast({
    ...option,
    onClose: () => {
      document.body.style.pointerEvents = 'auto';
      onClose();
    },
    type: 'iconToast',
    children: (
      <Loading
        sx={{ width: 'auto', height: 'auto' }}
        icon={
          <Icon
            spin
            sx={{
              fontSize: (theme) => theme.sizing(24),
              color: '#FFF',
              marginBottom: (theme) => theme.sizing(6)
            }}
            icon={<IconLoading />}
          />
        }
      />
    )
  });
}

const Toast = {
  info,
  success,
  fail,
  loading
};

export default Toast;
