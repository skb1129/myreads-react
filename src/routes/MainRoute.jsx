import React, { Component } from 'react';

import { Main } from '../components';
import { BooksAPI } from '../apis';

class MainRoute extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  render() {
    const { books } = this.state;

    return (
      <Main books={books} />
    );
  }
}

export default MainRoute;
