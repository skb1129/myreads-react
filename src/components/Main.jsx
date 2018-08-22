import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import BookCard from './common/BookCard';
import Navbar from './common/Navbar';

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
      <div>
        <Navbar />
        <main>
          <section id="currentlyReading">
            <h2 className="section-title">Currently Reading</h2>
            <div className="books-container">
              {currentlyReadingBooks.map(book => (<BookCard key={book.id} book={book} />))}
            </div>
          </section>
          <section id="wantToRead">
            <h2 className="section-title">Want to Read</h2>
            <div className="books-container">
              {wantToReadBooks.map(book => (<BookCard key={book.id} book={book} />))}
            </div>
          </section>
          <section id="read">
            <h2 className="section-title">Read</h2>
            <div className="books-container">
              {readBooks.map(book => (<BookCard key={book.id} book={book} />))}
            </div>
          </section>
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
