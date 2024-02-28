import { LayoutCheckout } from '../components';
import FormInfo from './FormInfo';
import routesConfig from '~/config/routes';

function CheckoutStep1() {
    return (
        <LayoutCheckout
            link1={routesConfig.cartPage}
            nameLink1={'Giỏ hàng'}
            link2={routesConfig.checkoutstep1Page}
            nameLink2={'Thông tin đơn hàng'}
        >
            <div className="py-0 px-4">
                <h1 className="p-3 text-center rounded-3 bg-primary text-white">THÔNG TIN ĐƠN HÀNG</h1>
                <FormInfo />
            </div>
        </LayoutCheckout>
    );
}

export default CheckoutStep1;
