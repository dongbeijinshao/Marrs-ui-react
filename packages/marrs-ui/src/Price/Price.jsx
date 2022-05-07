import clsx from 'clsx';
import { forwardRef, useEffect, useState } from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import Text from '../Text';
import Typeface from '../Typeface';
import { generateShouldForwardProp } from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Price');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'icon',
      'input',
      'text',
      'wrapper',
      'previewRoot',
      'uploader'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const PriceRoot = styled('span', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({ include: ['classes'] })
})(({ theme }) => {
  return {
    flex: 'none',
    fontSize: theme.sizing(theme.typography.fontSize)
  };
});

const getCustomPrice = (price, { type, currencySymbol }) => {
  const fixedPrice = String(Number(price).toFixed(2));
  switch (type) {
    case 'main':
      const [intpart, floatpart] = fixedPrice.split('.');
      return (
        <Typeface component="span" color="primary" sx={{ padding: 0 }}>
          <Text
            color="primary"
            sx={{ fontSize: (theme) => theme.sizing(12), fontWeight: 'Medium' }}
          >
            {currencySymbol}
          </Text>
          <Text
            color="primary"
            sx={{ fontSize: (theme) => theme.sizing(19), fontWeight: 'Bold' }}
          >
            {intpart}
          </Text>
          .
          <Text
            color="primary"
            sx={{ fontSize: (theme) => theme.sizing(12), fontWeight: 'Bold' }}
          >
            {floatpart}
          </Text>
        </Typeface>
      );
    case 'delete':
      return (
        <Text
          color="secondary"
          sx={{
            textDecoration: 'line-through',
            fontSize: (theme) => theme.sizing(12)
          }}
        >
          {currencySymbol + '' + fixedPrice}
        </Text>
      );
    case 'normal':
    default:
      return (
        <Text color="primary" sx={{ fontSize: (theme) => theme.sizing(12) }}>
          {currencySymbol + '' + fixedPrice}
        </Text>
      );
  }
};

const Price = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    fontSize = 24,
    currencySymbol = '￥',
    hideCurrencySymbol = false,
    value = 0,
    type = 'main', // main、delete、normal
    ...other
  } = props;

  const styleProps = {
    fontSize
  };
  const classes = useUtilityClasses(styleProps);

  const [fixedPrice, setFixedPrice] = useState(0);

  useEffect(() => {
    setFixedPrice(
      getCustomPrice(value, {
        type,
        currencySymbol: hideCurrencySymbol ? '' : currencySymbol
      })
    );
  }, [value, currencySymbol, hideCurrencySymbol, type]);

  return (
    <PriceRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {fixedPrice}
    </PriceRoot>
  );
});

export default Price;
