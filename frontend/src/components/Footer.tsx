import { useState } from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import ntuLogoTitle from "../assets/images/ntuLogoTitle.webp";
import ntuLogoTitleHover from "../assets/images/ntuLogoTitleHover.webp";

const Footer = () => {
  // Social Media Links
  const socialMediaLinks = [
    { name: "Twitter", url: "https://x.com/Zyphaex", icon: faXTwitter },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/samhillier/",
      icon: faLinkedin,
    },
    { name: "GitHub", url: "https://github.com/Zyphaex", icon: faGithub },
    { name: "YouTube", url: "https://youtube.com/@Zyphaex", icon: faYoutube },
    {
      name: "Discord",
      url: "https://discord.com/invite/XfZHVfPr9C",
      icon: faDiscord,
    },
  ];

  // Footer Links
  const footerLinks = [
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
    { name: "Terms & Conditions", href: "terms" },
    { name: "Privacy Policy", href: "privacy" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const renderSocialMediaLinks = () => {
    return (
      <ul className={styles.footerSocial} aria-label="Social Media Links">
        {socialMediaLinks.map((socialLink) => (
          <li key={socialLink.name}>
            <a
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLink.name}
            >
              <FontAwesomeIcon icon={socialLink.icon} />
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderFooterLinks = () => {
    return (
      <ul className={styles.footerLinks} aria-label="Footer Navigation">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a href={`#${link.href}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer>
      <section className={styles.footerContainer}>
        <a
          className={styles.footerLogo}
          href="https://github.com/Zyphaex/fyp2024"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? ntuLogoTitleHover : ntuLogoTitle}
            alt="Nottingham Trent University"
          />
        </a>
        {renderFooterLinks()}
      </section>
      <section className={styles.footerContainer}>
        {renderSocialMediaLinks()}
        <p className={styles.footerLegal}>
          &copy; {new Date().getFullYear()} Sam Hillier. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
