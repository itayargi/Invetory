export const logDev = (...args: unknown[]) => {
  __DEV__ && console.log(...args);
};

export const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
