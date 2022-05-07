import clsx from 'clsx';
import { forwardRef, useContext } from 'react';
import Can from '../Can';
import Typeface from '../Typeface';

import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import GoodsListCardContext from './GoodsListCardContext';

export const ComponentName = getComponentName('GoodsListCardDescriptionTitle');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardDescriptionTitleRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(() => {
  //书写样式
});

const GoodsListCardDescriptionTitle = forwardRef((inProps, ref) => {
  const parentContext = useContext(GoodsListCardContext);

  const { ...inheritProps } = parentContext;
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {
      title: inheritProps.title,
      subTitle: inheritProps.subTitle,
      disabled: inheritProps.disabled
    }
  });
  const { className, children, title, subTitle, disabled, ...other } = props;

  const styleProps = {};
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsListCardDescriptionTitleRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children || (
        <div>
          <Typeface
            sx={(theme) => ({
              fontSize: (theme) => theme.sizing(14),
              lineHeight: (theme) => theme.sizing(21),
              color: disabled && theme.palette.neutral.N6
            })}
          >
            {title}
          </Typeface>
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
              marginTop: (theme) => theme.sizing(1),
              color: (theme) => theme.palette.neutral.N7
            }}
          >
            {subTitle}
          </Typeface>
        </div>
      )}
    </GoodsListCardDescriptionTitleRoot>
  );
});

GoodsListCardDescriptionTitle.name = ComponentName;
export default GoodsListCardDescriptionTitle;
