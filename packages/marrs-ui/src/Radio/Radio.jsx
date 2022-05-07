import { forwardRef } from 'react';
import CheckboxBase from '../CheckboxBase';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import getForwardProps from '../utils/getForwardProps';
import { composeClassesByName } from '../utils/utilityClasses';
import clsx from 'clsx';

const ComponentName = getComponentName('Radio');

const useUtilityClasses = ({ classes }) => {
  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const RadioRoot = styled(CheckboxBase, {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => ({}));

const Radio = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });
  const { className, classes: classesProps = {}, ...other } = props;

  const forwardProps = getForwardProps(inProps, other);

  const classes = useUtilityClasses({ className, classes: classesProps });

  return (
    <RadioRoot
      className={clsx(classes.root, className)}
      type="radio"
      ref={ref}
      {...forwardProps}
    />
  );
});

Radio.displayName = ComponentName;
Radio.name = ComponentName;

export default Radio;
