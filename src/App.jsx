import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { MainRoute, SearchRoute } from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MainRoute} />
        <Route path="/search" component={SearchRoute} />
      </div>
    );
  }
}

export default App;
