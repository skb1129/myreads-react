import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from './common/Navbar';
import BookCard from './common/BookCard';
import Loader from './common/Loader';

import '../styles/Search.css';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array,
    isLoading: PropTypes.bool,
    notFound: PropTypes.bool,
    searchHandler: PropTypes.func.isRequired,
    moveBookHandler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    books: [],
    isLoading: true,
    notFound: false,
  };

  render() {
    const {
      books,
      moveBookHandler,
      searchHandler,
      isLoading,
      notFound,
    } = this.props;

    return (
      <div>
        <Navbar />
        <main>
          <section id="search">
            <div className="search-bar-container">
              <input
                className="search-bar"
                type="text"
                placeholder="Search by title or author"
                onChange={event => searchHandler(event.target.value)}
              />
            </div>
          </section>
          <section id="results">
            {isLoading ? <Loader /> : (
              <div className="result-books">
                {notFound
                  ? <h2>No Books found matching this query</h2>
                  : books.map(book => (
                    <BookCard key={book.id} book={book} moveBookHandler={moveBookHandler} />
                  ))
                }
              </div>
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default Search;
