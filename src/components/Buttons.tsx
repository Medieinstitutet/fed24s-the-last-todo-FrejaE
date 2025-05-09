import Button from "@mui/material/Button";
import { ReactNode } from "react";

type ButtonsProps = {
  text: string;
  handleClick: () => void;
  icon: ReactNode;
};

export const Buttons = (props: ButtonsProps) => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={props.handleClick}
        startIcon={props.icon}
        sx={{ textTransform: "none" }}
      >
        {props.text}
      </Button>
    </div>
  );
};
