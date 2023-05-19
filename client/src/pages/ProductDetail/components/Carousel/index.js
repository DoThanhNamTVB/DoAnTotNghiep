import { useDispatch, useSelector } from 'react-redux';
import './Carousel.scss';
// import { imgGshock } from '~/assets/ProductImage';
import { getByIdAllProductColor } from '~/store/actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import images from '~/assets/images';

function CarouselProductDetail() {
    const dispatch = useDispatch();

    const { productColors } = useSelector((state) => state.managerProductColor);
    // console.log(productColors);

    const { productId } = useParams();
    useEffect(() => {
        dispatch(getByIdAllProductColor(productId));
    }, [dispatch, productId]);

    return (
        <div className="product-detail-img">
            <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {productColors?.length > 0 ? (
                        productColors?.map((item, index) => {
                            return (
                                <div className="carousel-item active" key={index}>
                                    <img
                                        src={
                                            productColors?.length > 0
                                                ? process.env.REACT_APP_SERVER_URL + item.img
                                                : images.noImage
                                        }
                                        className="d-block w-100"
                                        alt={'san pham' + item.productId}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <div className="carousel-item active">
                            <img src={images.noImage} className="d-block w-100" alt={'chua co anh san pham'} />
                        </div>
                    )}
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
