import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  static propTypes = {
    books: PropTypes.array,
  };

  static defaultProps = {
    books: [],
  };

  render() {
    const { books } = this.props;
    return (
      <div>
        {JSON.stringify(books)}
      </div>
    );
  }
}

export default Main;
