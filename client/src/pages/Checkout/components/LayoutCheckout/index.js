import './LayoutCheckout.scss';
import { Link } from 'react-router-dom';

// import Logo from '~/components/Logo';
import SidebarCheckout from '../SidebarCheckout';

function LayoutCheckout({ children, link1, nameLink1, link2, nameLink2 }) {
    return (
        <div className="warpper-checkout">
            <nav aria-label="breadcrumb">
                <div className="py-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item checkout-breakCrumb">
                            <Link to={link1}>{nameLink1}</Link>
                        </li>
                        <li className="breadcrumb-item active checkout-breakCrumb" aria-current="page">
                            <Link to={link2}>{nameLink2}</Link>
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
