"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import { GiMountains } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";


export default function Header({ business, commons }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* BRAND */}
          <a
            href="#"
            className={styles.brand}
            aria-label={business.brand.name}
            onClick={closeMenu}
          >
            <span className={styles.logo}>
              <GiMountains />
            </span>

            <span className={styles.brandText}>
              <strong>{business.brand.shortName}</strong>
              <small>Counseling</small>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className={styles.nav}>
            {commons.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a href="#contact" className={styles.cta}>
            Schedule a consultation
            <span><IoIosArrowDroprightCircle /></span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <nav>
            {commons.navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
                <span>↗</span>
              </a>
            ))}
          </nav>

          <a href="#contact" className={styles.mobileCta} onClick={closeMenu}>
            Schedule a consultation
            <span><IoIosArrowDroprightCircle /></span>
          </a>
        </div>
      </div>
    </header>
  );
}
