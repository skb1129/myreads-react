import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <img src={book.imageLinks.thumbnail} alt={book.description} />
        <h3>{book.title}</h3>
        <p>{book.subtitle}</p>
        <p>
          Rated:
          <span>{book.averageRating}</span>
        </p>
      </div>
    );
  }
}

export default BookCard;
