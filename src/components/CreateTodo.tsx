import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../models/todo";

type CreateTodoProps = {
  createTodo: (p: Todo) => void;
};

export const CreateTodo = (props: CreateTodoProps) => {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: 0,
    task: "",
    isDone: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, [e.target.id]: e.target.value, id: Date.now() });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.createTodo(newTodo);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="task"
          type="text"
          onChange={handleChange}
          value={newTodo.task}
        />
        <button>Lägg till</button>
      </form>
    </>
  );
};
