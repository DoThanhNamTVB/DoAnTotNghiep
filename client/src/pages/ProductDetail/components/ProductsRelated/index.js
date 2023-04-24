import './ProductsRelated.scss';

import ProductItem from '~/components/ProductItem';

function ProductsRelated() {
    return (
        <div className="products-related row mt-5">
            <div className="col-md-12 mb-1">
                <h1 className="title-products-related text-center ">Các sản phẩm tương tự</h1>
                <hr />
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
}

export default ProductsRelated;
