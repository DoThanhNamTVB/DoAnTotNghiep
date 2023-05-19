import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOrderById } from '~/store/actions';
import { BsSkipBackwardFill } from 'react-icons/bs';

import './orderDetail.scss';
import formatter from '~/components/FuntionComponent/formatPrice';

function OrderDetail() {
    const dispatch = useDispatch();
    const { orderId, orderType } = useParams();

    const { order } = useSelector((state) => state.managerOrder);
    // console.log(order);

    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, [dispatch, orderId]);
    return (
        <>
            <div className="py-3">
                <Link to={`/admin/${orderType}`} className=" fs-3">
                    <BsSkipBackwardFill />
                    <span className="ms-2">Quay lại</span>
                </Link>
            </div>
            <h2 className="text-center">THÔNG TIN CHI TIẾT ĐƠN HÀNG</h2>
            <div className="User-account p-5 row bg-primary text-white rounded-2 my-4">
                <div className="col-12 py-3 mb-3">
                    <span>
                        <h2>Thông tin tài khoản</h2>
                    </span>
                </div>
                <div className="col-md-6 col-12">
                    <div>
                        <b className="p-2">Mã tài khoản : </b>
                        <span className="text-start ps-5">{order?.UserId}</span>
                    </div>
                    <div>
                        <b className="p-2">Tên tài khoản : </b>
                        <span className="text-start ps-5">{order?.User?.userName}</span>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div>
                        <b className="p-2">Số điện thoại : </b>
                        <span className="text-start ps-5">{order?.User?.phone}</span>
                    </div>
                    <div>
                        <b className="p-2">Giới tính : </b>
                        <span className="text-start ps-5">{order?.User?.gender}</span>
                    </div>
                </div>
            </div>
            <div className="Order-detail px-5 bg-secondary text-white rounded-2 py-5">
                <div className="order-info row">
                    <div className="col-12 row">
                        <h2 className="text-start px-0 pb-3 col-md-6">Thông tin giao hàng</h2>
                        <span className="text-start col-md-6">
                            Trạng thái :{' '}
                            {order?.status === 'chua-xac-nhan'
                                ? 'Chưa xác nhận'
                                : order?.status === 'dang-giao'
                                ? 'Đang giao'
                                : order?.status === 'da-giao'
                                ? 'Đã giao'
                                : order?.status === 'da-huy'
                                ? 'Đã hủy'
                                : ''}
                        </span>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="py-3">
                            <b>Tên người nhận : </b>
                            <span>{order?.userName}</span>
                        </div>
                        <div className="py-3">
                            <b>Số điện thoại : </b>
                            <span>{order?.phone}</span>
                        </div>
                        <div className="py-3">
                            <b>Email :</b>
                            <span>{order?.email}</span>
                        </div>
                        <div className="py-3">
                            <b>Địa chỉ : </b>
                            <span>{order?.address}</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="py-3">
                            <b>Số lượng : </b>
                            <span>{order?.quantity}</span>
                        </div>
                        <div className="py-3">
                            <b>Thành tiền : </b>
                            <span>{formatter.format(order?.total_Price)}</span>
                        </div>
                        <div className="py-3">
                            <b>Payment : </b>
                            <span>{order?.payment}</span>
                        </div>
                        <div className="py-3">
                            <b>Ngày đặt hàng : </b>
                            <span>{new Date(order?.createdAt).toLocaleDateString('en-GB')}</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 py-3">
                        {order?.status === 'da-huy' && (
                            <>
                                <b>Lý do hủy : </b>
                                <span>{order?.reason}</span>
                            </>
                        )}
                    </div>
                    <div className="col-md-6 col-12 py-3">
                        {order?.notes ? (
                            <>
                                <b>Chú ý khi giao hàng : </b>
                                <span>{order?.notes}</span>
                            </>
                        ) : (
                            <>
                                <b>Chú ý khi giao hàng : </b>
                                <span>Không có</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="order-product mt-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="8" className="text-center pb-3">
                                DANH SÁCH SẢN PHẨM
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">Mã đơn hàng</th>
                            <th scope="col">Mã SP</th>
                            <th scope="col" className="text-start">
                                Tên sản phẩm
                            </th>
                            <th scope="col" className="text-center">
                                Mã màu
                            </th>
                            <th scope="col" className="text-center">
                                Tên màu
                            </th>
                            <th scope="col">Loại sản phẩm</th>
                            <th scope="col" className="text-center">
                                Giá
                            </th>
                            <th scope="col" className="text-center">
                                Giảm giá (%)
                            </th>
                            <th scope="col" className="text-center">
                                Số lượng
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {order?.Products?.length > 0 &&
                            order?.Products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{item?.Order_Detail?.orderId}</th>
                                        <th scope="row">{item?.id}</th>
                                        <td>
                                            <span>{item?.productName}</span>
                                        </td>
                                        <td className="text-center">{item?.Colors[0]?.id}</td>
                                        <td className="text-center">{item?.Colors[0]?.colorName}</td>
                                        <td>{item?.Category?.categoryName}</td>
                                        <td className="text-center">{formatter.format(item?.Order_Detail?.price)}</td>
                                        <td className="text-center">{item?.Order_Detail?.discount}</td>
                                        <td className="text-center">{item?.Order_Detail?.quantity}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default OrderDetail;
