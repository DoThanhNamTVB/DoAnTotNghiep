import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import routesConfig from '~/config/routes';

import './OrderManager.scss';
import { getOrderByStatus } from '~/store/actions';
import formatter from '~/components/FuntionComponent/formatPrice';

function OrderStatusConfirmed() {
    const dispatch = useDispatch();

    const { orderAllStatus } = useSelector((state) => state.managerOrder);

    useEffect(() => {
        dispatch(getOrderByStatus('dang-giao'));
    }, [dispatch]);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.orderConfirmed}>Đơn hàng đã xác nhận - đang giao</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
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
                                            to={`/admin/order-confirmed/${item.id}`}
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
            </table>
        </>
    );
}

export default OrderStatusConfirmed;
