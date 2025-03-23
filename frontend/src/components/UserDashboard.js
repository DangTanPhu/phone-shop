import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./style.component/UserDashboard.module.css";

const UserDashboard = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <img src="/images/user-placeholder.png" alt="User Avatar" />
          </div>
          <p className={styles.username}>admin #1</p>
        </div>

        <nav className={styles.navMenu}>
          <Link
            to="/user/profile"
            className={`${styles.navItem} ${location.pathname === "/user/profile" ? styles.active : ""}`}
          >
            Thông tin cá nhân
          </Link>
          <Link
            to="/user/orders"
            className={`${styles.navItem} ${location.pathname.startsWith("/user/orders") ? styles.active : ""}`}
          >
            Đơn hàng của tôi
          </Link>
          <Link to="/user/downloads" className={styles.navItem}>
            Tải xuống
          </Link>
          <Link to="/user/address" className={styles.navItem}>
            Địa chỉ
          </Link>
          <Link to="/user/account" className={styles.navItem}>
            Tài khoản
          </Link>
          <Link to="/logout" className={styles.navItem}>
            Thoát
          </Link>
        </nav>
      </div>

      <div className={styles.mainContent}>
        <h2>Xin chào <strong>admin</strong> (không phải admin? <Link to="/logout">Đăng xuất</Link>)</h2>
        <p>
          Từ bảng điều khiển tài khoản, bạn có thể xem các đơn hàng gần đây, quản lý địa chỉ giao hàng và
          thanh toán, chỉnh sửa mật khẩu và thông tin tài khoản.
        </p>

        <div className={styles.quickActions}>
          <Link to="/user/orders" className={styles.actionButton}>
            Đơn hàng
          </Link>
          <Link to="/user/downloads" className={styles.actionButton}>
            Tải xuống
          </Link>
          <Link to="/user/address" className={styles.actionButton}>
            Địa chỉ
          </Link>
          <Link to="/user/account" className={styles.actionButton}>
            Tài khoản
          </Link>
        </div>

        <div className={styles.contentArea}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
