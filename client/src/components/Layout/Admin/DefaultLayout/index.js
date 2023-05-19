import NavBarAdmin from '../components/NavBar';
import './DefaultLayout.scss';

function AdminDefaultLayout({ children }) {
    return (
        <>
            <div className="">
                <NavBarAdmin />
                <div className="admin-page-content">
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}

export default AdminDefaultLayout;
