import React from "react";
import { useDrop } from "react-dnd";
import { IDataItem } from "../models/models";

const Board = ({ onDrop, children, board }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (item) => {
      onDrop(item.item, item.board, board);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className="board"
      ref={dropRef}
      style={isOver ? { border: "2px solid red" } : {}}
    >
      <div className="board__title">{board.title}</div>
      {children}
    </div>
  );
};

export default Board;
