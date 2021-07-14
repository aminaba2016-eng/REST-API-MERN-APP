import logo from './logo.svg';
import './App.css';
import ContactList from './Components/ContactList';
import Add from './Components/Add';
import {Button} from 'semantic-ui-react'
import {Route,Switch} from 'react-router-dom'
import { toggleFalse, toggleTrue } from './JS/actions/edit';
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'


//switch pour utiliser plusieurs routes 

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Workshop MERN</h2>
      <Button inverted color='blue' onClick={() => dispatch(toggleTrue())} >
        <Link to = "/add">Add contact</Link>
      </Button>
      <Button inverted color='blue' onClick={() => dispatch(toggleFalse())}>
        <Link to = "/"> contact List</Link>
      </Button>
      <Switch>
        {/* kif na3mal / thezni ll contactList */}
        <Route exact path = "/" component={ContactList}/>
{/* na3mal objet fast tableau kif yabda 3endna plusieurs route f same component in react router */}
        <Route path = {["/add", "/edit/:id"]} component={Add}/>

      </Switch>
    </div>
  );
}


export default App;
