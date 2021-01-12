// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
  return (
>>>>>>> 634045065689e6b87550ca571277a3f2d47eae28
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
<<<<<<< HEAD
=======
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
ReactDOM.render((
  <Router>
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
>>>>>>> 634045065689e6b87550ca571277a3f2d47eae28
  </Router>),
  document.getElementById('root')
);