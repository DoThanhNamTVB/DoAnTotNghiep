import './ProductItem.scss';

import images from '~/assets/images';
import Button from '../Button';
import routesConfig from '~/config/routes';

import { Link } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';

function ProductItem() {
    return (
        <div className="product-item">
            <div className="product-inner">
                <div className="pro-images">
                    <div className="pro-sale">
                        <span>-20%</span>
                    </div>
                    <div className="pro-image">
                        <Link to={routesConfig.productDetailPage}>
                            <img src={images.product} alt="product-1" />
                        </Link>
                    </div>
                </div>
                <div className="pro-details">
                    <p className="pro-vendor">CASIO</p>
                    <h3>
                        <Link to={routesConfig.productDetailPage}>G-Shock GBD-H2000-1A9</Link>
                    </h3>
                    <p className="pro-price">
                        <span className="price">
                            <b>17,839,000₫</b>
                        </span>
                        <br />
                        <span className="price-del text-decoration-line-through">22,300,000₫</span>
                    </p>
                    <div className="button-add-cart">
                        <Button primary rectangle to={routesConfig.cartPage}>
                            <RiShoppingBasketFill />
                            <span>Mua ngay</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
