export type ExtractByKey<
  T,
  TKey extends keyof T,
  TValue extends T[TKey]
> = Extract<T, Record<TKey, TValue>>;

export type SliceOf<
  TSlice extends { __typename: string },
  TType extends TSlice['__typename']
> = ExtractByKey<TSlice, '__typename', TType>;
