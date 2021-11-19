import React from "react";
import { useDrop } from "react-dnd";

const Board = (props) => {
  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (item, monitor) => console.log(item),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  return (
    <div
      className="board"
      ref={drop}
      style={{ border: isOver && "2px solid red" }}
    >
      <div className="board__title">{props.board.title}</div>
      {props.children}
    </div>
  );
};

export default Board;
