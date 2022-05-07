import clsx from 'clsx';
import { Children, cloneElement, useCallback } from 'react';
import FlexBox from '../FlexBox';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { composeClassesByName } from '../utils/utilityClasses';

export const ComponentName = getComponentName('ActivityGridSheetLine');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const ActivityGridSheetRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => ({
  paddingTop: theme.sizing(30),
  paddingBottom: theme.sizing(30),
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '&+*': {
    paddingTop: 0
  }
}));

const defaultActivityGridSheetListStyleProps = {
  atLeastFive: false,
  length: 0
};
const ActivityGridSheetList = styled(FlexBox, {
  name: ComponentName,
  slot: 'List'
})(({ theme, styleProps = defaultActivityGridSheetListStyleProps }) => ({
  width: styleProps.atLeastFive
    ? `${theme.sizing(styleProps.length * 84)}`
    : '100%'
}));

const defaultActivityGridSheetItemStyleProps = { atLeastFive: true };
const ActivityGridSheetItem = styled('div', {
  name: ComponentName,
  slot: 'Item'
})(({ theme, styleProps = defaultActivityGridSheetItemStyleProps }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  overflow: 'hidden',
  ...(styleProps.atLeastFive ? { width: theme.sizing(84) } : { flex: 1 })
}));

const ActivityGridSheet = (inProps) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const { classes: classesProps, className, children, ...other } = props;

  const styleProps = {
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  const renderSingleGroup = useCallback(() => {
    const length = children.length;
    const atLeastFive = length >= 5;

    return (
      <ActivityGridSheetList
        styleProps={{ atLeastFive, length }}
        container
        justifyContent="space-around"
      >
        {Children.map(children, (child) => {
          return (
            <ActivityGridSheetItem>{cloneElement(child)}</ActivityGridSheetItem>
          );
        })}
      </ActivityGridSheetList>
    );
  }, [children]);

  return (
    <ActivityGridSheetRoot className={clsx(classes.root, className)} {...other}>
      {renderSingleGroup()}
    </ActivityGridSheetRoot>
  );
};

ActivityGridSheet.displayName = ComponentName;

export default ActivityGridSheet;
