import { Link } from 'react-router-dom';

import { imgCasio } from '~/assets/ProductImage';
import './MediaItem.scss';

function MediaItem() {
    const handleInputQty = () => {};

    return (
        <div className="media-line-item d-flex">
            <div className="media-item-left">
                <div className="item-img">
                    <img src={imgCasio.product1} alt="product1" />
                </div>
                <div className="item-remove">
                    <button className="btn-remove-cart">Xóa</button>
                </div>
            </div>
            <div className="media-item-right">
                <div className="item-info">
                    <h3 className="item--title">
                        <Link>Baby-G BGD-565SC-4DR</Link>
                    </h3>
                </div>
                <div className="item-price">
                    <p>
                        <span>2,349,000đ</span>
                        <del>2,937,000đ</del>
                    </p>
                </div>
            </div>
            <div className="media-item-total">
                <div className="item-total-price text-end">
                    <span className="line-item-total ">2,349,000đ</span>
                </div>
                <div className="item-qty">
                    <button className="qty-btn qtyminus">-</button>
                    <input type="text" size="4" min="1" value="1" onChange={handleInputQty} className="line-item-qty" />
                    <button className="qty-btn qtyplus">+</button>
                </div>
            </div>
        </div>
    );
}

export default MediaItem;
