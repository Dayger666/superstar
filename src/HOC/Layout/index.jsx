import React from 'react';

import Header from '@/components/Header';
/*import Footer from '@/components/Footer';*/

import styles from './styles.module.scss';

const Layout = ({
  children,
  header,
  footer,
}) => (
  <main className={styles.container}>
    <Header header={header} />
    {children}
   {/* <Footer footer={footer} />*/}
  </main>
);

export default Layout;
