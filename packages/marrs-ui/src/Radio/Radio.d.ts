import { FC } from 'react';
import { CheckboxBaseProps } from '../CheckboxBase';
import { ClassesProps } from '../types/components';

/**
 * @description Radio
 */
export type RadioComponent = CheckboxBaseProps;

/**
 * Radio classes-slot
 */
export interface RadioClasses {
  root?: string;
}

export type RadioProps = ClassesProps<RadioClasses> & RadioComponent;

declare const Radio: FC<RadioProps>;
export default Radio;
