import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login.jsx';
import Signup from './signup.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/reset">Reset Password </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route path="/signup" component ={Signup}/>
          <Route path="/login" component ={Login}/>
          <Route path="/reset" component ={Reset}/>
            
          
        </Switch>
      </div>
    </Router>
  );
}

