import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./PriceTracker.module.css";
import enjinLogo from "../assets/images/enjinLogo.webp";

const PriceTracker = () => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "/api/cryptocurrency/quotes/latest?symbol=ENJ",
          {
            headers: {
              "X-CMC_PRO_API_KEY": import.meta.env.VITE_CMC_API_KEY,
            },
          }
        );
        const fetchedPrice = response.data?.data?.ENJ?.quote?.USD?.price;
        if (typeof fetchedPrice === "number") {
          setPrice(fetchedPrice);
        } else {
          console.error("Invalid price format:", fetchedPrice);
        }
      } catch (error) {
        console.error("Error fetching ENJ price:", error);
      }
    };

    fetchPrice();
  }, []);

  return (
    <a
      href="https://coinmarketcap.com/currencies/enjin-coin/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="CoinMarketCap"
    >
      <div className={styles.ticker}>
        <img src={enjinLogo} alt="Enjin Coin" className={styles.icon} />
        ENJ
        {price !== null ? (
          <span className={styles.value}>${price.toFixed(2)}</span>
        ) : (
          <span className={styles.value}>$?.??</span>
        )}
      </div>
    </a>
  );
};

export default PriceTracker;
