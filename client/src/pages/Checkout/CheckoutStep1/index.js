import { LayoutCheckout } from '../components';
import FormInfo from './FormInfo';

function CheckoutStep1() {
    return (
        <LayoutCheckout>
            <div className="py-0 px-4">
                <h1 className="p-3 text-center rounded-3 bg-primary text-white">THÔNG TIN ĐƠN HÀNG</h1>
                <FormInfo />
            </div>
        </LayoutCheckout>
    );
}

export default CheckoutStep1;
