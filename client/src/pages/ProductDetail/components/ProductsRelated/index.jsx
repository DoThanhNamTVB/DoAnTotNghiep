import { useDispatch, useSelector } from 'react-redux';
import './ProductsRelated.scss';

import ProductItem from '~/components/ProductItem';
import { useEffect } from 'react';
import { getProductSimilar } from '~/store/actions';

function ProductsRelated({ price }) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (price) {
            dispatch(getProductSimilar(price && price));
        }
    }, [dispatch, price]);

    const { productSimilars } = useSelector((state) => state.managerProduct);
    return (
        <div className="products-related row mt-5">
            <div className="col-md-12 mb-1">
                <h1 className="title-products-related text-center ">Các sản phẩm tương tự</h1>
                <hr />
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
                {productSimilars?.length > 0 &&
                    productSimilars?.map((item, index) => {
                        return (
                            <ProductItem
                                key={index}
                                className="col"
                                sale={item?.discount}
                                image={
                                    item?.Colors?.length > 0
                                        ? process.env.REACT_APP_SERVER_URL + item?.Colors[0]?.Product_Color?.img
                                        : ''
                                }
                                name={item?.productName}
                                productId={item?.id}
                                categoryName={item?.Category?.categoryName}
                                productName={item?.productName}
                                price={item?.price}
                                categorySlug={item?.Category?.slug}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default ProductsRelated;
