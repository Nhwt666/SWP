import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/HomePage.css';

const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // chuyển ảnh mỗi 3 giây
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero-buttons">
            <a href="#" className="btn">Trang Chủ</a>
            <a href="#" className="btn">Đăng ký xét nghiệm</a>
            <a href="#" className="btn">Bảng giá</a>
            <a href="#" className="btn">Hướng dẫn tự thu mẫu</a>
            <a href="#" className="btn">Blog chia sẻ</a>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="slideshow">
            <img src={images[current]} className="slide" alt={`Ảnh ${current + 1}`} />
          </div>
          <h2 className="section-title">Về Chúng Tôi</h2>
          <p className="about-description">
            Chúng tôi là đơn vị tiên phong trong lĩnh vực xét nghiệm ADN tại Việt Nam...
          </p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Bệnh viện Xét nghiệm ADN. Mọi quyền được bảo lưu.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
