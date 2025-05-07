type HeadingProps = {
  greeting: string;
  h1?: boolean;
};
// ska det här vara en till property för att kunna styla
// tex greeting och headline olika?
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
