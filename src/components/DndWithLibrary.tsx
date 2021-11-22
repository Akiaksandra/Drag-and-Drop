import React, { useState } from "react";
import { dataBoard2 } from "../data/data";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { TData } from "../models/models";

export const DnDWithLibrary = () => {
  const [boards, setBoards] = useState<TData>(dataBoard2);

  const onDragEnd = (
    result: DropResult,
    boards: TData,
    setBoards: React.Dispatch<React.SetStateAction<TData>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;

    const sourceColumn = boards.find((el) => el.id === source.droppableId) || {
      id: "",
      title: "",
      items: [],
    };
    const destColumn = boards.find(
      (el) => el.id === destination.droppableId
    ) || { id: "", title: "", items: [] };
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
      destItems.splice(destination.index, 0, removed);
    } else {
      sourceItems.splice(destination.index, 0, removed);
    }

    setBoards(
      boards.map((b) => {
        if (b.id === source.droppableId) {
          return { ...sourceColumn, items: sourceItems };
        }
        if (b.id === destination.droppableId) {
          return { ...destColumn, items: destItems };
        }
        return b;
      })
    );
  };

  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, boards, setBoards)}
      >
        <div className="boards__title">
          Здесь вы можете управлять своими задачами
        </div>
        <div className="boards__container">
          {boards.map((board) => {
            return (
              <Droppable droppableId={String(board.id)} key={board.id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      className="board"
                      ref={provided.innerRef}
                      style={
                        snapshot.isDraggingOver
                          ? { border: "2px solid red" }
                          : {}
                      }
                      {...provided.droppableProps}
                    >
                      <div className="board__title">{board.title}</div>
                      {board.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={String(item.id)}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="board__item"
                                style={{
                                  opacity: snapshot.isDragging ? "0.5" : "1",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {item.title}
                              </div>
                            );
                          }}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};
