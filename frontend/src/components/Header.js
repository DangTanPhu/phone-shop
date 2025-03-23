import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.component/Header.module.css';
import Menu from './Menu';
import SearchBar from './SearchBar';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Thanh trên cùng */}
      <div className={styles.topBar}>
        <p>UY TÍN SỐ 1 VN!</p>
        <div className={styles.socialIcons}>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-regular fa-envelope"></i></a>
        </div>
      </div>

      {/* Header chính */}
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.logo}>
              <img src="/logo.png" alt="Logo UDOSNEAKER" />
            </Link>
          </div>

          {/* Thanh tìm kiếm */}
          <div className={styles.searchBar}>
            <input type="text" placeholder="Tìm kiếm..." />
            <button><i className="fa fa-search"></i></button>
          </div>

          {/* Hành động người dùng */}
          <div className={styles.userActions}>
            {user ? (
              <>
                <Link to={user.role === 'admin' ? "/admin/profile" : "/user/profile"} className={styles.navLink}>
                  Thông tin
                </Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className={styles.navLink}>Quản Trị</Link>
                )}
                <button onClick={logout} className={styles.navLink}>Đăng Xuất</button>
              </>
            ) : (
              <Link to="/login" className={styles.navLink}>Đăng Nhập</Link>
            )}
            <Link to="/cart" className={styles.cartLink}>
              <i className="fa fa-shopping-bag"></i>
              <span className={styles.cartCount}>0</span>
              <span>GIỎ HÀNG / 0 VND</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Thanh menu */}
      <nav className={styles.navBar}>
        <Link to="/">TRANG CHỦ</Link>
        <Link to="/products">SẢN PHẨM</Link>
        <Link to="/about">GIỚI THIỆU</Link>
        <Link to="/news">TIN TỨC</Link>
      </nav>

      {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
