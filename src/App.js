// import logo from './logo.svg';
import Navbar from './NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './login/Login';
import Signup from './Signup/Signup';
import Examples from './Popup/Popup';

function App() {
  return (
    <div className="App">
     
       <Router>
       <Navbar/>
       <Route path="/" exact component={Signup} />
       <Route path='/login' component={Login} />
       <Route path='/verification' component={Examples} />
       </Router>
      
    </div>
  );
}

export default App;
