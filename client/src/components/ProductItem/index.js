import './ProductItem.scss';

import images from '~/assets/images';
import Button from '../Button';
import routesConfig from '~/config/routes';

import { Link } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ProductItem({ sale, image, categoryName, productName, price, productId, categorySlug }) {
    const { isLoggedIn } = useSelector((state) => state.auth);

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const formatPrice = formatter.format(price);

    const [priceDiscount, setDiscount] = useState(0);
    useEffect(() => {
        if (sale > 100) {
            setDiscount(price - sale);
        } else {
            setDiscount(price - (price * sale) / 100);
        }
    }, [price, sale]);
    const formatDiscount = formatter.format(priceDiscount);

    return (
        <div className="product-item">
            <div className="product-inner">
                <div className="pro-images">
                    <div className="pro-sale">
                        <span>-{sale < 100 ? `${sale}%` : `${sale}đ`}</span>
                    </div>
                    <div className="pro-image">
                        <Link to={`/${categorySlug}/product-detail/${productId}`}>
                            <img
                                src={image ? image : images.product}
                                alt={productName ? productName : 'anh san pham'}
                            />
                        </Link>
                    </div>
                </div>
                <div className="pro-details">
                    <p className="pro-vendor">{categoryName}</p>
                    <h3>
                        <Link to={`/${categorySlug}/product-detail/${productId}`}>{productName}</Link>
                    </h3>
                    <p className="pro-price">
                        <span className="price">
                            <b>{formatDiscount}</b>
                        </span>
                        <br />
                        <span className="price-del text-decoration-line-through">{formatPrice ? formatPrice : ''}</span>
                    </p>
                    <div className="button-add-cart">
                        <Button
                            primary
                            rectangle
                            to={isLoggedIn ? `/${categorySlug}/product-detail/${productId}` : routesConfig.loginPage}
                        >
                            <RiShoppingBasketFill />
                            <span>Xem chi tiết</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
