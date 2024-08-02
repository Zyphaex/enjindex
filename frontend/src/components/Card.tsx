import styles from "./Card.module.css";

interface CardProps {
  name: string;
  id: string;
  collection: string;
  type: string;
  imageUrl: string;
  link: string;
  onCardClick: (token: any) => void;
}

function Card({
  name,
  collection,
  type,
  imageUrl,
  link,
  onCardClick,
}: CardProps) {
  const handleClick = () => {
    const token = { name, collection, type, imageUrl, link };
    onCardClick(token);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h3>{name}</h3>
      <h4>{collection}</h4>
      <p>{type}</p>
      <img src={imageUrl} alt={name} loading="lazy" />
    </div>
  );
}

export default Card;
