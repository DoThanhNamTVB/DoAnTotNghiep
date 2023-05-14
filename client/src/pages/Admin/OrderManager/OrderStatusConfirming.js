import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import routesConfig from '~/config/routes';

import './OrderManager.scss';
import { getAllOrder, getOrderByStatus, putOrderStatus } from '~/store/actions';
import formatter from '~/components/FuntionComponent/formatPrice';
import ButtonModal from '~/components/ButtonModal';

function OrderStatusConfirming() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { orderAllStatus, msg } = useSelector((state) => state.managerOrder);

    useEffect(() => {
        dispatch(getOrderByStatus('chua-xac-nhan'));
    }, [dispatch]);

    const handleConfirm = (orderId) => {
        console.log(orderId);
        dispatch(putOrderStatus(orderId));
        if (!msg) {
            toast.success('Xác nhận đơn hàng thành công!');
            dispatch(getAllOrder());
            navigate(routesConfig.orderConfirmed);
        } else {
            toast.error('Xác nhận thất bại!');
        }
    };

    const handleDelete = (orderId) => {};

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.orderComfirming}>Đơn hàng chưa xác nhận</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="9" className="text-center">
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
                        <th scope="col" colSpan={3} className="text-center">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orderAllStatus?.length > 0 &&
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
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleConfirm(item?.id)}
                                            className="bolder  border-0 p-2 rounded-3 bg-warning text-white"
                                        >
                                            Xác nhận
                                        </button>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/order-detail/` + item.id}
                                            className="d-flex justify-content-center align-items-center bg-primary p-2 rounded-3 text-white"
                                        >
                                            Xem
                                        </Link>
                                    </td>
                                    <td>
                                        <ButtonModal
                                            id="btnDelete"
                                            nameButtonAll="Xóa đơn hàng"
                                            className="btn-danger w-100 p-2 fs-4"
                                            title="Xóa đơn hàng"
                                            modalBody="Bạn có chắc chắn muốn xóa đơn hàng "
                                            nameButtonClose="Hủy"
                                            nameButtonSubmit="Xóa"
                                            onclick={handleDelete}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <ToastContainer autoClose={2000} />
        </>
    );
}

export default OrderStatusConfirming;
