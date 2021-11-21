import React, { useState } from "react";
import { dataBoard1 } from "../data/data";

export const DnD = () => {
  const [boards, setBoards] = useState(dataBoard1);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "board__item")
      e.target.style.boxShadow = "0 4px 3px gray";
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dragStartHandler = (e, board, item) => {
    e.stopPropagation();
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dropCardHandler = (e, board) => {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  const dropHandler = (e, board, item) => {
    console.log(item);
    e.target.style.boxShadow = "none";
    e.stopPropagation();
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
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
        {boards.map((board) => {
          return (
            <div
              className="board"
              key={board.id}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, board)}
            >
              <div className="board__title">{board.title}</div>
              {board.items.map((item) => (
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
