import { forwardRef } from 'react';
import CheckboxBase from '../CheckboxBase';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';

const ComponentName = getComponentName('Checkbox');

const useUtilityClasses = (styleProps) => {
  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(
    ComponentName,
    slots,
    styleProps.classes
  );

  return composedClasses;
};

const CheckboxRoot = styled(CheckboxBase, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(() => {
  //书写样式
});

const Checkbox = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const classes = useUtilityClasses({ classes: props.classes });

  return (
    <CheckboxRoot
      className={classes.root}
      ref={ref}
      type="checkbox"
      iconStyle="radio"
      {...props}
    />
  );
});
Checkbox.name = ComponentName;
Checkbox.displayName = ComponentName;
export default Checkbox;
