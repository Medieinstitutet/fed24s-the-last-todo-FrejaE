import { useState } from "react";
import "./App.css";
import { Buttons } from "./components/Buttons";
import { Heading } from "./components/Heading";
import { ShowTodos } from "./components/ShowTodos";
import { Todo } from "./models/todo";
import CreateTodoModal from "./components/CreateTodoModal";

function App() {
  const [sortNewestFirst, setSortNewestFirst] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    handleClose();
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
  const sortedTodos = [...todos].sort((a, b) => {
    return sortNewestFirst ? b.id - a.id : a.id - b.id;
  });
  const doneTodos = sortedTodos.filter((t) => t.isDone);
  const todosToDo = sortedTodos.filter((t) => !t.isDone);

  return (
    <>
      <Heading h1 greeting="Min todo app" />
      <Buttons text="Lägg till ny todo" handleClick={handleOpen} />
      <Buttons
        text={sortNewestFirst ? "Nyast först" : "Äldst först"}
        handleClick={() => {
          setSortNewestFirst(!sortNewestFirst);
        }}
      />
      {open && (
        <CreateTodoModal
          createTodo={handleTodo}
          open={open}
          handleClose={handleClose}
        />
      )}
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
