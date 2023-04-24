import './Carousel.scss';
import { imgGshock } from '~/assets/ProductImage';

function CarouselProductDetail() {
    return (
        <div className="product-detail-img">
            <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgGshock.product1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgGshock.product2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgGshock.product3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev fw-bolder"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next fw-bolder"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <strong>ẢNH SẢN PHẨM</strong>
        </div>
    );
}

export default CarouselProductDetail;
