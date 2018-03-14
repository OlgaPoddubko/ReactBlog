import React from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

const App = ({name}) => (
  <div className="container">
    <div className="hello">Hi <b>{name}!</b>
    </div>

    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/blog" component={BlogPage}/>
      <Redirect to="/"/>
    </Switch>

  <style jsx>{`
    *{
      padding: 0;
      margin: 0;
      font-family: Arial;
      color: #474747;
    }
    .container{
      max-width: 1000px;
      margin: 0 auto;
    }

    .hello{
      margin-top: 20px;
    }

    .nav{
      list-style-type: none;
      text-align: right;
      padding: 20px 0;
    }
    .nav li{
      display: inline-block;
      margin-left: 10px;
    }
    .nav a{
      color: #49c757;
      text-decoration-color: #49c757;
      text-transform: uppercase;
    }
    .nav a:hover{
      color:  #42b34e;
      text-decoration-color: #42b34e;
    }
  `}
    </style>
  </div>
);

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
