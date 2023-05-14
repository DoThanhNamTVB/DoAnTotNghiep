import images from '~/assets/images';
import './Silder.scss';

function Silder() {
    return (
        <div className="slider">
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={images.banner.banner1} className="d-block w-100 banner-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={images.banner.banner2} className="d-block w-100 banner-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={images.banner.banner3} className="d-block w-100 banner-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={images.banner.banner4} className="d-block w-100 banner-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon text-white" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Silder;
