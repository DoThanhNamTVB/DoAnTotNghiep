// import { Link } from 'react-router-dom';
// import routesConfig from '~/config/routes';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import formatter from '~/components/FuntionComponent/formatPrice';
import './SideBarCheckout.scss';

function SidebarCheckout() {
    //dispatch cart

    //get user current
    const { user } = useSelector((state) => state.auth);
    // console.log(user);

    const products = user?.Products;
    // console.log(products);

    //get total money
    const [totalMoney, setTotalMoney] = useState();

    useEffect(() => {
        const total = products?.reduce((accumulator, currentValue) => {
            return (
                accumulator +
                (currentValue?.price - (currentValue?.price * currentValue?.discount) / 100) *
                    currentValue?.Cart?.quantity
            );
        }, 0);
        setTotalMoney(total);
    }, [products]);

    const totalMoneyFormat = formatter.format(totalMoney);

    const finalPriceFormat = formatter.format(totalMoney + 35000);

    // console.log(products);
    return (
        <>
            <div className="row px-3">
                <div className="col-12 product-list-checkout">
                    <div className="mb-3">
                        {products?.length > 0 &&
                            products?.map((item, index) => {
                                return (
                                    <div
                                        className="product-item-checkout d-flex justify-content-between mb-5"
                                        key={index}
                                    >
                                        <div className="img-product-checkout">
                                            <img
                                                src={
                                                    process.env.REACT_APP_SERVER_URL +
                                                    item?.Colors?.find((color) => color.id === item?.Cart?.colorId)
                                                        ?.Product_Color?.img
                                                }
                                                alt="img"
                                            />
                                            <span className="qty-product-checkout">{item?.Cart?.quantity}</span>
                                        </div>
                                        <div className="ps-4">
                                            <div className="title-product-checkout text-end fs-3 text-primary fw-bolder">
                                                {item?.productName}
                                            </div>
                                            <div className="text-end">
                                                <span>
                                                    {formatter.format(
                                                        item?.price - (item?.price * item?.discount) / 100,
                                                    )}
                                                </span>
                                            </div>
                                            <div className="text-end">
                                                {
                                                    item?.Colors.find((color) => color.id === item?.Cart?.colorId)
                                                        ?.colorName
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <hr />
                <div className="col-12">
                    <div className="row justify-content-between">
                        <span className="col">Tạm tính</span>
                        <span className="col text-end">{totalMoneyFormat}</span>
                    </div>
                </div>
                <div className="col-12 py-4">
                    <div className="row justify-content-between">
                        <span className="col">Phí vận chuyển</span>
                        <span className="col text-end">35,000đ</span>
                    </div>
                </div>
                <hr />
                <div className="col-12 py-4">
                    <div className="row justify-content-between">
                        <span className="col">
                            <strong>Tổng cộng</strong>
                        </span>
                        <span className="col text-end">
                            <strong>{finalPriceFormat}</strong>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarCheckout;
