import React, { Component } from 'react';

import '../../styles/Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader" />
        <h3>Loading...</h3>
      </div>
    );
  }
}

export default Loader;
