import styles from './Card.module.css';

interface Card {
  name: string;
  collection: string;
  type: string;
  imageUrl: string;
  link: string;
}

function Card({ name, collection, type, imageUrl, link }: Card) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.card}>
        <h3>{name}</h3>
        <h4>{collection}</h4>
        <p>{type}</p>
        <img src={imageUrl} alt={name} />
      </div>
    </a>
  );
}

export default Card;
