import { Link } from 'react-router-dom';

import './Sidebar.scss';
import routesConfig from '~/config/routes';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-menu-catagory">
                <h2>Danh mục loại sản phẩm</h2>
                <hr />
                <ul className="menu-catagory">
                    <li className="menu-catagory-item">
                        <Link to={routesConfig.casioPage}>Casio</Link>
                    </li>
                    <li className="menu-catagory-item">
                        <Link to={routesConfig.casioEdificePage}>Casio Edifice</Link>
                    </li>
                    <li className="menu-catagory-item">
                        <Link to={routesConfig.casioBabyGPage}>Casio Baby-G</Link>
                    </li>
                    <li className="menu-catagory-item">
                        <Link to={routesConfig.casioElectronicGPage}>Casio Điện Tử</Link>
                    </li>
                    <li className="menu-catagory-item">
                        <Link to={routesConfig.casioVintagePage}>Casio Vintage</Link>
                    </li>
                </ul>
            </div>

            <div className="sidebar-filter">
                <div className="filter-by-price">
                    <h2>Lọc theo giá sản phẩm</h2>
                    <hr />
                    <div className="price-check">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                0 - 1.000.000 vnđ
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                1.000.000 - 2.000.000 vnđ
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                3.000.000 - 5.000.000 vnđ
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                // checked
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                5.000.000 vnđ
                            </label>
                        </div>
                    </div>
                </div>

                <div className="filter-by-product">
                    <h2>Lọc theo sản phẩm</h2>
                    <hr />
                    <div className="product-check">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Giảm giá
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Bán chạy
                            </label>
                        </div>
                    </div>
                </div>

                <div className="filter-sort-by-price">
                    <h2>Sắp xếp theo giá</h2>
                    <hr />
                    <div className="sort-by-check">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Giảm giá
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                // checked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Bán chạy
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
