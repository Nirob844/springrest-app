import React, { useEffect, useState } from 'react';

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
        <div>
          <div className="overflow-x-auto w-3/4 mx-auto">
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