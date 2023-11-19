import React, { useState } from 'react';

const AddBook = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddBook = () => {
    // Implement your logic to add a new book
    console.log('Adding new book:', { id,title, description });
    // Optionally, you can redirect the user to the book list or perform other actions after adding the book
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
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
