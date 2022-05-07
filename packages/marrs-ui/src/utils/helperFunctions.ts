export const noop = () => null;
export const resolved = () => Promise.resolve();
export const rejected = () => Promise.reject();
export const alwaysGetTrue = () => true;
export const alwaysGetSelf = (Self: any) => Self;
