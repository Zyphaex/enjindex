import { useState } from 'react';
import styles from './Nav.module.css';

const navLinks = [
  { name: 'Avatars', href: '#avatars' },
  { name: 'Metaverse', href: '#metaverse' },
  { name: 'Art', href: '#art' },
  { name: 'Memberships', href: '#memberships' }
];

const Nav = ({ links = navLinks }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav>
      <div className={styles.mobileTopRow}>
        <div className={styles.hamburger} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchInput} placeholder="Search" />
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
      </div>
    </nav>
  );
}

export default Nav;
