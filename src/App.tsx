import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {

  const personName = {
    first: 'naveen',
    last: 'kumar'
  }

  const nameList = [
    {
      first: 'guna',
      last: 'sekaran'
    },
    {
      first: 'raj',
      last: 'kumar'
    },
    {
      first: 'gomathi',
      last: 'shankar'
    },
  ]
  return (
    <div className="App">
      <Greet name='Naveen' messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <hr />

      <Status status={false}/>
      <Heading>Hello this children</Heading>

      <Oscar>
        <Heading>The Oscar goes to ....</Heading>
      </Oscar>
      <Greet name={'Kumar'} isLoggedIn={false}/>

      <hr />

      <Button handleClick={() => {
        console.log('Btn clicked');
        
      }} handleClickEvent={(e, id) => {
        console.log('e', e, id);
        
      }}/>

      <Input value='test' handleChange={(event) => {
        console.log('input event', event);
        
      }}/>

    </div>
  );
}

export default App;
