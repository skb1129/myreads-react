const api = 'https://reactnd-books-api.udacity.com';

let { token } = localStorage;
if (!token) {
  token = Math.random().toString(36).substr(-8);
  localStorage.token = token;
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

const get = bookId => fetch(`${api}/books/${bookId}`, { headers })
  .then(res => res.json())
  .then(data => data.book);

const getAll = () => fetch(`${api}/books`, { headers })
  .then(res => res.json())
  .then(data => data.books);

const update = (book, shelf) => fetch(`${api}/books/${book.id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ shelf }),
}).then(res => res.json());

const search = query => fetch(`${api}/search`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query }),
}).then(res => res.json())
  .then(data => data.books);

export {
  get,
  getAll,
  update,
  search,
};
