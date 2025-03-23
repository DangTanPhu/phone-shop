import React from 'react';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate thay vì useHistory
import styles from './style.component/BackButton.module.css'; // Import module CSS

const BackButton = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate thay vì useHistory

  const handleGoBack = () => {
    navigate(-1); // Điều hướng trở lại trang trước đó
  };

  return (
    <button className={styles.backButton} onClick={handleGoBack}>
      &#8592; Quay lại
    </button>
  );
};

export default BackButton;
