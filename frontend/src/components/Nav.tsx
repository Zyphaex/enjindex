import { useState, useEffect, useRef } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import styles from "./Nav.module.css";

interface NavProps {
  links?: { name: string; href: string }[];
  onNavLinkClick: (filterName: string) => void;
  onSearchChange: (searchQuery: string) => void;
}

const navLinks = [
  { name: "All", href: "#" },
  { name: "Avatars", href: "#avatars" },
  { name: "Metaverse", href: "#metaverse" },
  { name: "Art", href: "#art" },
  { name: "Memberships", href: "#memberships" },
  { name: "Commemorative", href: "#commemorative" },
];

const Nav = ({
  links = navLinks,
  onNavLinkClick,
  onSearchChange,
}: NavProps) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    onNavLinkClick(name);
    if (name === "All") {
      setSearchQuery("");
      onSearchChange("");
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <nav ref={navRef}>
      <div className={styles.mobileSearch}>
        <div className={styles.hamburger} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className={styles.hamburger} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`${styles.navLinks} ${isNavVisible ? styles.showNav : ""}`}
      >
        {links.map((link) => (
          <li key={link.name} className="navLink">
            <a href={link.href} onClick={(e) => handleLinkClick(e, link.name)}>
              {link.name === "All" ? (
                <FaHome className={styles.navHome} />
              ) : (
                link.name
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          className={styles.searchInput}
          placeholder="Search"
          onChange={handleSearchChange}
        />
        <button className={styles.searchButton}>
          <FaSearch />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
