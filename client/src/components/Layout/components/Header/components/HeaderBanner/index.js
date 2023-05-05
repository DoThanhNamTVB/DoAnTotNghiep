import { Link } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';

import images from '~/assets/images';
import routesConfig from '~/config/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCategory } from '~/store/actions';

function HeaderBanner() {
    //get all category
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    const { categories } = useSelector((state) => state.managerCategory);
    // console.log(categories);

    //end\

    const [categoryArr, setCategoryArr] = useState([]);

    useEffect(() => {
        setCategoryArr(categories);
    }, [categories]);

    return (
        <nav className="navbar navbar-expand-xl bg-light header-banner">
            <div className="container-fluid">
                <Link className="navbar-brand header-banner-logo" to={routesConfig.home}>
                    <img src={images.logo} alt="logo-thanhnamwatch" />
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
                    <form className="d-flex header-banner-search" role="search">
                        <input
                            className="input-search header-banner-search-item"
                            type="search"
                            placeholder="Tìm kiếm sản phẩm .."
                            aria-label="Search"
                            spellCheck="false"
                        />
                        <button className="btn btn-outline-success header-banner-search-item" type="submit">
                            <AiOutlineSearch />
                        </button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0 header-banner-menu">
                        <li className="nav-item">
                            <Link className="nav-link" to={routesConfig.home}>
                                Trang chủ
                            </Link>
                        </li>
                        {categoryArr?.length > 0 &&
                            categoryArr.slice(-2).map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={`/${item?.slug}`}>
                                            {item?.categoryName}
                                        </Link>
                                    </li>
                                );
                            })}
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to=""
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dòng sản phẩm khác
                            </Link>
                            <ul className="dropdown-menu">
                                {categoryArr?.length > 0 &&
                                    categoryArr.slice(0, -2).map((item, index) => {
                                        return (
                                            <li className="nav-item fs-4" key={index}>
                                                <Link className="nav-link" to={`/${item?.slug}`}>
                                                    {item?.categoryName}
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderBanner;
