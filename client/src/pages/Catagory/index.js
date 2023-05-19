import { Link, useParams } from 'react-router-dom';

import ProductItem from '~/components/ProductItem';
import routesConfig from '~/config/routes';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategory, getProductByCategory } from '~/store/actions';
import './Category.scss';

function CategoryPage() {
    const dispatch = useDispatch();
    const { categorySlug } = useParams();

    useEffect(() => {
        dispatch(getProductByCategory(categorySlug));
    }, [dispatch, categorySlug]);
    const { productCategory } = useSelector((state) => state.managerProduct);
    // console.log(productCategory);

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);
    const { categories } = useSelector((state) => state.managerCategory);

    //get categoryname to breadcrumb
    const getCategoryName = categories?.find((item) => item.slug === categorySlug)?.categoryName;

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.home}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={`/${categorySlug}`}>{getCategoryName}</Link>
                    </li>
                </ol>
            </nav>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                {productCategory?.length > 0 &&
                    productCategory?.map((item, index) => {
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
                                name={item.productName}
                                productId={item.id}
                                categoryName={getCategoryName}
                                productName={item.productName}
                                price={item.price}
                                categorySlug={categorySlug}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default CategoryPage;
