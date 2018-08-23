import React, { Component } from 'react';

import { BooksAPI } from '../apis';
import { Search } from '../components';
import { SEARCH_INTERVAL } from '../constants';

class SearchRoute extends Component {
  state = {
    books: [],
    timeout: null,
    isLoading: false,
    notFound: false,
  };

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
    try {
      await BooksAPI.update(book, shelf);
      const books = await BooksAPI.getAll();
      this.setBooks(books);
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
