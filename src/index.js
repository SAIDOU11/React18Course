import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Tim Grover',
    title: 'Winning',
    img: 'https://m.media-amazon.com/images/I/61dJJaKOeOL._AC_UL400_.jpg',
    id: 1,
  },

  {
    author: 'Robert Green',
    title: 'Mastery',
    img: 'https://m.media-amazon.com/images/I/61kZgW7wemL._AC_UL400_.jpg',
    id: 2,
  },

  {
    author: 'David Goggins',
    title: "Can't Hurt Me",
    img: 'https://m.media-amazon.com/images/I/61pDNU9qEGL._AC_UL400_.jpg',
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
