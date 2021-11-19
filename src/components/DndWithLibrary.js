import React, { useState } from "react";
import { dataBoard2 } from "../data/data";
import Board from "./Board";
import Card from "./Card";

export const DnDWithLibrary = () => {
  const [boards, setBoards] = useState(dataBoard2);

  return (
    <>
      <div className="boards__title">
        Здесь вы можете управлять своими задачами
      </div>
      <div className="boards__container">
        {boards.map((board) => {
          return (
            <Board key={board.id} board={board}>
              {board.items.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Board>
          );
        })}
      </div>
    </>
  );
};
