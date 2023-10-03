import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function TodoItem(props) {
  return (
    <div className="todo-row">
      {props.todo.text}
      <div className="iconsContainer">
        <RiCloseCircleLine className="icon"/>
      </div>
    </div>
  );
}

export default TodoItem;
