import { Link } from 'react-router-dom';

import MediaItem from './components/MediaItem';
import routesConfig from '~/config/routes';

import './Cart.scss';

function Cart() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <div className=" px-5 py-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to={routesConfig.home}>Trang chủ</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to={routesConfig.cartPage}>Giỏ hàng</Link>
                        </li>
                    </ol>
                </div>
            </nav>

            <div className="wrapper-mainCart">
                <div className="content-bodyCart">
                    <div className=" px-5 py-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-8 col-sm-12 col-xs-12 contentCart-detail">
                                <div className="heading-cart">
                                    <h2>Giỏ hàng của bạn</h2>
                                    <hr className="fw-bold" />
                                </div>
                                <div className="form-cart">
                                    <form action={routesConfig.cartPage} method="post" id="cartform">
                                        <p className="title-number-cart">
                                            Bạn đang có <strong>1</strong> sản phẩm trong giỏ hàng
                                        </p>
                                        <div className="table-cart">
                                            <MediaItem />
                                            <MediaItem />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 sidebarCart-sticky">
                                <div className="mainCart-sidebar">
                                    <h2 className="summary-title">Thông tin đơn hàng</h2>
                                    <hr />

                                    <div className="summary-total">
                                        <p>
                                            Tổng tiền: <span>1,097,000₫</span>
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="summary-action">
                                        <p>- Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                                        <p>- Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                                        <Link
                                            id="btnCart-checkout"
                                            className="checkout-btn"
                                            to={routesConfig.checkoutstep1Page}
                                        >
                                            <div className="summary-button">THANH TOÁN</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
