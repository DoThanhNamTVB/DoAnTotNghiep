import './LayoutCheckout.scss';

// import Logo from '~/components/Logo';
import SidebarCheckout from '../SidebarCheckout';

function LayoutCheckout({ children }) {
    return (
        <div className="warpper-checkout">
            {/* <Logo /> */}
            <div className="row">
                <div className="col-12 col-md-6 checkout-left">{children}</div>
                <div className="col-12 col-md-6">
                    <SidebarCheckout />
                </div>
            </div>
        </div>
    );
}

export default LayoutCheckout;
