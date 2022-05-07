import clsx from 'clsx';
import { Children, forwardRef } from 'react';
import ActionSheet from '../ActionSheet';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import assert from '../utils/assert';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import { composeClassesByName } from '../utils/utilityClasses';
import { ComponentName as NameOfActivityGridSheetLine } from './ActivityGridSheetLine';

export const ComponentName = getComponentName('ActivityGridSheet');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const ActivityGridSheetRoot = styled(ActionSheet, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(() => {
  //书写样式
});

const ActivityGridSheetBody = styled('div', {
  name: ComponentName,
  slot: 'body'
})(() => ({
  overflowX: 'scroll'
}));

const ActivityGridSheet = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const { classes: classesProps, className, children, ...other } = props;

  Children.map(children, (child) => {
    assert(
      child.type.displayName === NameOfActivityGridSheetLine,
      'ActivityGridSheet 子组件必须是 ActivityGridSheetLine包裹'
    );
  });

  const styleProps = {
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <ActivityGridSheetRoot
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <ActivityGridSheetBody>{children}</ActivityGridSheetBody>
    </ActivityGridSheetRoot>
  );
});
ActivityGridSheet.name = ComponentName;
ActivityGridSheet.displayName = ComponentName;

export default ActivityGridSheet;
