"use client";
import styles from './Jewelery.module.css';
import { getJewelery } from '../../services/store';
import { useEffect, useState } from 'react';

const Jewelery = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getJewelery().then((res) => { setProducts(res); });

    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <h1>Jeweler</h1>
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

export default Jewelery;
