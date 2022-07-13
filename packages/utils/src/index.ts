type SafeCallFn<T> = (...args: any) => T;
export const safeCall = <T>(fn: SafeCallFn<T>, ...args: any[]) => {
  let ret: T | undefined, err: ErrorConstructor | undefined;

  try {
    ret = fn(args);
  } catch (error) {
    err = error as ErrorConstructor;
  }

  return [err, ret] as const;
};
