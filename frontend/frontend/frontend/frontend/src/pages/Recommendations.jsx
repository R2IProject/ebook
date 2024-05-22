import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Recomendations.css'

function Card({ book }) {
    return (
        <div className="card">
            <img src={book.imageUrl} alt={book.title} />
            <div className="card-content">
                <h2>{book.title}</h2>
                <p>By {book.author}</p>
            </div>
        </div>
    );
}

function Recommendations() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    return (
        <div className="Rekomen">
            <h1>Recommended Books</h1>
            <div className="cards-container">
                {books.map(book => (
                    <Card key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default Recommendations;
