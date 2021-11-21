import React, { useState } from "react";
import { statuses, items2 } from "../data/data";
import { TData, IDataItem } from "../models/models";
import Board from "./Board";
import Card from "./Card";

export const DnDWithLibrary: React.FC = () => {
  const [items, setItems] = useState<TData>(items2);

  const onDrop = (item: IDataItem, status: string) => {
    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status: status });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    // const item = items[dragIndex];
    // setItems((prevState) => {
    //   const newItems = prevState.filter((i, idx) => idx !== dragIndex);
    //   newItems.splice(hoverIndex, 0, item);
    //   return [...newItems];
    // });
  };

  return (
    <>
      <div className="boards__title">
        Здесь вы можете управлять своими задачами
      </div>
      <div className="boards__container">
        {statuses.map((s) => {
          return (
            <Board key={s.id} status={s.status} onDrop={onDrop}>
              {items
                .filter((i) => i.status === s.status)
                .map((item, index) => (
                  <Card
                    item={item}
                    key={item.id}
                    index={index}
                    moveItem={moveItem}
                  />
                ))}
            </Board>
          );
        })}
      </div>
    </>
  );
};
