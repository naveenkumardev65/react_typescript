type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export default function PersonList(props: PersonListProps) {
  return <div>
    {props?.names.map(name => {
        return <li key={name.first}>{name?.first} {name?.last}</li>
    })}
  </div>;
}
