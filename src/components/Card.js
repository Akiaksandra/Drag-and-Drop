import React from "react";
import { useDrag } from "react-dnd";

const Card = (props) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "card",
    item: { id: props.item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="board__item"
      ref={dragRef}
      style={{ opacity: isDragging ? "0.5" : "1" }}
    >
      {props.item.title}
    </div>
  );
};

export default Card;
