export type SafeAny = any;
export interface InfiniteData<TData> {
  pages: TData[];
  pageParams: unknown[];
}