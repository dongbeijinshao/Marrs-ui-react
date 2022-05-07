import { useRef } from 'react';

export const __INTERNAL__ = '__INTERNAL__';
const usePicker = () => {
  const ref = useRef({});

  return [ref.current];
};

export default usePicker;
