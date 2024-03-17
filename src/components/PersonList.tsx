import { Name } from "./Person.type";
type PersonListProps = {
    names: Name[]
}

export default function PersonList(props: PersonListProps) {
  return <div>
    {props?.names.map(name => {
        return <li key={name.first}>{name?.first} {name?.last}</li>
    })}
  </div>;
}
