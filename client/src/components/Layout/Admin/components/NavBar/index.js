import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCaretDown, AiFillHome } from 'react-icons/ai';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { HiClipboardList } from 'react-icons/hi';
import { IoWatch } from 'react-icons/io5';

import './NavBar.scss';
import routesConfig from '~/config/routes';
import images from '~/assets/images';

function NavBarAdmin() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark admin-page-nav">
                <div className="container-fluid">
                    <button className="navbar-toggler me-2" type="button" onClick={() => setOpen(!open)}>
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
                    </button>
                    <Link className="navbar-brand fw-bold me-auto" to={routesConfig.admin}>
                        THANHNAMWATCH
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto my-4 my-lg-0 px-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bạn tìm gì..."
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                    <FaSearch />
                                </button>
                            </div>
                        </form>
                        <ul className="navbar-nav mb-2 ps-5 mb-lg-0 admin-account">
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <BsFillPersonFill />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link className="dropdown-item admin-account-func" to="#">
                                            Quản lý tài khoản
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item admin-account-func" to="#">
                                            Đăng xuất
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Something else here
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={'sidebar-admin' + (open ? ' open' : '')}>
                <div className="sidebar-header">
                    <h5 className="sidebar-logo">
                        <img src={images.logo} alt="" />
                        {/* <span className="logo_name fw-bold fs-3">Admin</span> */}
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
                                            <FaUserAlt />
                                        </span>
                                        <span>Tài khoản</span>
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
                                            <Link to="#" className="nav-link px-5 ">
                                                <span>Thêm mới</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="nav-link px-5">
                                                <span>Danh sách tài khoản</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
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
                                            <Link to="#" className="nav-link px-5">
                                                <span>Thêm mới</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="nav-link px-5">
                                                <span>Danh sách danh mục</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
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
                                            <Link to="#" className="nav-link px-5">
                                                <span>Thêm mới</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="nav-link px-5">
                                                <span>Danh sách điện thoại</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link
                                className="nav-link px-3 sidebar-link"
                                data-bs-toggle="collapse"
                                to="#collapse4"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapse4"
                            >
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="me-3">
                                            <FaShoppingCart />
                                        </span>
                                        <span>Đơn hàng</span>
                                    </div>
                                    <span className="right-icon ms-auto">
                                        <AiOutlineCaretDown />
                                    </span>
                                </div>
                            </Link>
                            <div className="collapse" id="collapse4">
                                <div>
                                    <ul className="navbar-nav ps-3 ">
                                        <li>
                                            <Link to="#" className="nav-link px-5">
                                                <span>Thêm mới</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="nav-link px-5">
                                                <span>Danh sách đơn hàng</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

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
