import clsx from 'clsx';
import { Children, forwardRef, useEffect, useState } from 'react';
import GoodsListCardDescriptionBottom from './GoodsListCardDescriptionBottom';
import GoodsListCardDescriptionTitle from './GoodsListCardDescriptionTitle';
import Can from '../Can';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
// import GoodsListCardContext from './GoodsListCardContext';
import { ComponentName as NameOfGoodsListCardDescriptionBottom } from './GoodsListCardDescriptionBottom';
import { ComponentName as NameOfGoodsListCardDescriptionSlot } from './GoodsListCardDescriptionSlot';
import { ComponentName as NameOfGoodsListCardDescriptionBottomSlot } from './GoodsListCardDescriptionBottomSlot';
import { ComponentName as NameOfGoodsListCardDescriptionTitle } from './GoodsListCardDescriptionTitle';

export const ComponentName = getComponentName('GoodsListCardDescription');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardDescriptionRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => {
  return {
    marginLeft: theme.sizing(12),
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
    // justifyContent: 'space-between'
  };
});

// const GoodsListCardDescriptionTop = styled('div', {
//   name: ComponentName,
//   slot: 'right-top'
// })(({ theme }) => {
//   return {};
// });

const GoodsListCardDescription = forwardRef((inProps, ref) => {
  // const parentContext = useContext(GoodsListCardContext);

  // const { ...inheritProps } = parentContext;

  const props = useThemeProps({
    props: inProps,
    name: ComponentName
    // customProps: {
    //   disabled: inheritProps.disabled
    // }
  });

  const { className, children, ...other } = props;

  const [goodsListCardDescriptionTitle, setGoodsListCardDescriptionTitle] =
    useState(false);
  const [goodsListCardDescriptionBottom, setGoodsListCardDescriptionBottom] =
    useState(false);

  const [realChildren, setRealChildren] = useState(undefined);

  useEffect(() => {
    const childs = Children.map(children, (child) => {
      if (child.type.name === NameOfGoodsListCardDescriptionBottom) {
        setGoodsListCardDescriptionBottom(true);
        return child;
      } else if (child.type.name === NameOfGoodsListCardDescriptionTitle) {
        setGoodsListCardDescriptionTitle(true);
        return child;
      } else if (
        child.type.name === NameOfGoodsListCardDescriptionSlot ||
        child.type.name === NameOfGoodsListCardDescriptionBottomSlot
      ) {
        return child;
      }
    });

    setRealChildren(childs);
  }, [children]);

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsListCardDescriptionRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {/* <GoodsListCardDescriptionTop> */}
      {goodsListCardDescriptionTitle || <GoodsListCardDescriptionTitle />}

      {goodsListCardDescriptionBottom || <GoodsListCardDescriptionBottom />}

      {realChildren}
      {/* </GoodsListCardDescriptionTop> */}
    </GoodsListCardDescriptionRoot>
  );
});

GoodsListCardDescription.displayName = ComponentName;
GoodsListCardDescription.name = ComponentName;
export default GoodsListCardDescription;
