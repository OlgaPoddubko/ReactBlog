import React from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

const App = ({name}) => (
  <div>
    <div className="hello">Hello
      <b>{name}</b>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/blog" component={BlogPage}/>
      <Redirect to="/"/>
    </Switch>

  <style jsx>{`
    .hello, ul{
      text-align: center;
      padding: 20px 0;
    }
    ul{
      list-style-type: none;
    }
  `}
    </style>
      </div>
);

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
