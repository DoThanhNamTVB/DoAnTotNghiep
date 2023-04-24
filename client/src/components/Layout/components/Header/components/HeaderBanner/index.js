import { Link } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';

import images from '~/assets/images';
import routesConfig from '~/config/routes';

function HeaderBanner() {
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
                        <li className="nav-item">
                            <Link className="nav-link" to={routesConfig.casioPage}>
                                Casio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={routesConfig.casioEdificePage}>
                                Casio Edifice
                            </Link>
                        </li>
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
                                <li>
                                    <Link className="dropdown-item" to={routesConfig.casioBabyGPage}>
                                        Casio BaBy-G
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={routesConfig.casioElectronicGPage}>
                                        Casio Điện tử
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={routesConfig.casioVintagePage}>
                                        Casio Vintage
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                    <Link className="nav-link" to="/feature-products">
                        Sản phẩm hot
                    </Link>
                </li> */}
                        {/* <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                        Bài viết
                    </Link>
                </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to={routesConfig.contact}>
                                Contact
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                    <Link className="nav-link disabled">Disabled</Link>
                </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderBanner;
