import clsx from 'clsx';
import React, { forwardRef, useContext } from 'react';
import Can from '../Can';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import Typeface from '../Typeface';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import GoodsCardContext from './GoodsCardContext';

export const ComponentName = getComponentName('GoodsCardDescriptionTitle');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const GoodsCardDescriptionTitleRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(() => {
  //书写样式
});

const GoodsCardDescriptionTitle = forwardRef((inProps, ref) => {
  const parentContext = useContext(GoodsCardContext);

  const { ...inheritProps } = parentContext;
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {
      title: inheritProps.title,
      subTitle: inheritProps.subTitle
    }
  });
  const { className, children, title, subTitle, ...other } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsCardDescriptionTitleRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children || (
        <div>
          <Typeface
            sx={{
              fontSize: (theme) => theme.sizing(14),
              lineHeight: (theme) => theme.sizing(21)
            }}
          >
            {title}
          </Typeface>
          <Typeface
            sx={{
              fontSize: (theme) => theme.sizing(12),
              marginTop: (theme) => theme.sizing(2),
              color: (theme) => theme.palette.neutral.N7
            }}
          >
            {subTitle}
          </Typeface>
        </div>
      )}
    </GoodsCardDescriptionTitleRoot>
  );
});

GoodsCardDescriptionTitle.name = ComponentName;
export default GoodsCardDescriptionTitle;
