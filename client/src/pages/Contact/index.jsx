// import { Link } from 'react-router-dom';

import Logo from '~/components/Logo';
import './Contact.scss';

function Contact() {
    return (
        <>
            <div className="contact">
                <div className="logo-contact">
                    <Logo />
                </div>
                <div className="infowebsite-contact">
                    <h1>Hệ thống đồng hồ CASIO chính hãng</h1>
                    <div className="infowebsite-contact-item row justify-content-around">
                        <div className="col-12 col-md-3 p-3">
                            <h3>ThanhNamWatch xin cam kết : </h3>
                            <ul>
                                <li>Đồng hồ CASIO chính hãng</li>
                                <li>Giấy tờ xuất sứ rõ ràng</li>
                                <li>Hàng mới 100%</li>
                                <li>Chất lượng đảm bảo uy tín</li>
                                <li>Bảo hành 1 đổi 1</li>
                            </ul>
                        </div>
                        <div className="about-contact col-12 col-md-3 p-3">
                            <h3>Thông tin liên hệ : </h3>
                            <ul>
                                <li>Hotline : 024.6686.9898</li>
                                <li>Email : thanhnamtvb@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
