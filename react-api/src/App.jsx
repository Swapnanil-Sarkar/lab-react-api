/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: {
        'Authorization': 'whatever-you-want'
      }
    })
    .then(response => {
      setBookData(response.data.books.slice(0, 12));
    })
    .catch(error => {
      console.error('Error fetching book data:', error);
    });
  }, []);

  return (
    <div>
      {bookData.length > 0 ? (
        <div>
          {bookData.map(book => (
            <div key={book.id}>
              <h1>{book.title}</h1>
              <img src={book.imageLinks.thumbnail} alt={book.title} />
              <p>Description: {book.description}</p>
              <p>Authors: {book.authors.join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
