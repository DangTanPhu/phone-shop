import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Import CSS riêng

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
    navigate("/dashboard"); // Điều hướng sau khi đăng nhập thành công
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
