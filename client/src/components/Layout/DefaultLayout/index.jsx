import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {/* style={{ marginTop: '126.25px' }} */}
            <div className="content-container d-flex p-5">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
