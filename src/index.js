import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./components/Book";
import "./index.css";
import { books } from "./components/JsonData/books";

const Index = () => {
//   const handleFormInput = (e) => {};

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     alert("formsubmited");
//   };
//   const handleSubmit = () => {
//   };
  const getBooks = (id) => {
    const book = books.find((i) => {
      return i.id === parseInt(id);
    });
  };

  return (
    <>
      <h2 style={{textAlign:'center'}}>Amazon Best Seller Books</h2>
      <div className="indexstyle">
        {/* <form onSubmit={handleOnSubmit}>
        <label>type</label>
        <input type="text" name="example" onChange={handleFormInput} />
      </form> */}
        {books.map((i, index) => {
          return (
            <Book
              key={i.id}
              title={i.title}
              url={i.image}
              author={i.author}
              id={i.id}
              number={index}
              getBooks={getBooks}
            />
          );
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
