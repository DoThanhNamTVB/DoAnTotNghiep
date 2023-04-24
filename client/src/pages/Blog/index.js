import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

function Blog() {
    return (
        <div className="blog-page">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to={routesConfig.home}>Trang chủ</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        <Link to="/blog">Bài viết</Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default Blog;
