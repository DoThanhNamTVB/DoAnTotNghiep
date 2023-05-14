import Button from '~/components/Button';
import routesConfig from '~/config/routes';
import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';

import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { AiFillClockCircle, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonFill, BsFillCartFill } from 'react-icons/bs';
import { IoLogOutOutline, IoLogInOutline } from 'react-icons/io5';
import * as actions from '~/store/actions';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import noImage from '~/assets/images/no-image.png';

// import images from '~/assets/images';

function HeaderBanner() {
    const dispatch = useDispatch();

    const { isLoggedIn, user } = useSelector((state) => state.auth);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(actions.logout());
    };
    //dispatch setting
    useEffect(() => {
        dispatch(actions.getAllSetting());
    }, [dispatch]);
    const { settings } = useSelector((state) => state.setting);
    // console.log(settings[0].phone);

    //dispatch cart
    useEffect(() => {
        dispatch(actions.getCartByUserId(user?.id));
    }, [dispatch, user]);
    const { carts } = useSelector((state) => state.managerCart);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const count = carts?.reduce((accumulator, currentValue) => accumulator + currentValue?.quantity, 0);
        setQuantity(count);
    }, [carts]);

    return (
        <div className="header-contact-content row justify-content-center align-items-center py-2">
            {settings?.length > 0 && (
                <div className="header-contact-content-left col-10">
                    <ul className="header-contact-list">
                        <li className="header-contact-list-item">
                            <Link
                                to={`mailto:${settings[0]?.email}`}
                                data-tooltip-id="email"
                                data-tooltip-content={settings[0]?.email}
                            >
                                <MdEmail />
                                <span>{settings[0]?.email}</span>
                            </Link>
                        </li>
                        <li className="header-contact-list-item">
                            <Link data-tooltip-id="time" data-tooltip-content={settings[0]?.time}>
                                <AiFillClockCircle />
                                <span>{settings[0]?.time}</span>
                            </Link>
                        </li>
                        <li className="header-contact-list-item">
                            <Link
                                to={`tel:${settings[0]?.phone}`}
                                data-tooltip-id="phone"
                                data-tooltip-content={settings[0]?.phone}
                            >
                                <AiFillPhone />
                                <span>{settings[0]?.phone}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            <div className="header-contact-content-right col-2 text-end">
                <ul className="header-contact-content-right-items d-flex justify-content-end align-items-center">
                    <li>
                        {isLoggedIn ? (
                            <div className="dropdown">
                                <div
                                    className="btn btn-secondary dropdown-toggle d-flex justify-content-center align-items-center bg-transparent p-0"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Button primary circle>
                                        {user?.img ? (
                                            <img
                                                src={process.env.REACT_APP_SERVER_URL + user?.img}
                                                alt="anh dai dien"
                                            />
                                        ) : (
                                            <img src={noImage} alt="anh dai dien" />
                                        )}
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
                                        <Link className="dropdown-item p-3 fw-bold" to={routesConfig.loginPage}>
                                            <IoLogInOutline /> <span>Đăng nhập</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-3 fw-bold" to={routesConfig.registerPage}>
                                            <IoLogOutOutline /> <span>Đăng kí</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="button-cart">
                        <Button primary circle to={isLoggedIn ? routesConfig.cartPage : routesConfig.loginPage}>
                            <BsFillCartFill />
                        </Button>
                        {/* <span className="qty-product-cart">1</span> */}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {quantity}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </li>
                </ul>
            </div>
            <Tooltip id="email" />
            <Tooltip id="time" />
            <Tooltip id="phone" />
        </div>
    );
}

export default HeaderBanner;
