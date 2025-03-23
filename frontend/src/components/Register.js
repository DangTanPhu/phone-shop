import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css"; // Import CSS riêng

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Attempt:", { name, email, password });
    navigate("/login"); // Điều hướng sau khi đăng ký thành công
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
};

export default Register;
