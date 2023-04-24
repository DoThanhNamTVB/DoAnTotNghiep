import { Link } from 'react-router-dom';

import { LayoutCheckout } from '../components';
import FormInfo from './FormInfo';
import routesConfig from '~/config/routes';

function CheckoutStep1() {
    return (
        <LayoutCheckout>
            <nav aria-label="breadcrumb">
                <div className="py-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item checkout-breakCrumb">
                            <Link to={routesConfig.cartPage}>Giỏ hàng</Link>
                        </li>
                        <li className="breadcrumb-item active checkout-breakCrumb" aria-current="page">
                            <Link to={routesConfig.checkoutstep1Page}>Thông tin đơn hàng</Link>
                        </li>
                        <li className="breadcrumb-item checkout-breakCrumb" aria-current="page">
                            <Link to="checkoutstep2">Hoàn tất đơn hàng</Link>
                        </li>
                    </ol>
                </div>
            </nav>
            <h2>Thông tin đơn hàng</h2>
            <p>
                Bạn đã có tài khoản ? <Link>Đăng nhập</Link>
            </p>
            <FormInfo />
        </LayoutCheckout>
    );
}

export default CheckoutStep1;
