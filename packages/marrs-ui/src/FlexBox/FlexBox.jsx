import clsx from 'clsx';
import * as React from 'react';
import { useThemeProps } from '../styles';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import FlexBoxContext from './FlexBoxContext';

const ComponentName = getComponentName('FlexBox');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    container: ['container'],
    item: ['item']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const FlexBoxRoot = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => ({
  boxSizing: 'border-box',
  fontSize: theme.sizing(theme.typography.fontSize),
  // padding: 12,
  ...(styleProps.container && {
    display: 'flex',
    alignItems: styleProps.alignItems,
    flexWrap: styleProps.wrap,
    width: `calc(100% + ${theme.spacing(styleProps.gap)})`,
    flexDirection: styleProps.direction,
    marginLeft: theme.spacing(0 - styleProps.gap),
    justifyContent: styleProps.justifyContent
    // maxWidth: '100%',
  }),
  ...(styleProps.item && {
    margin: 0,
    ...(!styleProps.space
      ? {}
      : {
          flexBasis: `calc(100% * ${styleProps.space / 24} - ${theme.spacing(
            styleProps.gap
          )})`,
          maxWidth: `calc(100% * ${styleProps.space / 24} - ${theme.spacing(
            styleProps.gap
          )})`,
          minWidth: `calc(100% * ${styleProps.space / 24} - ${theme.spacing(
            styleProps.gap
          )})`
        }),

    textAlign: styleProps.textAlign,
    ...(styleProps.direction === 'row' && {
      // [`&.${flexBoxClasses.item}+.${flexBoxClasses.item}`]: {
      marginLeft: theme.spacing(styleProps.gap),
      ...(styleProps.wrap !== 'nowrap' && {
        marginBottom: theme.spacing(styleProps.gap)
      })
      // },
    })
  })
}));

const FlexBox = React.forwardRef(function Flex(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    className,
    classes: classesProps,
    space,
    children,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    textAlign = 'left',
    component = 'div',
    container = false,
    direction = 'row',
    item = false,
    gap = 0,
    wrap = 'wrap',
    rowGap: rowGapProp,
    columnGap: columnGapProp,

    ...other
  } = props;

  const parentContext = React.useContext(FlexBoxContext);

  const rowGap = rowGapProp || parentContext.gap;
  const columnGap = columnGapProp || parentContext.gap;

  const styleProps = {
    className,
    space,
    alignItems,
    gap: container ? gap : parentContext.gap,
    container,
    textAlign,
    justifyContent,
    direction,
    item,
    rowGap,
    columnGap,
    classes: classesProps,
    wrap: item ? parentContext.wrap : wrap
  };

  const classes = useUtilityClasses(styleProps);
  const flexbox = (
    <FlexBoxRoot
      styleProps={styleProps}
      as={component}
      className={clsx(
        className,
        classes.root,
        container ? classes.container : classes.item
      )}
      ref={ref}
      {...other}
    >
      {container ? (
        <FlexBoxContext.Provider value={{ gap, wrap }}>
          {children}
        </FlexBoxContext.Provider>
      ) : (
        children
      )}
    </FlexBoxRoot>
  );

  return flexbox;
});
FlexBox.displayName = ComponentName;
FlexBox.name = ComponentName;
export default FlexBox;
