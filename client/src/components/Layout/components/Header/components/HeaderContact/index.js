import Button from '~/components/Button';
import routesConfig from '~/config/routes';

import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { AiFillClockCircle, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonFill, BsFillCartFill } from 'react-icons/bs'; //icon-light-off : BsFillLightbulbOffFill
import { IoLogOutOutline, IoLogInOutline } from 'react-icons/io5';

// import images from '~/assets/images';

function HeaderBanner() {
    let currentUser = true;

    const handleLogout = () => {
        currentUser = false;
    };

    return (
        <div className="header-contact-content row justify-content-center align-items-center py-2">
            <div className="header-contact-content-left col-10">
                <ul className="header-contact-list">
                    <li className="header-contact-list-item">
                        <Link
                            to="mailto:thanhnamtvb@gmail.com"
                            data-bs-toggle="tooltip"
                            data-bs-title="thanhnamtvb@gmail.com"
                        >
                            <MdEmail />
                            <span>Email-Us</span>
                        </Link>
                    </li>
                    <li className="header-contact-list-item">
                        <Link>
                            <AiFillClockCircle />
                            <span>09:00 - 22:00</span>
                        </Link>
                    </li>
                    <li className="header-contact-list-item">
                        <Link to="tel:0123456788" data-bs-toggle="tooltip" data-bs-title="0123456788">
                            <AiFillPhone />
                            <span>0123456788</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="header-contact-content-right col-2 text-end">
                <ul className="header-contact-content-right-items d-flex justify-content-end align-items-center">
                    {/* <li>
                <Button primary circle>
                    <BsFillLightbulbFill />
                </Button>
            </li> */}
                    <li>
                        {currentUser ? (
                            <div className="dropdown">
                                <div
                                    className="btn btn-secondary dropdown-toggle d-flex justify-content-center align-items-center bg-transparent p-0"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Button primary circle>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2q9D5N5uF8NEZemph09ukfgMJpWHKbN2Hw&usqp=CAU"
                                            alt="anh dai dien"
                                        />
                                    </Button>
                                </div>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item p-3 fw-bold" to="/manager-info">
                                            <IoLogInOutline /> <span>Quản lý thông tin</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="button-logout">
                                            <Link className="dropdown-item p-3 fw-bold" to={routesConfig.home}>
                                                <IoLogOutOutline /> <span>Đăng xuất</span>
                                            </Link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="dropdown">
                                <div
                                    className="btn btn-secondary dropdown-toggle 
                        d-flex justify-content-center align-items-center bg-transparent p-0"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Button primary circle>
                                        <BsFillPersonFill />
                                    </Button>
                                </div>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item p-3 fw-bold" to={routesConfig.login}>
                                            <IoLogInOutline /> <span>Đăng nhập</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-3 fw-bold" to={routesConfig.register}>
                                            <IoLogOutOutline /> <span>Đăng kí</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="button-cart">
                        <Button primary circle to={routesConfig.cartPage}>
                            <BsFillCartFill />
                        </Button>
                        {/* <span className="qty-product-cart">1</span> */}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            12<span className="visually-hidden">unread messages</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderBanner;
