export type TData = IDataItem[];

export interface IDataItem {
  id: number;
  title: string;
  items: { id: number; title: string }[];
}
