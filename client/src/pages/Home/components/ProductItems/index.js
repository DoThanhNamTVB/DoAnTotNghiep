import ProductItem from '~/components/ProductItem';

function ProductItems() {
    return (
        <>
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
            </div>
        </>
    );
}

export default ProductItems;
