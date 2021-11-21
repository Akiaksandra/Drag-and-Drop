export type TData = IDataItem[];

export type TItem = { id: number; title: string } | null;

export interface IDataItem {
  id: number;
  title: string;
  items?: Array<TItem>;
  status?: string;
}
