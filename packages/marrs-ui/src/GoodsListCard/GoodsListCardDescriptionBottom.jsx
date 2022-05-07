import { IconCart } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import { Fragment, forwardRef, useCallback, useContext } from 'react';
import Can from '../Can';
import Icon from '../Icon';
import Typeface from '../Typeface';

import Price from '../Price';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import GoodsListCardContext from './GoodsListCardContext';

export const ComponentName = getComponentName('GoodsListCardDescriptionBottom');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardDescriptionBottomRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(({ theme }) => {
  return {
    marginTop: theme.sizing(8),
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  };
});

const GoodsListCardDescriptionBottom = forwardRef((inProps, ref) => {
  const parentContext = useContext(GoodsListCardContext);

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
    onAddToCart,
    price,
    originPrice,
    children,
    ...other
  } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  const handleClickIcon = useCallback(() => {
    onAddToCart(data);
  }, [data, onAddToCart]);

  if (!children && !price) {
    // 如果没有有 children ，则是用户自定义的  且 如果没传 price 则不显示
    return null;
  }
  return (
    <GoodsListCardDescriptionBottomRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children || (
        <Fragment>
          <Typeface sx={{ padding: 0 }}>
            <Price type="main" value={price} />
            {!!originPrice && (
              <Price
                type="delete"
                value={originPrice}
                sx={{ marginLeft: (theme) => theme.sizing(2) }}
              />
            )}
          </Typeface>
          <Icon
            icon={<IconCart />}
            onClick={handleClickIcon}
            sx={{
              fontSize: (theme) => theme.sizing(18),
              color: (theme) => theme.palette.getColor('primary').color()
            }}
          />
        </Fragment>
      )}
    </GoodsListCardDescriptionBottomRoot>
  );
});

GoodsListCardDescriptionBottom.displayName = ComponentName;
GoodsListCardDescriptionBottom.name = ComponentName;
export default GoodsListCardDescriptionBottom;
