import { ChangeEvent, Dispatch, SetStateAction } from "react";
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
          <li>{t.task}</li>
          <input
            type="checkbox"
            checked={t.isDone}
            onChange={() => props.changeTodoList(t)}
          />
          <button onClick={() => props.deleteTodo(t.id)}>X</button>
          {/* återanvända buttonskomponent?? */}
        </ul>
      ))}
    </>
  );
};
