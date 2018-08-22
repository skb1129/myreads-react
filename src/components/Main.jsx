import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Main.css';

class Main extends Component {
  static propTypes = {
    currentlyReadingBooks: PropTypes.array,
    wantToReadBooks: PropTypes.array,
    readBooks: PropTypes.array,
  };

  static defaultProps = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
  };

  render() {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.props;
    return (
      <div className="navbar">
        <h1 className="navbar-title">My Reads</h1>
      </div>
    );
  }
}

export default Main;
