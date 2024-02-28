import { Link, useSearchParams } from 'react-router-dom';

import ProductItem from '~/components/ProductItem';
import routesConfig from '~/config/routes';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCategory, getProductLimit } from '~/store/actions';
import '../Catagory/Category.scss';
import Pagenation from '~/components/Pagenation';

function ProductCategoryLimit() {
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    // const { categorySlug, page } = useParams();
    const [categorySlug, setcategorySlug] = useState(params.get('categorySlug'));
    const [page, setpage] = useState(params.get('page'));
    // const [params, setParams] = useState(new URLSearchParams(window.location.search));
    useEffect(() => {
        // setParams(new URLSearchParams(window.location.search));
        setcategorySlug(params.get('categorySlug'));
        setpage(params.get('page'));
    }, [params]);

    //lấy sản phẩm theo từng trang giới hạn là 12 sản phẩm
    useEffect(() => {
        if (categorySlug && page) {
            dispatch(getProductLimit(categorySlug, page));
        }
    }, [dispatch, categorySlug, page]);

    // dùng useSelector cua redux để lấy ra danh sách
    const { productLimits } = useSelector((state) => state.managerProduct);
    // console.log(productLimits);

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
                {productLimits?.rows?.length > 0 &&
                    productLimits?.rows?.map((item, index) => {
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
            <Pagenation count={productLimits?.count} currentNumber={page} currentSlug={categorySlug} length={12} />
        </>
    );
}

export default ProductCategoryLimit;
