import './LayoutCheckout.scss';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

// import Logo from '~/components/Logo';
import SidebarCheckout from '../SidebarCheckout';

function LayoutCheckout({ children }) {
    return (
        <div className="warpper-checkout">
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
            {/* <Logo /> */}
            <div className="row">
                <div className="col-12 col-lg-6">
                    <SidebarCheckout />
                </div>
                <div className="col-12 col-lg-6 checkout-left">{children}</div>
            </div>
        </div>
    );
}

export default LayoutCheckout;
