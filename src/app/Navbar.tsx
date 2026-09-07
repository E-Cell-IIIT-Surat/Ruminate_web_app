"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setPendingPath(null);
    setIsMenuOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/team', label: 'Our Team' },
    { href: '/ssip', label: 'SSIP' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/events/abhyudaya', label: 'UDHBHAV' },
    { href: '/gallary', label: 'Gallery' },
  ];

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${pathname === '/' && !isScrolled ? styles.homeTop : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/brand-mark.webp"
            alt="Ruminate"
            className={styles.logoImage}
            width={96}
            height={145}
            sizes="40px"
            priority
          />
          <span className={styles.logoText}>
            <span className={styles.brand}>Ruminate</span>
            <span className={styles.tagline}>E-CELL IIIT SURAT</span>
          </span>
        </Link>

        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.mobileMenuLogoLink} onClick={closeMenu}>
              <Image src="/brand-mark.webp" alt="Ruminate" className={styles.mobileMenuLogo} width={96} height={145} sizes="44px" />
              <span className={styles.mobileMenuBrand}>Ruminate</span>
            </Link>
            <span className={styles.mobileMenuLabel}>Navigate the ecosystem</span>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`)) ? styles.navLinkActive : ''} ${pendingPath === item.href ? styles.navLinkPending : ''}`}
              onClick={() => { setPendingPath(item.href); closeMenu(); }}
              aria-current={pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`)) ? 'page' : undefined}
            >
              <span>{item.label}</span>{pendingPath === item.href && <span className={styles.pendingDot} aria-hidden="true" />}
            </Link>
          ))}
          <div className={styles.mobileMenuMeta}>
            <span>Foster the spark.</span>
            <div className={styles.mobileMenuSocials}>
              <a href="https://www.instagram.com/ecell_iiits/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/ecell.iiits/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/company/e-cell-iiit-surat/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
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
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
