import './Header.scss';

import { HeaderContact } from './components';
import { HeaderBanner } from './components';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-contact">
                <HeaderContact />
            </div>
            <HeaderBanner />
        </div>
    );
}

export default Header;
