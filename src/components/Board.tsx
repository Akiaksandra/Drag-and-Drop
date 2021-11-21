import React from "react";
import { useDrop } from "react-dnd";
import { IDataItem } from "../models/models";

interface IProps {
  onDrop: (item: IDataItem, status: string) => void;
  children: any;
  status: string;
}

const Board: React.FC<IProps> = ({ onDrop, children, status }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (item: IDataItem) => {
      console.log("board");
      onDrop(item, status);
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
      <div className="board__title">{status}</div>
      {children}
    </div>
  );
};

export default Board;
