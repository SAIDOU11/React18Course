import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const author = 'David Goggins'; // Props
const title = "Can't Hurt Me"; // Props
const img = './images/cant-hurt-me.jpg'; // Props

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} />
      <Book title="random title" number={23} />
    </section>
  );
};

// Props
const Book = () => {
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
