import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        </div>
      </div>
    );
  }
}

export default BookCard;
