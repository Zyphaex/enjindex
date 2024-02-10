import styles from './Nav.module.css';

const navLinks = [
    { name: 'Avatars', href: '#avatars' },
    { name: 'Metaverse', href: '#metaverse' },
    { name: 'Art', href: '#art' },
    { name: 'Memberships', href: '#memberships' }
  ];

const Nav = ({ links = navLinks }) => {
    return (
      <nav>
        <ul className={styles.navLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

export default Nav;
