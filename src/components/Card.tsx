import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IDataItem } from "../models/models";

interface IProps {
  item: IDataItem;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

const Card: React.FC<IProps> = ({ item, index, moveItem }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { ...item, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "card",
    drop: (item: IDataItem) => {
      console.log("card");
    },
    // hover(item, monitor) {
    //   if (!ref.current) {
    //     return;
    //   }
    //   const dragIndex = item.index;
    //   const hoverIndex = index;

    //   console.log(dragIndex, hoverIndex);

    //   if (dragIndex === hoverIndex) {
    //     return;
    //   }

    //   const hoveredRect = ref.current.getBoundingClientRect();
    //   const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
    //   const mousePosition = monitor.getClientOffset();
    //   const hoverClientY = mousePosition.y - hoveredRect.top;

    //   if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //     return;
    //   }

    //   if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //     return;
    //   }

    //   moveItem(dragIndex, hoverIndex);
    //   item.index = hoverIndex;
    // },
  });

  drag(drop(ref));

  return (
    <div
      className="board__item"
      ref={ref}
      style={{ opacity: isDragging ? "0.5" : "1" }}
    >
      {item.title}
    </div>
  );
};

export default Card;
