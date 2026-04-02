"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/team', label: 'Our Team' },
    { href: '/ssip', label: 'SSIP' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/gallary', label: 'Gallery' },
  ];

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img
            src="/RUMINATEFRONT.png"
            alt="Ruminate"
            className={styles.logoImage}
          />
          <span className={styles.logoText}>
            <span className={styles.brand}>Ruminate</span>
            <span className={styles.tagline}>E-CELL IIIT SURAT</span>
          </span>
        </Link>

        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.mobileMenuLogoLink} onClick={closeMenu}>
              <img src="/RUMINATEFRONT.png" alt="Ruminate" className={styles.mobileMenuLogo} />
              <span className={styles.mobileMenuBrand}>Ruminate</span>
            </Link>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          
          {/* <div className={styles.socialIcons}>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div> */}
        </nav>

        <div className={`${styles.socialIcons} ${styles.desktopSocialIcons}`}>
          <a 
            href="https://www.instagram.com/ecell_iiits/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/ecell.iiits/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://www.linkedin.com/company/e-cell-iiit-surat/?originalSubdomain=in" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div 
          className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ''}`} 
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
