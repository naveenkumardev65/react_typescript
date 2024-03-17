
type ButtonProps = {
    handleClick: () => void, // return nothing this function use void
    handleClickEvent: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export default function Button({ handleClick, handleClickEvent }: ButtonProps) {
  return <div>
    <button onClick={handleClick}>Click</button>
    <button onClick={(event) => handleClickEvent(event, 1)}>Click Event</button>
  </div>;
}
