import { Link, useNavigate, useParams } from 'react-router-dom';

import './ProductDetail.scss';
import { CarouselProductDetail } from './components';
import { ProductDes } from './components';
import { ProductsRelated } from './components';
import routesConfig from '~/config/routes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCart, getAnProduct, getCartByUserId, getCurrentUser, resetCart } from '~/store/actions';
import formatter from '~/components/FuntionComponent/formatPrice';
import Select from 'react-select';
import { toast } from 'react-toastify';

// import Button from '~/components/Button';

function ProductDetail() {
    const dispatch = useDispatch();
    const { categorySlug, productId } = useParams();
    const [count, setCount] = useState(1);

    //get product
    const { product } = useSelector((state) => state.managerProduct); // console.log(product);
    useEffect(() => {
        dispatch(getAnProduct(productId));
    }, [dispatch, productId]);

    //format price
    const priceFormat = formatter.format(product.price);
    const discountFormat = formatter.format(product.price - (product.price * product.discount) / 100);

    //get color
    const [colorsArr, setColorArr] = useState([]);
    useEffect(() => {
        setColorArr(product?.Colors);
    }, [product]);

    const [colorOptions, setColorOptions] = useState([]);
    useEffect(() => {
        if (colorsArr?.length > 0) {
            const options = colorsArr?.map((color) => ({ value: color?.id, label: color?.colorName }));
            setColorOptions(options);
        }
    }, [colorsArr, product]);

    const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {
        if (colorsArr) {
            setSelectedOption(colorsArr[0]?.id);
        }
    }, [colorsArr]);

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption?.value);
    };
    //add to cart
    //get curent user
    const { user, isLoggedIn } = useSelector((state) => state.auth);

    const payload = { userId: user?.id, productId: productId, colorId: selectedOption, quantity: count };

    const { statusAdd } = useSelector((state) => state.managerCart);
    // console.log(statusAdd);

    //set limited for product-color
    const [productColors, setProductColors] = useState([]);
    useEffect(() => {
        setProductColors(product?.Colors);
    }, [product]);

    const [qtyDatabase, setQtyDataBase] = useState(0);
    useEffect(() => {
        if (productColors?.length > 0) {
            const qty = productColors?.find((color) => color?.id === selectedOption)?.Product_Color?.quantity;
            setQtyDataBase(qty);
        }
        if (productColors?.length === 0) {
            setQtyDataBase(0);
        }
    }, [productColors, selectedOption, product?.Colors]);

    //setting quantity
    const decrementCount = (e) => {
        e.preventDefault();
        if (count > 1) setCount(count - 1);
        // if (qtyDatabase === 0) setCount(0);
    };

    const incrementCount = (e) => {
        e.preventDefault();
        if (count < qtyDatabase) {
            setCount(count + 1);
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        if (qtyDatabase > 0) {
            dispatch(addCart(payload, user?.id, productId));
        } else if (!qtyDatabase) {
            toast.error('Xin lỗi sản phẩm đã hết hàng', { closeOnClick: true, pauseOnHover: false });
        }
    };

    useEffect(() => {
        if (statusAdd === false) {
            toast.error('Sản phẩm đã có trong giỏ hàng', { closeOnClick: true, pauseOnHover: false });
            dispatch(resetCart());
        }
    }, [dispatch, statusAdd]);

    const navigate = useNavigate();
    // console.log(statusAdd);
    useEffect(() => {
        if (statusAdd === true) {
            dispatch(getCartByUserId(user?.id));
            dispatch(getCurrentUser());
            navigate(routesConfig.cartPage);
        }
    }, [statusAdd, user, dispatch, navigate]);

    return (
        <div className=" container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.home}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={`/${categorySlug}`}>{product?.Category?.categoryName}</Link>
                    </li>
                </ol>
            </nav>

            <div className="product-deltail row py-3">
                <div className="col-12 col-lg-6">
                    <CarouselProductDetail />
                </div>

                <div className="col-12 col-lg-6 py-3 product-detail-content">
                    <div className="title-product-detail text-center">
                        <h2>{product.productName}</h2>
                    </div>
                    <div className="info-product-detail px-5 py-3">
                        <p>
                            <b>Mã sản phẩm : </b>
                            {categorySlug}-{productId}
                        </p>
                        <p>
                            <b>Loại sản phẩm : </b>{' '}
                            <Link to={`/${categorySlug}`}>{product?.Category?.categoryName}</Link>
                        </p>
                    </div>
                    <div className="price-product-detail">
                        <p className="px-5 py-3">
                            <span className="text-danger discount-percent align-items-center">
                                -{product.discount}%
                            </span>
                            <span>
                                <del className="price fw-bold">{priceFormat}</del>
                            </span>
                            <span className="price-discount fw-bold text-danger">{discountFormat}</span>
                        </p>
                    </div>
                    <div className="px-5">
                        <Select
                            key={[colorOptions]}
                            defaultValue={colorOptions && colorOptions[0]}
                            onChange={handleChangeSelect}
                            options={colorOptions}
                            isSearchable
                            noOptionsMessage={() => 'Chưa có màu bản thể'}
                        />
                    </div>
                    <div className="px-5 py-4">
                        <span>Số lượng kho : {qtyDatabase}</span>
                    </div>
                    <div className="row">
                        {qtyDatabase > 0 && (
                            <div className="col-md-6 d-flex p-0 px-5 py-3 justify-content-start align-items-center">
                                <button className="px-3 fs-3 bolder border-0 btn-count" onClick={decrementCount}>
                                    -
                                </button>
                                <span className="px-3">{count}</span>
                                <button className="px-3 fs-3 bolder border-0 btn-count" onClick={incrementCount}>
                                    +
                                </button>
                            </div>
                        )}

                        <div className="col-md-6 px-5 py-5">
                            {isLoggedIn ? (
                                <Link id="btnCart-checkout" className="checkout-btn" onClick={handlesubmit}>
                                    <div className="summary-button">Thêm vào giỏ hàng</div>
                                </Link>
                            ) : (
                                <Link className="checkout-btn" to={routesConfig.loginPage}>
                                    <div className="summary-button">Thêm vào giỏ hàng</div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ProductDes />
            <ProductsRelated price={product?.price} />
            {/* <ToastContainer autoClose={200} /> */}
        </div>
    );
}

export default ProductDetail;
