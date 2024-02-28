import { Link } from 'react-router-dom';
import images from '~/assets/images';
import './Logo.scss';
import routesConfig from '~/config/routes';

function Logo() {
    return (
        <div className="logo">
            <Link className="" to={routesConfig.home}>
                <img src={images.logo} alt="logo-thanhnamwatch" />
            </Link>
        </div>
    );
}

export default Logo;
