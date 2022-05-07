import { Field, Form } from '@wemo-ui/marrs';
import { useTheme } from '@wemo-ui/marrs/styles';
import { noop } from '@wemo-ui/marrs/utils/helperFunctions';
import { useCallback } from 'react';
import ColorSelector from '../ColorSelector';

const colors = [
  {
    label: 'primary',
    path: 'primary.main'
  },
  {
    label: 'secondary',
    path: 'secondary.main'
  },
  {
    label: 'info',
    path: 'info.main'
  },
  {
    label: 'success',
    path: 'success.main'
  },
  {
    label: 'error',
    path: 'error.main'
  },
  {
    label: 'warning',
    path: 'warning.main'
  },
  {
    label: 'text.primary',
    path: 'text.primary'
  },
  {
    label: 'text.secondary',
    path: 'text.secondary'
  },
  {
    label: 'text.disabled',
    path: 'text.disabled'
  },
  {
    label: 'common.white',
    path: 'common.white'
  },
  {
    label: 'common.black',
    path: 'common.black'
  },
  {
    label: 'background.paper',
    path: 'background.paper'
  },
  {
    label: 'background.default',
    path: 'background.default'
  }
];

const getValue = (obj, path) => {
  return path.split('.').reduce((rs, next) => {
    return rs[next];
  }, obj);
};

const Palette = (props) => {
  const { onChange = noop } = props;
  const theme = useTheme();
  const colorValues = colors.reduce((rs, next) => {
    return {
      ...rs,
      [next.path]: getValue(theme.palette, next.path)
    };
  }, {});

  const palette = useCallback(
    (values = {}) => ({
      common: {
        black: values['common.black'],
        white: values['common.white']
      },
      primary: {
        main: values['primary.main'],
        contrastText: '#ffffff'
      },
      secondary: {
        main: values['secondary.main'],
        contrastText: '#212121'
      },
      error: {
        main: values['error.main'],
        contrastText: '#ffffff'
      },
      warning: {
        main: values['warning.main'],
        contrastText: '#212121'
      },
      info: {
        main: values['info.main'],
        contrastText: '#ffffff'
      },
      success: {
        main: values['success.main'],
        contrastText: '#ffffff'
      },
      text: {
        primary: values['text.primary'],
        secondary: values['text.secondary'],
        disabled: values['text.disabled']
      },
      background: {
        paper: values['background.paper'],
        default: values['background.default']
      }
    }),
    []
  );

  const handlePaletteFormChange = (fv) => {
    const partTheme = { palette: palette(fv) };
    onChange(partTheme);
  };
  return (
    <Form
      labelWidth={120}
      onChange={handlePaletteFormChange}
      initialValues={{
        ...colorValues
      }}
    >
      {colors.map((color) => {
        return (
          <Field key={color.path} label={color.label} name={color.path}>
            <ColorSelector />
          </Field>
        );
      })}
    </Form>
  );
};

export default Palette;
