import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SHELF } from '../../constants';

import '../../styles/BookCard.css';

const FALLBACK = {
  image: 'https://placehold.it/128x170',
  title: 'Book Title',
  rating: 'Unrated',
};

class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object,
  };

  static defaultProps = {
    book: {},
  };

  render() {
    const { book } = this.props;

    return (
      <div className="card-container">
        <img className="card-image" src={book.imageLinks.thumbnail || FALLBACK.image} alt={book.description} />
        <div className="card-right">
          <h3>{book.title || FALLBACK.title}</h3>
          <p className="card-text">{book.subtitle}</p>
          <p className="card-text">{`Rating: ${book.averageRating || FALLBACK.rating}`}</p>
          <div className="card-buttons">
            <span className="card-text">Move to: </span>
            {book.shelf !== SHELF.cr ? <button type="button">Currently Reading</button> : null}
            {book.shelf !== SHELF.wtr ? <button type="button">Want to Read</button> : null}
            {book.shelf !== SHELF.r ? <button type="button">Read</button> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
