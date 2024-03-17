
type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
  return <div>
    <input type="text" name="name" onChange={props?.handleChange} />
  </div>;
}
