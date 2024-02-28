import Button from '~/components/Button';
import routesConfig from '~/config/routes';
import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';

import { Link } from 'react-router-dom';
import { MdEmail, MdWorkHistory } from 'react-icons/md';
import { AiFillClockCircle, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonFill, BsFillCartFill, BsFillClipboardHeartFill } from 'react-icons/bs';
import { IoLogOutOutline, IoLogInOutline } from 'react-icons/io5';
import * as actions from '~/store/actions';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import noImage from '~/assets/images/no-image.png';
import formatter from '~/components/FuntionComponent/formatPrice';
import images from '~/assets/images';
import './headerContact.scss';

function HeaderContact() {
    const dispatch = useDispatch();

    const { isLoggedIn, user, role } = useSelector((state) => state.auth);

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

    //dispatch product favourite
    useEffect(() => {
        dispatch(actions.getAnUser(user?.id));
    }, [user, dispatch]);

    const { account } = useSelector((state) => state.managerUser);
    // console.log(account);
    const [payload, setPayload] = useState({
        userId: '',
        productId: '',
    });

    useEffect(() => {
        setPayload((pre) => ({ ...pre, userId: user?.id }));
    }, [user]);

    const handleDeleteFavorite = (productId) => {
        const finalData = { ...payload, productId: productId };
        dispatch(actions.deleteProductFavourite(finalData));
        dispatch(actions.getAnUser(user?.id));
    };

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
                        {isLoggedIn && !role ? (
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
                    {isLoggedIn && !role && (
                        <li className="button-cart">
                            <div
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                            >
                                <Button primary circle to={!isLoggedIn && routesConfig.loginPage}>
                                    <BsFillClipboardHeartFill />
                                </Button>
                            </div>

                            <div
                                className="offcanvas offcanvas-end"
                                tabIndex="-1"
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel"
                            >
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                                        Offcanvas right
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="offcanvas-body">
                                    {account?.Product_Favourites?.length > 0 &&
                                        account?.Product_Favourites?.map((item, index) => {
                                            return (
                                                <div key={index} className="d-flex  justify-content-between">
                                                    <div data-bs-dismiss="offcanvas">
                                                        <Link
                                                            to={`/${item?.Category?.slug}/product-detail/${item?.id}`}
                                                            className="props-product text-black"
                                                        >
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex text-start py-3">
                                                                    <div className="image-product-search pe-3">
                                                                        <img
                                                                            src={
                                                                                item?.Colors?.length > 0
                                                                                    ? process.env.REACT_APP_SERVER_URL +
                                                                                      item?.Colors[0]?.Product_Color
                                                                                          ?.img
                                                                                    : images.noImage
                                                                            }
                                                                            alt="product-img"
                                                                        />
                                                                    </div>
                                                                    <div className="content-product">
                                                                        <b>{item?.productName}</b>
                                                                        <div>
                                                                            <span className="pe-4 text-danger fs-3">
                                                                                {formatter.format(
                                                                                    (item.price *
                                                                                        (100 - item.discount)) /
                                                                                        100
                                                                                )}
                                                                            </span>
                                                                            <del>{formatter.format(item.price)}</del>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => handleDeleteFavorite(item.id)}
                                                        >
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </li>
                    )}

                    {isLoggedIn && !role && (
                        <li className="button-cart">
                            <Button primary circle to={isLoggedIn ? routesConfig.historyOrder : routesConfig.loginPage}>
                                <MdWorkHistory />
                            </Button>
                        </li>
                    )}
                    <li className="button-cart">
                        <Button
                            primary
                            circle
                            to={isLoggedIn && !role ? routesConfig.cartPage : routesConfig.loginPage}
                        >
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

export default HeaderContact;
