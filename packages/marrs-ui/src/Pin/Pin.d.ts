import { FC } from 'react';
import { ClassesProps } from '../types/components';

export type PinProps = ClassesProps<any> & {
  //
  tip?: string;
  //
  draggable?: string;
  //
  offset?: number | string;
  //
  onClick?: number | string;
};

declare const Pin: FC<PinProps>;

export default Pin;
