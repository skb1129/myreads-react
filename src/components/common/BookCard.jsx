import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SHELF } from '../../constants';

import '../../styles/BookCard.css';

const FALLBACK = {
  image: 'https://dummyimage.com/128x170/707070/000000.png&text=Unavailable',
  title: 'Book Title',
  subtitle: '',
  description: '',
  author: 'Unknown',
  rating: 'Unrated',
};

class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object,
    moveBookHandler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    book: {},
  };

  render() {
    const { book, moveBookHandler } = this.props;

    return (
      <div className="card-container">
        <img
          className="card-image"
          src={book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : FALLBACK.image}
          alt={book.description || FALLBACK.description}
        />
        <div className="card-right">
          <h3>{book.title || FALLBACK.title}</h3>
          <p className="card-text">{book.subtitle || FALLBACK.subtitle}</p>
          <p className="card-text">{`Author: ${book.authors || FALLBACK.author}`}</p>
          <p className="card-text">{`Rating: ${book.averageRating || FALLBACK.rating}`}</p>
          <div className="card-buttons">
            <span className="card-text">Move to: </span>
            {book.shelf !== SHELF.cr ? <button type="button" onClick={() => moveBookHandler(book, SHELF.cr)}>Currently Reading</button> : null}
            {book.shelf !== SHELF.wtr ? <button type="button" onClick={() => moveBookHandler(book, SHELF.wtr)}>Want to Read</button> : null}
            {book.shelf !== SHELF.r ? <button type="button" onClick={() => moveBookHandler(book, SHELF.r)}>Read</button> : null}
            <button type="button" onClick={() => moveBookHandler(book, 'none')}>None</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
