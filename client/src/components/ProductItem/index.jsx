import './ProductItem.scss';

import images from '~/assets/images';
import Button from '../Button';
// import routesConfig from '~/config/routes';

import { Link } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFavourite, getAnUser } from '~/store/actions';
import { addProductFavourite } from '~/store/actions';
import { toast } from 'react-toastify';

function ProductItem({ sale, image, categoryName, productName, price, productId, categorySlug }) {
    const { user, isLoggedIn, role } = useSelector((state) => state.auth);

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

    //product favourite
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnUser(user?.id));
    }, [dispatch, user]);
    const { account } = useSelector((state) => state.managerUser);

    const [count, setCount] = useState(0);
    useEffect(() => {
        const productfind =
            account?.Product_Favourites?.length > 0 &&
            account?.Product_Favourites?.find((item) => item?.id === productId);
        if (productfind) {
            setCount(1);
        } else {
            setCount(0);
        }
    }, [account, productId]);
    const [payload, setPayload] = useState({
        userId: '',
        productId: '',
    });

    useEffect(() => {
        setPayload((pre) => ({ ...pre, userId: user?.id }));
    }, [user]);

    const handleChaneFavourite = () => {
        const finalData = { ...payload, productId: productId };
        if (count === 0) {
            dispatch(addProductFavourite(finalData));
            setTimeout(() => {
                toast.success('Đã thêm vào mục sản phẩm yêu thích!', { closeOnClick: true, pauseOnHover: false });
                dispatch(getAnUser(user?.id));
            }, 300);
        } else {
            dispatch(deleteProductFavourite(finalData));
            setTimeout(() => {
                toast.success('Đã xóa khỏi mục sản phẩm yêu thích!', { closeOnClick: true, pauseOnHover: false });
                dispatch(getAnUser(user?.id));
            }, 300);
        }
    };

    //set scroll
    const handleScroll = () => {
        window.scrollTo({ top: '0px', behavior: 'smooth' });
    };

    return (
        <div className="product-item">
            <div className="product-inner">
                <div className="pro-images">
                    <div className="pro-sale">
                        <span>{sale !== 0 ? `-${sale}%` : 'no-sale'}</span>
                    </div>
                    <div className="pro-image">
                        <Link to={`/${categorySlug}/product-detail/${productId}`}>
                            <img
                                src={image ? image : images.noImage}
                                alt={productName ? productName : 'anh san pham'}
                            />
                        </Link>
                    </div>
                    <div className="pro-favourite">
                        {isLoggedIn && !role && (
                            <button onClick={handleChaneFavourite} className="border-0 bg-transparent">
                                {count === 0 ? (
                                    <AiOutlineHeart className="fs-2 text-danger" />
                                ) : (
                                    <AiFillHeart className="fs-2 text-danger" />
                                )}
                            </button>
                        )}
                    </div>
                </div>
                <div className="pro-details">
                    <p className="pro-vendor">{categoryName}</p>
                    <h3>
                        <Link to={`/${categorySlug}/product-detail/${productId}`} className="fs-4">
                            {productName}
                        </Link>
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
                            // to={isLoggedIn ? `/${categorySlug}/product-detail/${productId}` : routesConfig.loginPage}
                            to={`/${categorySlug}/product-detail/${productId}`}
                            onClick={handleScroll}
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
