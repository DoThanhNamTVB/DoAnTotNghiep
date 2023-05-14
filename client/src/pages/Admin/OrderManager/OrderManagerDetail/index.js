import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '~/store/actions';

import './orderDetail.scss';
import formatter from '~/components/FuntionComponent/formatPrice';

function OrderDetail() {
    const dispatch = useDispatch();
    const { orderId } = useParams();

    const { order } = useSelector((state) => state.managerOrder);
    console.log(order);

    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, [dispatch, orderId]);
    return (
        <>
            <h2 className="text-center">THÔNG TIN CHI TIẾT ĐƠN HÀNG</h2>
            <div className="User-account p-5 row bg-primary text-white rounded-2 my-4">
                <div className="col-12 py-3 text-center bg-info mb-3">
                    <span>
                        <b>Thông tin tài khoản</b>
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
                        <b className="text-start px-0 pb-3 col-md-6">Thông tin giao hàng</b>
                        <b scope="col" className="text-start col-md-6">
                            Trạng thái :{' '}
                            {order?.status === 'chua-xac-nhan'
                                ? 'Chưa xác nhận'
                                : order?.status === 'da-xac-nhan'
                                ? 'Đã xác nhận'
                                : ''}
                        </b>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="py-3">
                            <b scope="col">Tên người nhận : </b>
                            <span>{order?.userName}</span>
                        </div>
                        <div className="py-3">
                            <b scope="col">Số điện thoại : </b>
                            <span>{order?.phone}</span>
                        </div>
                        <div className="py-3">
                            <b scope="col">Email :</b>
                            <span>{order?.email}</span>
                        </div>
                        <div className="py-3">
                            <b scope="col">Địa chỉ : </b>
                            <span>{order?.address}</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="py-3">
                            <b scope="col">Số lượng : </b>
                            <span>{order?.quantity}</span>
                        </div>
                        <div className="py-3">
                            <b scope="col">Thành tiền : </b>
                            <span>{formatter.format(order?.total_Price)}</span>
                        </div>
                        <div className="py-3">
                            <b scope="col">Payment : </b>
                            <span>{order?.payment}</span>
                        </div>
                        <div className="py-3">
                            <b scope="col">Ngày đặt hàng : </b>
                            <span>{new Date(order?.createdAt).toLocaleDateString('en-GB')}</span>
                        </div>
                    </div>
                </div>
                <div className="order-product">
                    {/* <table className="table table-striped">
                        <thead>
                            <tr>
                                <th colSpan="8" className="text-center">
                                    DANH SÁCH ĐƠN HÀNG
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" className="text-start">
                                    Tên khách hàng
                                </th>
                                <th scope="col">email</th>
                                <th scope="col" className="text-center">
                                    Số điện thoại
                                </th>
                                <th scope="col" className="text-center">
                                    Tổng số lượng
                                </th>
                                <th scope="col" className="text-center">
                                    Thành tiền
                                </th>
                                <th scope="col" className="text-center">
                                    Ngày đặt
                                </th>
                                <th scope="col" colSpan={2} className="text-center">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderAllStatus?.length > 0 ? (
                                orderAllStatus.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{item?.id}</th>
                                            <td>{item?.userName}</td>
                                            <td>{item?.email}</td>
                                            <td className="text-center">{item?.phone}</td>
                                            <td className="text-center">{item?.quantity}</td>
                                            <td className="text-center">{formatter.format(item?.total_Price)}</td>
                                            <td className="text-center">
                                                {new Date(item?.createdAt).toLocaleDateString('en-GB')}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/admin/order-detail/${item.id}`}
                                                    className="d-flex justify-content-center align-items-center bg-primary p-2 rounded-3 text-white"
                                                >
                                                    Xem
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="9">Đơn hàng trống</td>
                                </tr>
                            )}
                        </tbody>
                    </table> */}
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
