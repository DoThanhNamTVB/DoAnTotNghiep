import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsFillPersonFill, BsSmartwatch } from 'react-icons/bs';
import { AiOutlineCaretDown, AiFillHome, AiFillSetting } from 'react-icons/ai';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { HiClipboardList } from 'react-icons/hi';
import { IoWatch } from 'react-icons/io5';
import { IoMdColorPalette } from 'react-icons/io';
import { RiAdminFill } from 'react-icons/ri';
import * as actions from '~/store/actions';

import './NavBar.scss';
import routesConfig from '~/config/routes';
import images from '~/assets/images';
import { useDispatch, useSelector } from 'react-redux';

function NavBarAdmin() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const { role, adminCurrent } = useSelector((state) => state.auth);
    // console.log(adminCurrent);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(actions.logout());
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top admin-page-nav">
                <div className="container-fluid">
                    <button className="navbar-toggler me-2" type="button" onClick={() => setOpen(!open)}>
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
                    </button>
                    <Link className="navbar-brand fw-bold me-auto" to={routesConfig.admin}>
                        THANHNAMWATCH
                    </Link>
                    <ul className="navbar-nav mb-2 ps-5 mb-lg-0 admin-account">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {adminCurrent?.img ? (
                                    <img
                                        src={process.env.REACT_APP_SERVER_URL + adminCurrent?.img}
                                        alt="admin"
                                        width={20}
                                        height={20}
                                        className="object-fit-contain"
                                    />
                                ) : (
                                    <BsFillPersonFill className="fs-1" />
                                )}
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {/* <li>
                                    <Link className="dropdown-item admin-account-func  py-3" to="#">
                                        Quản lý tài khoản
                                    </Link>
                                </li> */}
                                <li>
                                    <button onClick={handleLogout} className="border-0 w-100 text-start bg-transparent">
                                        <Link
                                            className="dropdown-item admin-account-func  py-3"
                                            to={routesConfig.adminLogin}
                                        >
                                            Đăng xuất
                                        </Link>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={'sidebar-admin' + (open ? ' open' : '')}>
                <div className="sidebar-header">
                    <h5 className="sidebar-logo">
                        <img src={images.logo} alt="" />
                    </h5>
                </div>
                <nav className="navbar-dark sidebar-menu">
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/admin" className="nav-link px-3 active d-flex align-items-center">
                                <span className="me-3 d-flex align-items-center">
                                    <AiFillHome />
                                </span>
                                <span>Trang chủ</span>
                            </Link>
                        </li>

                        {role && role === 'Admin' && (
                            <li>
                                <Link
                                    className="nav-link px-3 sidebar-link"
                                    data-bs-toggle="collapse"
                                    to="#collapse1a"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapse1"
                                >
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span className="me-3">
                                                <RiAdminFill />
                                            </span>
                                            <span>Admin</span>
                                        </div>
                                        <span className="right-icon ms-auto">
                                            <AiOutlineCaretDown />
                                        </span>
                                    </div>
                                </Link>
                                <div className="collapse" id="collapse1a">
                                    <div>
                                        <ul className="navbar-nav ps-3 ">
                                            <li>
                                                <Link to={routesConfig.adminCreateAccount} className="nav-link px-5 ">
                                                    <span>Thêm mới</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routesConfig.adminManagerAccount} className="nav-link px-5">
                                                    <span>Danh sách tài khoản</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )}

                        <li>
                            <Link className="nav-link px-3 sidebar-link" to={routesConfig.userManager}>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="me-3">
                                            <FaUserAlt />
                                        </span>
                                        <span>Danh sách người dùng</span>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        {role && role === 'Admin' && (
                            <li>
                                <Link
                                    className="nav-link px-3 sidebar-link"
                                    data-bs-toggle="collapse"
                                    to="#collapse2"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapse2"
                                >
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span className="me-3">
                                                <HiClipboardList />
                                            </span>
                                            <span>Danh mục</span>
                                        </div>
                                        <span className="right-icon ms-auto">
                                            <AiOutlineCaretDown />
                                        </span>
                                    </div>
                                </Link>
                                <div className="collapse" id="collapse2">
                                    <div>
                                        <ul className="navbar-nav ps-3 ">
                                            <li>
                                                <Link to={routesConfig.categoryAdd} className="nav-link px-5">
                                                    <span>Thêm mới</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routesConfig.categoryManager} className="nav-link px-5">
                                                    <span>Danh sách danh mục</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )}
                        {role && role === 'Admin' && (
                            <li>
                                <Link
                                    className="nav-link px-3 sidebar-link"
                                    data-bs-toggle="collapse"
                                    to="#collapse2a"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapse2"
                                >
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span className="me-3">
                                                <IoMdColorPalette />
                                            </span>
                                            <span>Màu sắc</span>
                                        </div>
                                        <span className="right-icon ms-auto">
                                            <AiOutlineCaretDown />
                                        </span>
                                    </div>
                                </Link>
                                <div className="collapse" id="collapse2a">
                                    <div>
                                        <ul className="navbar-nav ps-3 ">
                                            <li>
                                                <Link to={routesConfig.colorAdd} className="nav-link px-5">
                                                    <span>Thêm mới</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routesConfig.colorManager} className="nav-link px-5">
                                                    <span>Danh sách màu sắc</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )}
                        {role && role === 'Admin' && (
                            <li>
                                <Link
                                    className="nav-link px-3 sidebar-link"
                                    data-bs-toggle="collapse"
                                    to="#collapse3"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapse3"
                                >
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span className="me-3">
                                                <IoWatch />
                                            </span>
                                            <span>Sản phẩm</span>
                                        </div>
                                        <span className="right-icon ms-auto">
                                            <AiOutlineCaretDown />
                                        </span>
                                    </div>
                                </Link>
                                <div className="collapse" id="collapse3">
                                    <div>
                                        <ul className="navbar-nav ps-3 ">
                                            <li>
                                                <Link to={routesConfig.productManagerAdd} className="nav-link px-5">
                                                    <span>Thêm mới</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routesConfig.productManagerEdit} className="nav-link px-5">
                                                    <span>Danh sách đồng hồ</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )}
                        {role && role === 'Nhân viên' && (
                            <li>
                                <Link
                                    to={routesConfig.productManagerEdit}
                                    className="nav-link px-3 active d-flex align-items-center"
                                >
                                    <span className="me-3 d-flex align-items-center">
                                        <BsSmartwatch />
                                    </span>
                                    <span>Danh sách đồng hồ</span>
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link
                                className="nav-link px-3 sidebar-link"
                                data-bs-toggle="collapse"
                                to="#collapse3a"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapse3a"
                            >
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="me-3">
                                            <FaShoppingCart />
                                        </span>
                                        <span>Quản lý đơn hàng</span>
                                    </div>
                                    <span className="right-icon ms-auto">
                                        <AiOutlineCaretDown />
                                    </span>
                                </div>
                            </Link>
                            <div className="collapse" id="collapse3a">
                                <div>
                                    <ul className="navbar-nav ps-3 ">
                                        <li>
                                            <Link to={routesConfig.orderComfirming} className="nav-link px-5 py-3">
                                                <span>Đơn hàng chưa xác nhận</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={routesConfig.orderConfirmed} className="nav-link px-5 py-3">
                                                <span>Đơn hàng đang giao</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={routesConfig.orderSuccess} className="nav-link px-5 py-3">
                                                <span>Đơn hàng đã giao</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={routesConfig.orderCancel} className="nav-link px-5 py-3">
                                                <span>Đơn hàng đã hủy</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {role && role === 'Admin' && (
                            <li>
                                <Link className="nav-link px-3 sidebar-link" to={routesConfig.setting}>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span className="me-3">
                                                <AiFillSetting />
                                            </span>
                                            <span>Quản lý thông tin website</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )}
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBarAdmin;
