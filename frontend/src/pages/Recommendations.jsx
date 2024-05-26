import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Recommendations.module.css';

function Card({ book }) {
    return (
        <div class={styles.card}>
            <div class={styles['card-image']}><img src={book.image_url} alt={book.title} /></div>
            <div class={styles['card-content']}>
                <h2 class={styles['card-title']}>{book.title}</h2>
                <p class={styles['card-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p class={styles['card-text']}>{book.author}</p>
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
        <div className={styles.Rekomen}>
            <center><h1>Recomended Books</h1></center>
            <div className={styles['cards-container']}>
                {books.map(book => (
                    <Card key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default Recommendations;
