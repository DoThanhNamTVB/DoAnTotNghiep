import Footer from '~/components/Layout/components/Footer';
import Header from '~/components/Layout/components/Header';

function HeaderFooterLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderFooterLayout;
