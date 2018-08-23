import React, { Component } from 'react';

import { Main } from '../components';
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
    try {
      const books = await BooksAPI.getAll();
      this.setBooks(books);
    } catch (error) {
      console.error('Error connecting to Books API', error);
    }
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

  moveBookHandler = async (book, shelf) => {
    this.setState({ isLoading: true });
    try {
      await BooksAPI.update(book, shelf);
      const books = await BooksAPI.getAll();
      this.setBooks(books);
    } catch (error) {
      console.error('Error connecting to Books API', error);
    }
  };

  render() {
    const {
      currentlyReadingBooks,
      wantToReadBooks,
      readBooks,
      isLoading,
    } = this.state;

    return (
      <Main
        isLoading={isLoading}
        currentlyReadingBooks={currentlyReadingBooks}
        wantToReadBooks={wantToReadBooks}
        readBooks={readBooks}
        moveBookHandler={this.moveBookHandler}
      />
    );
  }
}

export default MainRoute;
