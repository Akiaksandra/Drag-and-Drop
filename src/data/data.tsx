import { TData } from "../models/models";

export const dataBoard1: TData = [
  {
    id: 1,
    title: "Сделать",
    items: [
      { id: 1, title: "Покушать" },
      { id: 2, title: "Сходить на работу" },
    ],
  },
  {
    id: 2,
    title: "В процессе",
    items: [
      { id: 3, title: "Купить молока" },
      { id: 4, title: "Поиграть с котом" },
      { id: 5, title: "Поспать" },
      { id: 6, title: "Посмотреть фильм" },
    ],
  },
  {
    id: 3,
    title: "Выполнено",
    items: [],
  },
];

export const dataBoard2: TData = [
  {
    id: 1,
    title: "Сделать",
    items: [
      { id: 1, title: "Покушать" },
      { id: 2, title: "Сходить на работу" },
    ],
  },
  {
    id: 2,
    title: "В процессе",
    items: [
      { id: 3, title: "Купить молока" },
      { id: 4, title: "Поиграть с котом" },
      { id: 5, title: "Поспать" },
      { id: 6, title: "Посмотреть фильм" },
    ],
  },
  {
    id: 3,
    title: "Выполнено",
    items: [],
  },
];

export const items2: TData = [
  { id: 1, title: "Покушать", status: "Сделать" },
  { id: 2, title: "Сходить на работу", status: "Сделать" },
  { id: 3, title: "Купить молока", status: "В процессе" },
  { id: 4, title: "Поиграть с котом", status: "Выполнено" },
  { id: 6, title: "Посмотреть фильм", status: "Выполнено" },
];

export const statuses = [
  {
    id: 1,
    status: "Сделать",
  },
  {
    id: 2,
    status: "В процессе",
  },
  {
    id: 3,
    status: "Выполнено",
  },
];
