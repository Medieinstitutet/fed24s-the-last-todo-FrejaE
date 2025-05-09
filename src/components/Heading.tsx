type HeadingProps = {
  greeting: string;
  h1?: boolean;
};
export const Heading = (props: HeadingProps) => {
  if (props.h1) {
    return <h1>{props.greeting}</h1>;
  }
  return (
    <>
      <h3>{props.greeting}</h3>
    </>
  );
};
