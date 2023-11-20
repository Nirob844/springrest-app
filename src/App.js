import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddBook from "./pages/AddBook";
import Books from "./pages/Book";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddBook />} />
        <Route path="/" element={<Books />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
