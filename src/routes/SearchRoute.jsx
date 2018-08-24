import React, { Component } from 'react';

import { BooksAPI } from '../apis';
import { Search } from '../components';
import { SEARCH_INTERVAL, SHELF } from '../constants';

class SearchRoute extends Component {
  state = {
    booksOnShelf: [],
    books: [],
    timeout: null,
    isLoading: false,
    notFound: false,
  };

  async componentDidMount() {
    try {
      const booksOnShelf = await BooksAPI.getAll();
      this.setState({ booksOnShelf });
    } catch (error) {
      console.log('Error connecting to Books API', error);
    }
  }

  updateBooks = (books, booksOnShelf) => books.map((data) => {
    const book = { ...data };
    book.shelf = SHELF.none;
    booksOnShelf.forEach((bos) => {
      if (bos.id === book.id) {
        book.shelf = bos.shelf;
      }
    });
    return book;
  });

  searchHandler = (query) => {
    this.setState({ isLoading: true });
    const { timeout } = this.state;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!query) {
      this.setState({ books: [], isLoading: false });
      return;
    }
    this.setState({
      timeout: setTimeout(async () => {
        try {
          let books = await BooksAPI.search(query);
          if (books.error) {
            books = [];
          }
          if (books.length) {
            const { booksOnShelf } = this.state;
            books = this.updateBooks(books, booksOnShelf);
          }
          this.setState({
            books,
            isLoading: false,
            notFound: !books.length,
          });
        } catch (error) {
          console.log('Error connecting to Books API', error);
        }
      }, SEARCH_INTERVAL),
    });
  };

  moveBookHandler = async (book, shelf) => {
    this.setState({ isLoading: true });
    const { books } = this.state;
    try {
      await BooksAPI.update(book, shelf);
      const booksOnShelf = await BooksAPI.getAll();
      const updatedBooks = this.updateBooks(books, booksOnShelf);
      this.setState({
        booksOnShelf,
        books: updatedBooks,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error connecting to Books API', error);
    }
  };

  render() {
    const { books, isLoading, notFound } = this.state;

    return (
      <Search
        books={books}
        isLoading={isLoading}
        notFound={notFound}
        searchHandler={this.searchHandler}
        moveBookHandler={this.moveBookHandler}
      />
    );
  }
}

export default SearchRoute;
