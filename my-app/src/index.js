import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { books } from "./book";
import Book from "./SingleBook";

const BookList = () => {
  const getBook = (id) => {
    console.log(id);
    const book = books.find((value) => value.id === id);
    console.log(book);
  };
  return (
    <div className="bookList">
      <header>
        <h2>Amazon Best Books</h2>
        <div className="underline"></div>
      </header>
      {/* <img src={img} /> */}
      <section className="books">
        {books.map((book, index) => {
          return <Book key={index} {...book} getBook={getBook} />;
        })}
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
