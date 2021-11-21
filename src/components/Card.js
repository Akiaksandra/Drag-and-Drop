import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IDataItem } from "../models/models";

const Card = ({ item, onDrop, board }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { item: item, board },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const ref = useRef(null);

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (currentItem) => {
      onDrop(currentItem.item, currentItem.board, item, board);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      className="board__item"
      ref={ref}
      style={{
        opacity: isDragging ? "0.5" : "1",
        boxShadow: isOver ? "0 4px 3px gray" : "",
      }}
    >
      {item.title}
    </div>
  );
};

export default Card;
