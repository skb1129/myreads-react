import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Main, Search } from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
