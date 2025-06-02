import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-title">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="logo" />
          </Link>
          <h1>Bệnh viện Xét nghiệm ADN</h1>
        </div>
        <div className="auth-links">
          <Link to="/login">Đăng nhập</Link>
          <Link to="/register">Đăng ký</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
