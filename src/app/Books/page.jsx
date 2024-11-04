"use client";
import styles from './Books.module.css';
import { getBooks } from '../../services/service/book';
import { useEffect, useState } from 'react';

const Books = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getBooks()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error); 
            });
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <h1>Books</h1>
                {products.length > 0 ? (
                    <div className={styles.cardContainer}>
                        {products.map(product => (
                            <div className={styles.card} key={product.id}>
                                <h3>{product.title}</h3>
                                <img src={product.image} alt={product.title} />
                                <p><strong>Price: ${product.price}</strong></p>
                                <div>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h2>No products found</h2>
                )}
            </div>
        </div>
    );
};

export default Books;
