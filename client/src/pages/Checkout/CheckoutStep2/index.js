import { Link } from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';

import LayoutCheckout from '../components/LayoutCheckout';
import routesConfig from '~/config/routes';

function CheckoutStep2() {
    return (
        <LayoutCheckout>
            <nav aria-label="breadcrumb">
                <div className=" py-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item checkout-breakCrumb">
                            <Link to={routesConfig.cartPage}>Giỏ hàng</Link>
                        </li>
                        <li className="breadcrumb-item checkout-breakCrumb" aria-current="page">
                            <Link to={routesConfig.checkoutstep1Page}>Thông tin đơn hàng</Link>
                        </li>
                        <li className="breadcrumb-item active checkout-breakCrumb" aria-current="page">
                            <Link to={routesConfig.checkoutstep2Page}>Hoàn tất đơn hàng</Link>
                        </li>
                    </ol>
                </div>
            </nav>
            <h2 className="d-flex justify-content-center align-items-center text-primary my-5">
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
                <Link to={routesConfig.home} className="col-12 ">
                    <span className="d-block text-center p-3 w-100 bg-primary text-white rounded-5">
                        Quay lại trang chủ
                    </span>
                </Link>
            </div>
        </LayoutCheckout>
    );
}

export default CheckoutStep2;
