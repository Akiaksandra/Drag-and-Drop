export type TData = IDataItem[];

export type TItem = { id: number | string; title: string };

export interface IDataItem {
  id: number | string;
  title: string;
  items: Array<TItem>;
}
