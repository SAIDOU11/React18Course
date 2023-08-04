import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Tim Grover',
    title: 'Winning',
    img: 'https://timgrover.com/wp-content/uploads/2021/07/NYT-winning-1.png',
    id: 1,
  },

  {
    author: 'Cal Newport',
    title: "So Good They Can't Ignore You",
    img: 'https://i.ebayimg.com/images/g/OuAAAOSwuRJcrfN8/s-l500.jpg',
    id: 2,
  },

  {
    author: 'David Goggins',
    title: "Can't Hurt Me",
    img: 'https://davidgoggins.com/wp-content/uploads/2022/10/cant-hurt-me-group.jpg',
    id: 3,
  },
];

const BookList = () => {
  const someValue = 'Value returned';
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, displayValue } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
