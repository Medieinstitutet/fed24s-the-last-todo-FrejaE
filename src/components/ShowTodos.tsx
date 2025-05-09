import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../models/todo";

type ShowTodoProps = {
  todos: Todo[];
  changeTodoList: (t: Todo) => void;
  deleteTodo: (id: number) => void;
};

export const ShowTodos = (props: ShowTodoProps) => {
  return (
    <List>
      {props.todos.map((t) => (
        <ListItem key={t.id} divider>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={t.isDone}
              onChange={() => props.changeTodoList(t)}
            />
          </ListItemIcon>

          <ListItemText
            primary={t.task}
            sx={{ textDecoration: t.isDone ? "line-through" : "none" }}
          />

          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => props.deleteTodo(t.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
