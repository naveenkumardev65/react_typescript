import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

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
    </div>
  );
}

export default App;
