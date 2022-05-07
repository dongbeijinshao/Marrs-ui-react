import { IconCart } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import React, { forwardRef, useCallback, useContext } from 'react';
import Can from '../Can';
import Icon from '../Icon';
import Price from '../Price';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import Typeface from '../Typeface';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import GoodsCardContext from './GoodsCardContext';

export const ComponentName = getComponentName('GoodsCardDescriptionBottom');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsCardDescriptionBottomRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(({ theme }) => {
  return {
    marginTop: theme.sizing(12),
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  };
});

const GoodsCardDescriptionBottom = forwardRef((inProps, ref) => {
  const parentContext = useContext(GoodsCardContext);

  const { ...inheritProps } = parentContext;
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {
      onAddToCart: inheritProps.onAddToCart,
      data: inheritProps.data,
      price: inheritProps.price,
      originPrice: inheritProps.originPrice
    }
  });

  const {
    className,
    data,
    price,
    originPrice,
    onAddToCart,
    children,
    ...other
  } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  const handleClickIcon = useCallback(() => {
    onAddToCart(data);
  }, [data, onAddToCart]);
  return (
    <GoodsCardDescriptionBottomRoot
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children || (
        <React.Fragment>
          <Typeface sx={{ padding: 0 }}>
            <Price type="main" value={price} />
            <Price
              type="delete"
              value={originPrice}
              sx={{ marginLeft: (theme) => theme.sizing(2) }}
            />
          </Typeface>
          <Icon
            icon={<IconCart />}
            onClick={handleClickIcon}
            sx={{
              fontSize: (theme) => theme.sizing(18),
              color: (theme) => theme.palette.getColor('primary').color()
            }}
          />
        </React.Fragment>
      )}
    </GoodsCardDescriptionBottomRoot>
  );
});

GoodsCardDescriptionBottom.name = ComponentName;
export default GoodsCardDescriptionBottom;
