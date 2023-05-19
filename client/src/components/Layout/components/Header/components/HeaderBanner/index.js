import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';

import images from '~/assets/images';
import routesConfig from '~/config/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCategory, getProductSearch } from '~/store/actions';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PoperWrapper } from '~/components/Layout/Poper';
import formatter from '~/components/FuntionComponent/formatPrice';

function HeaderBanner() {
    const navigate = useNavigate();
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

    //code searchResult

    const [keySearch, setKeySearch] = useState('');
    const [keySearchTrim, setKeySearchTrim] = useState('');

    useEffect(() => {
        setKeySearchTrim(keySearch.trim());
    }, [keySearch]);

    useEffect(() => {
        if (keySearchTrim === '') {
            return;
        }
        if (keySearchTrim !== '') {
            dispatch(getProductSearch(keySearch));
        }
    }, [dispatch, keySearch, keySearchTrim]);

    const handleSubmit = () => {
        // dispatch(getProductSearch(keySearch));
        navigate(routesConfig.searchAdvanced);
    };
    const { productSearchs } = useSelector((state) => state.managerProduct);

    const handleClick = () => {
        setKeySearch('');
    };

    //end code searchResult

    return (
        <nav className="navbar navbar-expand-xl bg-light header-banner py-3">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    <Link className="navbar-brand header-banner-logo" to={routesConfig.home}>
                        <img src={images.logo} alt="logo-thanhnamwatch" />
                    </Link>
                </div>
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
                    <div className="search-container">
                        <div className="d-flex header-banner-search px-2">
                            <Tippy
                                visible={productSearchs.length > 0}
                                interactive
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        {productSearchs?.length > 0 && keySearchTrim ? (
                                            <PoperWrapper>
                                                {productSearchs?.map((item, index) => {
                                                    return (
                                                        <Link
                                                            key={index}
                                                            to={`/${item?.Category?.slug}/product-detail/${item?.id}`}
                                                            className="props-product text-black"
                                                            onClick={(e) => handleClick(e.target)}
                                                        >
                                                            <div className="image-product-search pe-3">
                                                                <img
                                                                    src={
                                                                        item?.Colors?.length > 0
                                                                            ? process.env.REACT_APP_SERVER_URL +
                                                                              item?.Colors[0]?.Product_Color?.img
                                                                            : images.noImage
                                                                    }
                                                                    alt="product-img"
                                                                />
                                                            </div>
                                                            <div className="content-product">
                                                                <b>{item?.productName}</b>
                                                                <div>
                                                                    <span className="pe-4 text-danger">
                                                                        {formatter.format(
                                                                            (item.price * (100 - item.discount)) / 100,
                                                                        )}
                                                                    </span>
                                                                    <del>{formatter.format(item.price)}</del>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </PoperWrapper>
                                        ) : productSearchs?.length === 0 && keySearchTrim ? (
                                            <PoperWrapper>
                                                <span>Không có kết quả tìm kiếm</span>
                                            </PoperWrapper>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                )}
                            >
                                <div className="d-flex header-banner-search">
                                    <input
                                        className="input-search header-banner-search-item"
                                        type="search"
                                        placeholder="Tìm kiếm sản phẩm .."
                                        aria-label="Search"
                                        spellCheck="false"
                                        id="search"
                                        value={keySearch}
                                        onChange={(e) => setKeySearch(e.target.value)}
                                    />
                                    <button
                                        className="btn btn-outline-success header-banner-search-item"
                                        onClick={handleSubmit}
                                    >
                                        <AiOutlineSearch />
                                        <span>Lọc nâng cao</span>
                                    </button>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                    <ul className="navbar-nav mb-2 mb-lg-0 header-banner-menu d-flex justify-content-end px-2 mt-2">
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
