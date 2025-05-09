import Button from "@mui/material/Button";

type ButtonsProps = {
  text: string;
  handleClick: () => void;
};

export const Buttons = (props: ButtonsProps) => {
  return (
    <div>
      <Button variant="contained" onClick={props.handleClick}>
        {props.text}
      </Button>
    </div>
  );
};
