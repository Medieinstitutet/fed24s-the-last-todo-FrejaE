import { useState } from "react";
import "./App.css";
import { Buttons } from "./components/Buttons";
import { CreateTodo } from "./components/CreateTodo";
import { Heading } from "./components/Heading";
import { ShowTodos } from "./components/ShowTodos";
import { Todo } from "./models/todo";

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "Skapa komponenter", isDone: false },
    {
      id: 2,
      task: "Bestämma mig om tailwind eller material ui",
      isDone: false,
    },
    { id: 3, task: "Lämna barnen på fsk", isDone: true },
    { id: 4, task: "Hälla upp en kopp kaffe", isDone: true },
  ]);
  const handleTodo = (todo: Todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
    setShowForm(false);
  };
  const handleForm = () => {
    setShowForm(true);
  };

  const changeTodoList = (t: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === t.id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const doneTodos = todos.filter((t) => t.isDone);
  const todosToDo = todos.filter((t) => !t.isDone);

  return (
    <>
      <Heading h1 greeting="Min todo app" />
      <Buttons text="Lägg till ny todo" handleClick={handleForm} />
      <Buttons text="Sortera" handleClick={() => {}} />
      {showForm && <CreateTodo createTodo={handleTodo} />}
      <Heading greeting="Att göra:" />
      <ShowTodos
        todos={todosToDo}
        changeTodoList={changeTodoList}
        deleteTodo={deleteTodo}
      />
      <Heading greeting="Avklarade:" />
      <ShowTodos
        todos={doneTodos}
        changeTodoList={changeTodoList}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
