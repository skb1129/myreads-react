import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/BookCard.css';

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
        <img className="card-image" src={book.imageLinks.thumbnail} alt={book.description} />
        <div>
          <h3>{book.title}</h3>
          <p>{book.subtitle}</p>
          <p>{`Rating: ${book.averageRating || 'Unrated'}`}</p>
        </div>
      </div>
    );
  }
}

export default BookCard;
