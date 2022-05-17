import logo from './logo.svg';
import './App.css';
import { Registration } from './components/registration/Registration';
import { Login } from './components/login/Login';
import { Form } from './components/form/Form';
import { useSelector } from 'react-redux';
import { Home } from './components/home/Home';

function App() {
  const user = useSelector(state => state.loggedInUser)
  return (
    <div className="App">
          {
            user ?<Home /> :<Form />
          }
    </div>
  );
}

export default App;
