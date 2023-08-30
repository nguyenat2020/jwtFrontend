import './App.scss';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/news">
            About
          </Route>
          <Route path="/contact">
          Contact
          </Route>
          <Route path="/about">
          about
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
          404 Not found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
