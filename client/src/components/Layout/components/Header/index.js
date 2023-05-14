import './Header.scss';

import { HeaderContact } from './components';
import { HeaderBanner } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '~/store/actions';
import { useEffect } from 'react';

function Header() {
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector((state) => state.auth);
    // console.log(user);

    useEffect(() => {
        setTimeout(() => {
            if (isLoggedIn) {
                dispatch(getCurrentUser());
            }
        }, 1000);
    }, [dispatch, isLoggedIn]);
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
