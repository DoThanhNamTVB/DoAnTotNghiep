import { imgCasio } from '~/assets/ProductImage';

import './ProductCheckout.scss';

function ProductCheckout() {
    return (
        <table className="w-100">
            <tbody>
                <tr className="product-item-checkout">
                    <td className="img-product-checkout">
                        <img src={imgCasio.product2} alt="imgproduct1" />
                        <span className="qty-product-checkout">1</span>
                    </td>
                    <td className="title-product-checkout">Casio Nam AE-1200WHD-1AVDF - Freeship khi Subscribe</td>
                    <td>
                        <span>2,140,000đ</span>
                    </td>
                </tr>
                <tr className="product-item-checkout">
                    <td className="img-product-checkout">
                        <img src={imgCasio.product3} alt="imgproduct1" />
                        <span className="qty-product-checkout">1</span>
                    </td>
                    <td className="title-product-checkout">Casio Nam AE-1200WHD-1AVDF - Freeship khi Subscribe</td>
                    <td>
                        <span>2,140,000đ</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProductCheckout;
