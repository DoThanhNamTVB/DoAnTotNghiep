import { Link } from 'react-router-dom';

// import { imgCasio } from '~/assets/ProductImage';
import './MediaItem.scss';
import formatter from '~/components/FuntionComponent/formatPrice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdAnProductColor, getCartByUserId, getCurrentUser, putCart } from '~/store/actions';

function MediaItem({
    img,
    handleDelete,
    price,
    sale,
    productName,
    color,
    countCurrent,
    productId,
    colorId,
    qtyDatabase,
}) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    // console.log(qtyDatabase);

    //get quantity product in database
    useEffect(() => {
        dispatch(getByIdAnProductColor(productId, colorId));
    }, [dispatch, productId, colorId]);

    //format price
    const priceFormat = formatter.format(price);
    const discountFormat = formatter.format(price - (price * sale) / 100);

    //setting quantity
    const [count, setCount] = useState(countCurrent || 1);
    const decrementCount = (e) => {
        e.preventDefault();
        if (count > 1) {
            setCount(Number(count) - 1);
            dispatch(getCurrentUser());
            dispatch(getCartByUserId(user.id));
            dispatch(putCart({ quantity: Number(count) - 1 }, user.id, productId));
        }
    };

    const incrementCount = (e) => {
        e.preventDefault();
        if (count < Number(qtyDatabase)) {
            setCount(Number(count) + 1);
            dispatch(getCurrentUser());
            dispatch(getCartByUserId(user.id));
            dispatch(putCart({ quantity: Number(count) + 1 }, user.id, productId));
        }
    };
    //set handle input
    const handleInputQty = (e) => {
        e.preventDefault();
        setCount(e.target.value);
    };

    // console.log(img);
    const totalFormat = formatter.format((price - (price * sale) / 100) * count);

    return (
        <div className="media-line-item d-flex">
            <div className="media-item-left">
                <div className="item-img">
                    <img src={img} alt="product-img" />
                </div>
                <div className="item-remove">
                    <button className="btn-remove-cart" onClick={handleDelete}>
                        Xóa
                    </button>
                </div>
            </div>
            <div className="media-item-right">
                <div className="item-info">
                    <h3 className="item--title">
                        <Link>{productName}</Link>
                    </h3>
                </div>
                <div className="item-price">
                    <p>
                        <span>{discountFormat}</span>
                        <del>{priceFormat}</del>
                    </p>
                    <p>Màu : {color}</p>
                </div>
            </div>
            <div className="media-item-total">
                <div className="item-total-price text-end">
                    <span className="line-item-total ">{totalFormat}</span>
                </div>
                <div className="item-qty">
                    <button className="qty-btn qtyminus" onClick={decrementCount}>
                        -
                    </button>
                    <input
                        type="text"
                        size="4"
                        min="1"
                        value={count}
                        onChange={handleInputQty}
                        className="line-item-qty"
                    />
                    <button className="qty-btn qtyplus" onClick={incrementCount}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MediaItem;
