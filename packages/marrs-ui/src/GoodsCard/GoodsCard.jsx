import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { GoodsCardDescription, GoodsCardImage } from '.';
import { styled } from '../styles';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import GoodsCardContext from './GoodsCardContext';
import { ComponentName as NameOfGoodsCardDescription } from './GoodsCardDescription';
import { ComponentName as NameOfGoodsCardImage } from './GoodsCardImage';

const ComponentName = getComponentName('GoodsCard');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const GoodsCardRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({ include: ['classes'] })
})(({ theme }) => {
  return {
    boxShadow: 'none',
    width: `calc(50vw - ${theme.sizing(18)})`,
    fontSize: theme.sizing(14),
    lineHeight: theme.sizing(16),
    borderRadius: theme.sizing(8),
    background: theme.palette.background.paper,
    overflow: 'hidden'
  };
});

const GoodsCard = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    children,
    image,
    ratio = 1,
    tags,
    title,
    subTitle,
    price = 0,
    originPrice = 0,
    data,
    onAddToCart = noop,
    ...other
  } = props;

  const context = {
    image,
    ratio,
    tags,
    title,
    subTitle,
    price,
    originPrice,
    data,
    onAddToCart
  };

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  const [GoodsCardImageData, setGoodsCardImageData] = useState(undefined);
  const [GoodsCardDescriptionData, setGoodsCardDescriptionData] =
    useState(undefined);

  useEffect(() => {
    React.Children.map(children, (child) => {
      if (child.type.name === NameOfGoodsCardImage) {
        setGoodsCardImageData(child);
      } else if (child.type.name === NameOfGoodsCardDescription) {
        setGoodsCardDescriptionData(child);
      }
    });
  }, [children]);

  return (
    <GoodsCardRoot
      component="div"
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <GoodsCardContext.Provider value={context}>
        {GoodsCardImageData || <GoodsCardImage />}
        {GoodsCardDescriptionData || <GoodsCardDescription />}
      </GoodsCardContext.Provider>
    </GoodsCardRoot>
  );
});
export default GoodsCard;
