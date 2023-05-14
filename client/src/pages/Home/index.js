import { Link } from 'react-router-dom';
import { FaRegHandPointRight } from 'react-icons/fa';

import Silder from './components/Silder';
import ProductNews from './components/ProductNews';
import ProductHots from './components/ProductHots';
import './Homepage.scss';
import routesConfig from '~/config/routes';

function Home() {
    return (
        <div className="home-page">
            <Silder />
            <div className="home-page-content">
                {/* List casio product */}
                <div className="product-frame">
                    <div className="product-frane-title d-flex justify-content-between">
                        <div className="product-frane-title-item">
                            <h1>Sản phẩm mới ra mắt</h1>
                        </div>
                    </div>
                    <ProductNews />
                </div>
                <div className="product-frame">
                    <div className="product-frane-title d-flex justify-content-between">
                        <div className="product-frane-title-item">
                            <h1>Sản phẩm bán chạy trong tuần</h1>
                        </div>
                    </div>
                    <ProductHots />
                </div>
            </div>
        </div>
    );
}

export default Home;
