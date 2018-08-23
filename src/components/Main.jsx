import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { SHELF } from '../constants';

import BookCard from './common/BookCard';
import Navbar from './common/Navbar';
import Loader from './common/Loader';

import '../styles/Main.css';

class Main extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    currentlyReadingBooks: PropTypes.array,
    wantToReadBooks: PropTypes.array,
    readBooks: PropTypes.array,
    moveBookHandler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLoading: false,
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
  };

  render() {
    const {
      isLoading,
      currentlyReadingBooks,
      wantToReadBooks,
      readBooks,
      moveBookHandler,
    } = this.props;
    return (
      <div>
        <Navbar />
        <main>
          {isLoading
            ? <Loader />
            : (
              <div>
                <section id={SHELF.cr}>
                  <h2 className="section-title">Currently Reading</h2>
                  <div className="books-container">
                    {currentlyReadingBooks.map(book => (
                      <BookCard key={book.id} book={book} moveBookHandler={moveBookHandler} />
                    ))}
                  </div>
                </section>
                <section id={SHELF.wtr}>
                  <h2 className="section-title">Want to Read</h2>
                  <div className="books-container">
                    {wantToReadBooks.map(book => (
                      <BookCard key={book.id} book={book} moveBookHandler={moveBookHandler} />
                    ))}
                  </div>
                </section>
                <section id={SHELF.r}>
                  <h2 className="section-title">Read</h2>
                  <div className="books-container">
                    {readBooks.map(book => (
                      <BookCard key={book.id} book={book} moveBookHandler={moveBookHandler} />
                    ))}
                  </div>
                </section>
              </div>
            )}
        </main>
        <footer>
          <Link to="/search" className="search-button">
            <FaSearch size={40} color="#fff" />
          </Link>
        </footer>
      </div>
    );
  }
}

export default Main;
