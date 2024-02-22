import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PriceTracker.module.css';
import enj from '../assets/images/enj.webp';


const PriceTracker = () => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await axios.get('/api/cryptocurrency/quotes/latest?symbol=ENJ', {
                    headers: {
                        'X-CMC_PRO_API_KEY': import.meta.env.VITE_CMC_API_KEY
                    }
                });
                const fetchedPrice = response.data?.data?.ENJ?.quote?.USD?.price;
                if (typeof fetchedPrice === 'number') {
                    setPrice(fetchedPrice);
                } else {
                    console.error('Invalid price format:', fetchedPrice);
                }
            } catch (error) {
                console.error('Error fetching ENJ price:', error);
            }
        };

        fetchPrice();
    }, []);

    return (
        <div className={styles.ticker}>
            <img src={enj} alt="ENJ" className={styles.icon} />ENJ
            {price !== null 
                ? <span className={styles.value}>${price.toFixed(2)}</span>
                : <span className={styles.value}>$?.??</span>}
        </div>
    );    
};

export default PriceTracker;
