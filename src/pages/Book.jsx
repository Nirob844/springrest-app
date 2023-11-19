import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/books');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setBooks(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 

    const handleEdit = (bookId) => {
        // Implement your edit logic here
        console.log(`Edit book with ID: ${bookId}`);
      };
    
      const handleDelete = (bookId) => {
        // Implement your delete logic here
        console.log(`Delete book with ID: ${bookId}`);
      };

    return (
        <div className='w-3/4 mx-auto'>
            <p className='text-3xl font-bold text-center m-5'>Book Management System</p>
            <div className="flex justify-between items-center m-3">
            <p className="text-xl">Book List</p>
            <Link to="/add" className="ml-3"><button className="btn btn-info">Add new book</button></Link>
            </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>description</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book.id}>
                    <th>{index + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                    <td>
                  <button onClick={() => handleEdit(book.id)} className="btn btn-primary">Edit</button>
                  <button onClick={() => handleDelete(book.id)} className="btn btn-error">Delete</button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default Book;