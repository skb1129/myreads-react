import React, { Component } from 'react';

import { Main, Loader } from '../components';
import { BooksAPI } from '../apis';
import { SHELF } from '../constants';

class MainRoute extends Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
    isLoading: true,
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setBooks(books);
  }

  setBooks = (books) => {
    const currentlyReadingBooks = [];
    const wantToReadBooks = [];
    const readBooks = [];
    books.forEach((book) => {
      switch (book.shelf) {
      case SHELF.cr:
        currentlyReadingBooks.push(book);
        break;

      case SHELF.wtr:
        wantToReadBooks.push(book);
        break;

      case SHELF.r:
        readBooks.push(book);
        break;

      default:
        console.error('Invalid Book Shelf', book.shelf);
      }
    });
    this.setState({
      currentlyReadingBooks,
      wantToReadBooks,
      readBooks,
      isLoading: false,
    });
  };

  render() {
    const {
      currentlyReadingBooks,
      wantToReadBooks,
      readBooks,
      isLoading,
    } = this.state;
    if (isLoading) {
      return (<Loader />);
    }
    return (
      <Main
        currentlyReadingBooks={currentlyReadingBooks}
        wantToReadBooks={wantToReadBooks}
        readBooks={readBooks}
      />
    );
  }
}

export default MainRoute;
