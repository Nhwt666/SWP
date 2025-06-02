import React from 'react';
import Header from '../components/Header';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="register-container">
        <h2>Đăng Ký</h2>
        <form className="register-form">
          <input type="text" placeholder="Tên người dùng" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <button type="submit">Tạo Tài Khoản</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
