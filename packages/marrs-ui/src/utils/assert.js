import MarrsError from './MarrsError';

const assert = (condition, message) => {
  if (!condition && process.env.NODE_ENV !== 'production') {
    throw new MarrsError(message);
  }
};

export default assert;
