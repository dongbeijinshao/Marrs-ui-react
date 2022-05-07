import clsx from 'clsx';
import { Children, forwardRef, useEffect, useState } from 'react';
import { GoodsCardDescriptionBottom, GoodsCardDescriptionTitle } from '.';
import Can from '../Can';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import { ComponentName as NameOfGoodsCardDescriptionBottom } from './GoodsCardDescriptionBottom';
import { ComponentName as NameOfGoodsCardDescriptionSlot } from './GoodsCardDescriptionSlot';
import { ComponentName as NameOfGoodsCardDescriptionTitle } from './GoodsCardDescriptionTitle';

export const ComponentName = getComponentName('GoodsCardDescription');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const GoodsCardDescriptionRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(({ theme }) => {
  return {
    padding: theme.sizing(8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };
});

const GoodsCardDescriptionTop = styled('div', {
  name: ComponentName,
  slot: 'right-top'
})(() => {
  //书写样式
});

const GoodsCardDescription = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const { className, children, ...other } = props;

  const [GoodsCardDescriptionTitleData, setGoodsCardDescriptionTitleData] =
    useState(false);
  const [GoodsCardDescriptionBottomData, setGoodsCardDescriptionBottomData] =
    useState(false);

  const [realChildren, setRealChildren] = useState(undefined);

  useEffect(() => {
    const childs = Children.map(children, (child) => {
      if (child.type.name === NameOfGoodsCardDescriptionBottom) {
        setGoodsCardDescriptionBottomData(true);
        return child;
      } else if (child.type.name === NameOfGoodsCardDescriptionTitle) {
        setGoodsCardDescriptionTitleData(true);
        return child;
      } else if (child.type.name === NameOfGoodsCardDescriptionSlot) {
        return child;
      }
    });
    setRealChildren(childs);
  }, [children]);

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsCardDescriptionRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <GoodsCardDescriptionTop>
        {GoodsCardDescriptionTitleData || <GoodsCardDescriptionTitle />}
        {realChildren}
        {GoodsCardDescriptionBottomData || <GoodsCardDescriptionBottom />}
      </GoodsCardDescriptionTop>
    </GoodsCardDescriptionRoot>
  );
});

GoodsCardDescription.name = ComponentName;
export default GoodsCardDescription;
