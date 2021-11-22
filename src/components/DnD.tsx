import React, { useState } from "react";
import { dataBoard1 } from "../data/data";
import { IDataItem, TData, TItem } from "../models/models";

export const DnD = () => {
  const [boards, setBoards] = useState<TData>(dataBoard1);
  const [currentBoard, setCurrentBoard] = useState<IDataItem | null>(null);
  const [currentItem, setCurrentItem] = useState<TItem | null>(null);

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    if (e.target.className === "board__item")
      e.target.style.boxShadow = "0 4px 3px gray";
  };

  const dragLeaveHandler = (e: any) => {
    e.target.style.boxShadow = "none";
  };

  const dragStartHandler = (e: any, board: IDataItem, item: TItem) => {
    e.stopPropagation();
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dropCardHandler = (e: any, board: IDataItem | null) => {
    if (currentItem) {
      board?.items.push(currentItem);
      const currentIndex = currentBoard?.items.indexOf(currentItem) || 0;
      currentBoard?.items.splice(currentIndex, 1);
      setBoards(
        boards.map((b) => {
          if (b?.id === board?.id) {
            return board;
          }
          if (b?.id === currentBoard?.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  const dropHandler = (e: any, board: IDataItem, item: TItem) => {
    e.target.style.boxShadow = "none";
    e.stopPropagation();
    e.preventDefault();
    if (currentItem) {
      const currentIndex = currentBoard?.items.indexOf(currentItem) || 0;
      currentBoard?.items.splice(currentIndex, 1);
      const dropIndex = board.items.indexOf(item);
      board.items.splice(dropIndex + 1, 0, currentItem);
      setBoards(
        boards.map((b) => {
          if (b?.id === board.id) {
            return board;
          }
          if (b?.id === currentBoard?.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  return (
    <>
      <div className="boards__title">
        Здесь вы можете управлять своими задачами
      </div>
      <div className="boards__container">
        {boards.map((board) => {
          return (
            <div
              className="board"
              key={board?.id}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, board)}
            >
              <div className="board__title">{board?.title}</div>
              {board?.items.map((item) => (
                <div
                  draggable={true}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragStartHandler(e, board, item)}
                  onDrop={(e) => dropHandler(e, board, item)}
                  className="board__item"
                  key={item.id}
                >
                  {item.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
