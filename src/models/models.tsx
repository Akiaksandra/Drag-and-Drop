export type TData = Array<IDataItem | null>;

export type TItem = { id: number | string; title: string };

export interface IDataItem {
  id: number | string;
  title: string;
  items: Array<TItem>;
}
