import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

const HomePage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // chuyển ảnh mỗi 3 giây
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />
            <section className="hero">
                <div className="container">
                    <div className="hero-buttons">
                        <Link to="/" className="btn">Trang Chủ</Link>
                        <Link to="/ticket" className="btn">Đăng ký xét nghiệm</Link>
                        <a href="#" className="btn">Bảng giá</a>
                        <a href="#" className="btn">Hướng dẫn tự thu mẫu</a>
                        <a href="#" className="btn">Blog chia sẻ</a>
                    </div>
                </div>
            </section>

            <section className="gallery">
                <div className="container">
                    <div className="slideshow">
                        <img src={images[currentImage]} className="slide" alt="Ảnh slide" />
                    </div>
                    <h2 className="section-title">Về Chúng Tôi</h2>
                    <p className="about-description">
                        Chúng tôi là đơn vị tiên phong trong lĩnh vực xét nghiệm ADN tại Việt Nam, với đội ngũ chuyên gia nhiều năm kinh nghiệm và hệ thống thiết bị hiện đại đạt chuẩn quốc tế.<br /><br />
                        Trong suốt quá trình hoạt động, chúng tôi đã thực hiện hàng chục nghìn ca xét nghiệm chính xác và bảo mật, hỗ trợ hiệu quả cho các nhu cầu như xác định huyết thống, pháp lý, di truyền và y tế.<br /><br />
                        Uy tín của chúng tôi được khẳng định qua sự tin tưởng từ khách hàng cá nhân, tổ chức và các cơ quan pháp luật.<br /><br />
                        Với sứ mệnh <strong>"Chính xác – Bảo mật – Nhanh chóng"</strong>, chúng tôi cam kết mang đến dịch vụ xét nghiệm ADN đáng tin cậy nhất.
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
