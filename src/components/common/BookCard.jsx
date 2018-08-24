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

  state = {
    currentShelf: 'none',
  };

  componentDidMount() {
    const { book } = this.props;
    this.setState({
      currentShelf: book.shelf || SHELF.none,
    });
  }

  render() {
    const { book, moveBookHandler } = this.props;
    const { currentShelf } = this.state;

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
            <button
              disabled={currentShelf === SHELF.cr}
              className={currentShelf === SHELF.cr ? 'current-shelf' : 'button'}
              type="button"
              onClick={() => moveBookHandler(book, SHELF.cr)}
            >
              Currently Reading
            </button>
            <button
              disabled={currentShelf === SHELF.wtr}
              className={currentShelf === SHELF.wtr ? 'current-shelf' : 'button'}
              type="button"
              onClick={() => moveBookHandler(book, SHELF.wtr)}
            >
              Want to Read
            </button>
            <button
              disabled={currentShelf === SHELF.r}
              className={currentShelf === SHELF.r ? 'current-shelf' : 'button'}
              type="button"
              onClick={() => moveBookHandler(book, SHELF.r)}
            >
              Read
            </button>
            <button
              disabled={currentShelf === SHELF.none}
              className={currentShelf === SHELF.none ? 'current-shelf' : 'button'}
              type="button"
              onClick={() => moveBookHandler(book, SHELF.none)}
            >
              None
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
