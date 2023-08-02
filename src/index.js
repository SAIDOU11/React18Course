import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const author = 'David Goggins';
const title = "Can't Hurt Me";
const img = './images/cant-hurt-me.jpg';

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} />
      <Book title="random title" number={23} />
    </section>
  );
};

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
