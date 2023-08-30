import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import NextLink from 'next/link';

import Marker from '@/components/Icons/Marker';
import MobileMenu from '@/components/MobileMenu';

import { leftNavbarItems } from './utils/data';
import styles from './styles.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  
  const navToggle = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('hidden');
      document.body.classList.toggle('no-scroll');
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarBrand}>
            <NextLink href='/'>
              <img src="img/logo.svg" alt="Starbucks" />
            </NextLink>
          </div>
          <ul className={styles.navbarNavLeft}>
            {leftNavbarItems.map(item => (
              <li key={item}>
                <NextLink href="/">
                  {item}
                </NextLink>
              </li>
            ))}
          </ul>
          <ul className={styles.navbarNavRight}>
            <li>
              <NextLink href="/">
                <Marker />
                <span>Find a store</span>
              </NextLink>
            </li>
            <li><button className="btn btn-dark-outline">Sign in</button></li>
            <li><button className="btn btn-dark">Join now</button></li>
          </ul>
          <button
            type="button"
            className={classNames(styles.hamburger, { [styles.open]: isOpen })}
            onClick={navToggle}
          >
            <span className={styles.hamburgerTop}/>
            <span className={styles.hamburgerMiddle}/>
            <span className={styles.hamburgerBottom}/>
          </button>
        </div>
      </nav>
      <MobileMenu navRef={navRef}/>
    </>
  )
}

export default Header;
