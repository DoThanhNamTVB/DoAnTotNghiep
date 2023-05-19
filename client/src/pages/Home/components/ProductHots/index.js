import ProductItem from '~/components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { getProductHot } from '~/store/actions';
import { useEffect } from 'react';

function ProductHots() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductHot());
    }, [dispatch]);
    const { productHot } = useSelector((state) => state.managerProduct);
    return (
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
            {productHot?.length > 0 &&
                productHot?.map((item, index) => {
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
    );
}

export default ProductHots;
