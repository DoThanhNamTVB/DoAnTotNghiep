import { Link } from 'react-router-dom';

import './ProductDetail.scss';
import { CarouselProductDetail } from './components';
import { ProductDes } from './components';
import { ProductsRelated } from './components';
import routesConfig from '~/config/routes';

// import Button from '~/components/Button';

function ProductDetail() {
    return (
        <div className=" container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.home}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.casioPage}>Casio</Link>
                    </li>
                </ol>
            </nav>

            <div className="product-deltail row py-3">
                <div className="col-12 col-md-6">
                    <CarouselProductDetail />
                </div>

                <div className="col-12 col-md-6 py-3 product-detail-content">
                    <div className="title-product-detail text-center">
                        <h2>Casio Nam AE-1200WHD-1AVDF - Freeship khi Subscribe</h2>
                    </div>
                    <div className="info-product-detail p-5">
                        <p>
                            <b>Mã sản phẩm : </b>AE-1200WHD-1AVDF
                        </p>
                        <p>
                            <b>Loại sản phẩm : </b> <Link to={routesConfig.casioPage}>Casio</Link>
                        </p>
                    </div>
                    <div className="price-product-detail">
                        <p className="px-5">
                            <span className="text-danger discount-percent align-items-center">-20%</span>
                            <span>
                                <del className="price fw-bold">1,373,000₫</del>
                            </span>
                            <span className="price-discount fw-bold text-danger">1,097,000₫</span>
                        </p>
                    </div>

                    <form action="" method="post">
                        <div className="row">
                            <div className="col-md-6 d-flex p-0 px-5 py-3 justify-content-start align-items-center">
                                <button className="px-3">-</button>
                                <input className="text-center" type="text" defaultValue="1" size="2" />
                                <button className="px-3">+</button>
                            </div>
                            <div className="col-md-6 p-5">
                                <Link
                                    id="btnCart-checkout"
                                    className="checkout-btn"
                                    to={routesConfig.checkoutstep1Page}
                                >
                                    <div className="summary-button">THANH TOÁN</div>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <ProductDes />
            <ProductsRelated />
        </div>
    );
}

export default ProductDetail;
