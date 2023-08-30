import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { leftNavbarItems } from '@/components/Header/utils/data';
import Marker from '@/components/Icons/Marker';

import styles from './styles.module.scss';

const MobileMenu = ({ navRef }) => (
  <div className='hidden' ref={navRef} >
    <div className={styles.mobileMenu}>
      <ul>
        {leftNavbarItems.map(item => (
          <li key={item}>
            <NextLink href="/">
              {item}
            </NextLink>
          </li>
        ))}
      </ul>
      <div>
        <button className="btn btn-dark-outline">Sign in</button>
        <button className="btn btn-dark">Join now</button>
        <div>
          <NextLink href="/">
            <Marker />
            <span>Find a store</span>
          </NextLink>
        </div>
      </div>
    </div>
  </div>
)

MobileMenu.propsType = {
  navRef: PropTypes.instanceOf(Object).isRequired,
};

export default MobileMenu;
