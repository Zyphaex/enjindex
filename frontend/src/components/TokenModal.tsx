import { useEffect, useState } from 'react';
import styles from './TokenModal.module.css';
import nftioLogo from '../assets/images/nftioLogo.webp';
import nftioLogoHover from '../assets/images/nftioLogoHover.webp';

interface TokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  token: {
    name: string;
    collection: string;
    type: string;
    imageUrl: string;
    link: string;
  };
}

const TokenModal: React.FC<TokenModalProps> = ({ isOpen, onClose, token }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && target.classList.contains(styles.modalOverlay)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>X</button>
        <h3>{token.name}</h3>
        <h4>{token.collection}</h4>
        <p>{token.type}</p>
        <img src={token.imageUrl} alt={token.name} />
        <div className={styles.nftioContainer}>
          <a
            className={styles.viewOnLink}
            href={token.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View on
            <img 
              src={isHovered ? nftioLogoHover : nftioLogo} 
              alt="View on NFT.io" 
              className={styles.nftioLogo} 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TokenModal;