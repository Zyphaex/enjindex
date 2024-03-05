import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Nav.module.css';

const navLinks = [
  { name: 'Avatars', href: '#avatars' },
  { name: 'Metaverse', href: '#metaverse' },
  { name: 'Art', href: '#art' },
  { name: 'Memberships', href: '#memberships' },
  { name: 'Commemorative', href: '#commemorative' },
];

const Nav = ({ links = navLinks }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav>
      <div className={styles.mobileSearch}>
        <div className={styles.hamburger} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchInput} placeholder="Search" />
          <button className={styles.searchButton}>
            <FiSearch />
        </button>
        </div>
      </div>
      <div className={styles.hamburger} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navLinks} ${isNavVisible ? styles.showNav : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Search" />
        <button className={styles.searchButton}>
          <FiSearch />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
