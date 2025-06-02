import React from 'react';
import Header from '../components/Header';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="login-container">
        <h2>Đăng Nhập</h2>
        <form className="login-form">
          <input type="text" placeholder="Tên đăng nhập" />
          <input type="password" placeholder="Mật khẩu" />
          <button type="submit">Đăng Nhập</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
