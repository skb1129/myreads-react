import React, { Component } from 'react';

import { Main, Loader } from '../components';
import { BooksAPI } from '../apis';

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
      case 'currentlyReading':
        currentlyReadingBooks.push(book);
        break;

      case 'wantToRead':
        wantToReadBooks.push(book);
        break;

      case 'read':
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
