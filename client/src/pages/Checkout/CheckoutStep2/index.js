import { Link } from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';

import LayoutCheckout from '../components/LayoutCheckout';
import routesConfig from '~/config/routes';

function CheckoutStep2() {
    return (
        <div className="px-4">
            <h2 className="d-flex justify-content-center align-items-center text-primary mb-5 pt-5">
                <span className="me-2">Bạn đã đặt đơn hàng thành công</span>
                <span className="d-flex justify-content-center align-items-center">
                    <BsBagCheckFill />
                </span>
            </h2>
            <div className="checkout-detail ">
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="row">Họ và tên </th>
                            <td>Nguyễn Văn A</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>abc@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">SĐT</th>
                            <td>0123456789</td>
                        </tr>
                        <tr>
                            <th scope="row">Địa chỉ</th>
                            <td>số nhà x ngõ y quận Nam Từ Liêm , Hà Nội</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row my-5">
                <Link to={routesConfig.home} className="col-6 ">
                    <span className="d-block text-center p-3 w-100 bg-primary text-white rounded-5">
                        Quay lại trang chủ
                    </span>
                </Link>
                <Link to={routesConfig.home} className="col-6 ">
                    <span className="d-block text-center p-3 w-100 bg-primary text-white rounded-5">
                        Xem các đơn hàng đã đặt
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default CheckoutStep2;
