import React, { useState, useEffect } from 'react';
import styles from './style.component/ScrollToTopButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import biểu tượng mũi tên lên

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Theo dõi vị trí cuộn của trang
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) { // Hiển thị nút khi cuộn xuống hơn 500px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Xóa sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Hàm xử lý cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt mà
    });
  };

  return (
    isVisible && (
      <button className={styles.scrollToTopButton} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} /> {/* Biểu tượng mũi tên lên */}
        Lên đầu
      </button>
    )
  );
};

export default ScrollToTopButton; 