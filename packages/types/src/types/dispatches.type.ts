export type DispatchesType = {
  [key: string]: (
    x: any,
    callback: (result: boolean) => void
  ) => Promise<void> | void;
};
