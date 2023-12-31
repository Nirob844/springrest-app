import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddBook = async () => {
    try {
      const response = await fetch('http://localhost:8080/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add book');
      }
      toast.success('Add successful', {
        duration: 3000,
        position: 'top-center',
      });
      // Optionally, you can handle success or redirect the user after adding the book
      console.log('Book added successfully');
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
       <h1 className='text-3xl font-bold text-center m-5'>Book Management System</h1>
      <div className='flex justify-between m-5'>
      <h1 className="text-xl font-bold">Book</h1>
      <Link to='/'><button className="btn btn-info ">Back Home</button></Link>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="id" className="text-sm font-semibold block mb-2">
            Id
          </label>
          <input
            id="id"
            type="text"
            value={id}
            placeholder="Type here id"
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="text-sm font-semibold block mb-2">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            placeholder="Type here title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="text-sm font-semibold block mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            placeholder="Type here description"
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>

        <button
          type="button"
          onClick={handleAddBook}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
