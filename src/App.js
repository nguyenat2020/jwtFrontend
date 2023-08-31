import './App.scss';
import Nav from './components/Navigation/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            404 Not found
          </Route>
        </Switch>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </Router>
  );
}

export default App;
