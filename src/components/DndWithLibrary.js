import React, { useState } from "react";
import { dataBoard2 } from "../data/data";
import { TData, IDataItem } from "../models/models";
import Board from "./Board";
import Card from "./Card";

export const DnDWithLibrary = () => {
  const [boards, setBoards] = useState(dataBoard2);

  const onDropByBoard = (currentItem, currentBoard, targetBoard) => {
    console.log("board");
    targetBoard.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === targetBoard.id) {
          return targetBoard;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  const onDropByCard = (currentItem, currentBoard, targetItem, targetBoard) => {
    console.log("card");
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = targetBoard.items.indexOf(targetItem);
    targetBoard.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === targetBoard.id) {
          return targetBoard;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  return (
    <>
      <div className="boards__title">
        Здесь вы можете управлять своими задачами
      </div>
      <div className="boards__container">
        {boards.map((b) => {
          return (
            <Board key={b.id} board={b} onDrop={onDropByBoard}>
              {b.items.map((item, index) => (
                <Card
                  item={item}
                  key={item.id}
                  board={b}
                  onDrop={onDropByCard}
                />
              ))}
            </Board>
          );
        })}
      </div>
    </>
  );
};
