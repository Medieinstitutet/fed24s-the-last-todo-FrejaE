import * as React from "react";
import Button from "@mui/material/Button";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { ChangeEvent } from "react";
import { Todo } from "../models/todo";
type ShowTodoProps = {
  todos: Todo[];
  changeTodoList: (t: Todo) => void;
  deleteTodo: (id: number) => void;
};

export const ShowTodos = (props: ShowTodoProps) => {
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>, t: Todo) => {
    // const newList = [...props.todos];
    // if (e.target.checked) {
    //   newList[i].isDone = true;
    // } else {
    //   newList[i].isDone = false;
    // }
    // console.log(newList);
    // props.setTodos(newList);
  };
  return (
    <>
      {props.todos.map((t) => (
        <ul key={t.id}>
          <input
            type="checkbox"
            checked={t.isDone}
            onChange={() => props.changeTodoList(t)}
          />
          <li>{t.task}</li>

          <Button onClick={() => props.deleteTodo(t.id)} variant="outlined">
            <DeleteRoundedIcon />
          </Button>
          {/* återanvända buttonskomponent?? */}
        </ul>
      ))}
    </>
  );
};
