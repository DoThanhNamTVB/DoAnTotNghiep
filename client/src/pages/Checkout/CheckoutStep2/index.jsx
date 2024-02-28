import { Link } from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';

import routesConfig from '~/config/routes';
import images from '~/assets/images';
import './checkout2.scss';

function CheckoutStep2() {
    return (
        <div className="px-4">
            <h2 className="d-flex justify-content-center align-items-center text-primary mb-5 pt-5">
                <span className="me-2">Bạn đã đặt đơn hàng thành công đơn hàng</span>
                <span className="d-flex justify-content-center align-items-center">
                    <BsBagCheckFill />
                </span>
            </h2>
            <div className="checkout-detail ">
                <img src={images.orderSuccess} alt="order-successfull" />
            </div>
            <div className="row my-5">
                <Link to={routesConfig.home} className="col-6 ">
                    <span className="d-block text-center p-3 w-100 bg-primary text-white rounded-5">
                        Quay lại trang chủ
                    </span>
                </Link>
                <Link to={routesConfig.historyOrder} className="col-6 ">
                    <span className="d-block text-center p-3 w-100 bg-primary text-white rounded-5">
                        Xem các đơn hàng đã đặt
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default CheckoutStep2;
