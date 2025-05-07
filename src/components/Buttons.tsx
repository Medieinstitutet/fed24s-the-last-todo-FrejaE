type ButtonsProps = {
  text: string;
  handleClick: () => void;
};

export const Buttons = (props: ButtonsProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};
