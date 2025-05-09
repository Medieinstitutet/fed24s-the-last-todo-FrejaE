import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
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
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Checkbox
                checked={t.isDone}
                onChange={() => props.changeTodoList(t)}
              />
              <ListItemText
                primary={t.task}
                sx={{ textDecoration: t.isDone ? "line-through" : "none" }}
              />
            </Box>
            <IconButton edge="end" onClick={() => props.deleteTodo(t.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
