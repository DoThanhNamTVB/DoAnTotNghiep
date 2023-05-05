import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';

function HeaderFooterLayout({ children }) {
    return (
        <div>
            <Header />
            {/* style={{ marginTop: '126.25px' }} */}
            <div className="content-container px-3">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderFooterLayout;
