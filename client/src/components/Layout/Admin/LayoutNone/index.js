import './LayoutNone.scss';
import images from '~/assets/images';
function AdminLayoutNone({ children }) {
    return (
        <>
            <div className="layout-admin-none row">
                <div className="children-item col-6">{children}</div>
                <div className="img-logo col-6">
                    <img src={images.logo} alt="logo" />
                </div>
            </div>
        </>
    );
}

export default AdminLayoutNone;
