import { Link } from 'react-router-dom';

import ProductItem from '~/components/ProductItem';
import routesConfig from '~/config/routes';

function CasioElectronicPage() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.home}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.casioElectronicGPage}>Casio Điện Tử</Link>
                    </li>
                </ol>
            </nav>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
                <ProductItem className="col" />
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

export default CasioElectronicPage;
