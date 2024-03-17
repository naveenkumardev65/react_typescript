
type GreetProps = {
    name: string
}

function Greet(props: GreetProps) {
  return <div>Welcome {props.name}! You have 10 unread messages</div>;
}

export default Greet;
