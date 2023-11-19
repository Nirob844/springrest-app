import React from "react";
import AddBook from "./AddBook";
import Book from "./Book";

const Home = () => {
  return (
    <div className="m-5">
      <p className="text-3xl font-bold">Book management system</p>
      <Book/>
      <AddBook />
    </div>
  );
};

export default Home;
