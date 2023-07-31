import React from "react";
import Image from "./Image";
import Title from "./Title";
import Author from "./Author";
import "../index.css";

const Book = (props) => {
  const { url, title, author, id, getBooks, number } = props; //destructuring
  // const onClickFunc = (e) => {
  //   e.preventDefault();
  //   getBooks(id);
  // };
  return (
    <div className="book ">
      {/* <div style={{backgroundColor:'red',paddingTop:'2rem'}}></div> */}
      <div>
         <Image url={url} />
      </div>
     <div className="title">
      <Title title={title} />
     </div>
      
      {/* <button onClick={onClickFunc} >
        Click me
      </button> */}
      <div>
        <Author author={author} />
      </div>
      <span className="tag">#{number +1}</span>
      
    </div>
  );
};

export default Book;
