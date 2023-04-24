import { Link } from 'react-router-dom';
import { MdOutlineWifiCalling3, MdEmail } from 'react-icons/md';

import Logo from '~/components/Logo';
import './Footer.scss';

function Footer() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();

    return (
        <>
            <div className="footer row">
                <div className="col-12 col-lg-4 p-5">
                    <Logo className="text-center" />
                    <h2>ThanhNamWatch - Chất lượng - Uy tín</h2>
                    <div>
                        <br />
                        <hr />
                    </div>
                    <div className="footer-content">
                        Hệ thống bán lẻ đồng hồ, kính mát, gọng kính, tròng kính chính hãng, phân phối chính thức tại
                        Việt Nam từ các thương hiệu hàng đầu thế giới - Full VAT - Bảo hành hãng - Hàng hóa sẵn sàng
                    </div>
                    <div>
                        <br />
                        <hr />
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-5">
                    <h2 className="footer-title">Hỗ trợ khách hàng</h2>
                    <div>
                        <br />
                        <hr />
                    </div>
                    <ul className="footer-content">
                        <li>
                            <Link to="">Giới thiệu</Link>
                        </li>
                        <li>
                            <Link to="">Chính sách đổi trả</Link>
                        </li>
                        <li>
                            <Link to="">Chính sách bảo hành</Link>
                        </li>
                        <li>
                            <Link to="">Chính sách bảo mật</Link>
                        </li>
                        <li>
                            <Link to="">Điều khoản và Điều Kiện thanh toán</Link>
                        </li>
                    </ul>
                    <div>
                        <br />
                        <hr />
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-5">
                    <h2 className="footer-title">Chăm sóc khách hàng</h2>
                    <div>
                        <br />
                        <hr />
                    </div>
                    <div className="footer-content">
                        <div>
                            <Link to="tel:0246686988">
                                <MdOutlineWifiCalling3 />
                                <span>024.6686.9898</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="mailto:thanhnamtvb@gmail.com">
                                <MdEmail />
                                <span>thanhnamtvb@gmail.com</span>
                            </Link>
                        </div>
                        <div>
                            <br />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right text-center">Copyright &copy; {year} Đỗ Thành Nam</div>
        </>
    );
}

export default Footer;
