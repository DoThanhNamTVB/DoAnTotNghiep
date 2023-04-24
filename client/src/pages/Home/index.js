import { Link } from 'react-router-dom';
import { FaRegHandPointRight } from 'react-icons/fa';

import Silder from './components/Silder';
import ProductItems from './components/ProductItems';
import './Homepage.scss';
import routesConfig from '~/config/routes';

function Home() {
    return (
        <div className="home-page">
            <Silder />
            <div className="home-page-content">
                {/* List casio product */}
                <div className="product-frame">
                    <div className="product-frane-title d-flex justify-content-between">
                        <div className="product-frane-title-item">
                            <h1>Đồng Hồ Casio</h1>
                        </div>
                        <div className="product-frane-title-item">
                            <Link
                                to={routesConfig.casioPage}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <FaRegHandPointRight />
                                <span>Xem tất cả</span>
                            </Link>
                        </div>
                    </div>
                    <ProductItems />
                </div>

                {/* List  Casio Edifice product */}
                <div className="product-frame">
                    <div className="product-frane-title d-flex justify-content-between">
                        <div className="product-frane-title-item">
                            <h1>Đồng Hồ Casio Edifice</h1>
                        </div>
                        <div className="product-frane-title-item">
                            <Link
                                to={routesConfig.casioEdificePage}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <FaRegHandPointRight />
                                <span>Xem tất cả</span>
                            </Link>
                        </div>
                    </div>
                    <ProductItems />
                </div>

                {/* List  Casio  Baby-G product */}
                <div className="product-frame">
                    <div className="product-frane-title d-flex justify-content-between">
                        <div className="product-frane-title-item">
                            <h1>Đồng Hồ Casio Baby-G</h1>
                        </div>
                        <div className="product-frane-title-item">
                            <Link
                                to={routesConfig.casioBabyGPage}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <FaRegHandPointRight />
                                <span>Xem tất cả</span>
                            </Link>
                        </div>
                    </div>
                    <ProductItems />
                </div>

                {/* List  Casio  Điện tử product */}
                <div className="product-frame">
                    <div className="product-frane-title d-flex justify-content-between">
                        <div className="product-frane-title-item">
                            <h1>Đồng Hồ Casio Điện Tử</h1>
                        </div>
                        <div className="product-frane-title-item">
                            <Link
                                to={routesConfig.casioElectronicGPage}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <FaRegHandPointRight />
                                <span>Xem tất cả</span>
                            </Link>
                        </div>
                    </div>
                    <ProductItems />
                </div>

                {/* List  Casio  Vintage product */}
                <div className="product-frame">
                    <div className="product-frane-title d-flex justify-content-between">
                        <div className="product-frane-title-item">
                            <h1>Đồng Hồ Casio Vintage</h1>
                        </div>
                        <div className="product-frane-title-item">
                            <Link
                                to={routesConfig.casioVintagePage}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <FaRegHandPointRight />
                                <span>Xem tất cả</span>
                            </Link>
                        </div>
                    </div>
                    <ProductItems />
                </div>
            </div>
        </div>
    );
}

export default Home;
