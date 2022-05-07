import { useState } from 'react';

const useForceUpdate = () => {
  const [, setState] = useState(false);
  return () => setState((val) => !val);
};

export default useForceUpdate;
