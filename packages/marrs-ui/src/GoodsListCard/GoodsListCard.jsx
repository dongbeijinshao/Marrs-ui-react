import clsx from 'clsx';
import { Children, forwardRef, useCallback, useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
// import { alpha } from '../dependencies/system';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import { ComponentName as NameOfGoodsListCardColumn } from './GoodsListCardColumn';
import GoodsListCardContext from './GoodsListCardContext';
import GoodsListCardDescription, {
  ComponentName as NameOfGoodsListCardDescription
} from './GoodsListCardDescription';
import GoodsListCardImage, {
  ComponentName as NameOfGoodsListCardImage
} from './GoodsListCardImage';

const ComponentName = getComponentName('GoodsListCard');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'imageContainer',
      'image',
      'text',
      'wrapper',
      'previewRoot',
      'uploader'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({})
})(({ theme }) => {
  return {
    display: 'flex',
    background: theme.palette.background.paper,
    padding: theme.spacing(10, 14),
    fontSize: theme.sizing(theme.typography.fontSize)
  };
});

const GoodsListCardSelect = styled(Checkbox, {
  name: ComponentName,
  slot: 'select'
})(({ theme }) => {
  return {
    flexShrink: 0,
    marginRight: theme.sizing(12)
  };
});

const GoodsListCard = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    className,
    children,
    tags = [],
    image = '',
    title = '',
    subTitle = '',
    price = 0,
    originPrice = 0,
    data = {},
    selected,
    onAddToCart = noop,
    onChange = noop,
    selectable = false,
    ratio = 1,
    coverInfo,
    disabled,
    ...other
  } = props;

  const context = {
    price,
    originPrice,
    image,
    data,
    tags,
    title,
    subTitle,
    onAddToCart,
    ratio,
    coverInfo,
    disabled
  };

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  const [goodsListCardImage, setGoodsListCardImage] = useState(undefined);
  const [goodsListCardRight, setGoodsListCardRight] = useState(undefined);
  const [restColumns, setRestColumns] = useState(undefined);

  useEffect(() => {
    const result = Children.map(children, (child) => {
      if (child.type.name === NameOfGoodsListCardImage) {
        setGoodsListCardImage(child);
      } else if (child.type.name === NameOfGoodsListCardDescription) {
        setGoodsListCardRight(child);
      } else if (child.type.name === NameOfGoodsListCardColumn) {
        return child;
      }
    });

    setRestColumns(result);
  }, [children]);

  const handleChange = useCallback(
    (selected) => {
      onChange(selected, data);
    },
    [onChange, data]
  );
  return (
    <GoodsListCardRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <GoodsListCardContext.Provider value={context}>
        {selectable ? (
          <GoodsListCardSelect
            disabled={disabled}
            checked={selected}
            onChange={handleChange}
          />
        ) : undefined}
        {goodsListCardImage || <GoodsListCardImage />}
        {goodsListCardRight || <GoodsListCardDescription />}
        {restColumns}
      </GoodsListCardContext.Provider>
    </GoodsListCardRoot>
  );
});

export default GoodsListCard;
