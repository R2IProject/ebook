import React, { useState } from 'react';
import axios from 'axios';
import './Discover.css'; // Importing CSS for Discover page

function Discover() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:3001/books?search=${search}`)
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    };

    return (
        <div className="dark-container">
            <h1>Discover Books</h1>
            <input 
                type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                placeholder="Search for a book" 
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {books.map(book => (
                    <div key={book.id} className="book">
                        <h2>{book.tittle}</h2>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Discover;
