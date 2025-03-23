import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import styles from './MainLayout.module.css';
import ScrollToTopButton from '../components/ScrollToTopButton'; // Import nút cuộn lên đầu trang

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.layout}>
      <Header onMenuToggle={toggleMenu} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Thêm nút cuộn lên đầu trang */}
    </div>
  );
};

export default MainLayout;
