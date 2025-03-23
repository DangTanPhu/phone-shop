import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.component/Footer.module.css';

const Footer = () => {
  const encodedSvgLogo = "https://i.imgur.com/5xLuM2p.jpeg";
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>
            PomDu <br />
            VIỆT NAM
          </h3>
          <Link to="/ship">Chính sách giao hàng</Link>
          <Link to="/return">Chính sách đổi trả</Link>
          <Link to="/the-qua-tang">Thẻ quà tặng PomDu</Link>
        </div>
        <div className={styles.footerColumn}>
          <h3>THÔNG TIN CỬA HÀNG</h3>
          <Link to="/stores">Hệ thống cửa hàng</Link>
          <Link to="/lien-he">Liên hệ</Link>
          <Link to="/brand">Bảo vệ thương hiệu</Link>
        </div>
        <div className={styles.footerColumn}>
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <Link to="/ho-tro-khach-hang">Trung tâm hỗ trợ</Link>
          <Link to="/dang-ky-nhan-tin">Đăng ký nhận tin mới nhất</Link>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.socialLinksContainer}>
            <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/dt_phu/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                  alt="Instagram"
                />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100023047537676" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"
                  alt="Facebook"
                />
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSeparator}></div>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <img src={encodedSvgLogo} alt="OBEY Logo" className={styles.footerLogo} />
          <span>PomDu VIỆT NAM</span>
        </div>
        <div className={styles.legalLinks}>
          <Link to="/service">Điều khoản dịch vụ</Link>
          <Link to="/privacy">Chính sách bảo mật</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;