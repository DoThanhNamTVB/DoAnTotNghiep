import { AiFillEye } from 'react-icons/ai';
import { MdDelete, MdVerifiedUser } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import routesConfig from '~/config/routes';

import './OrderManager.scss';
import { getAllOrder, getAllProduct, putOrderStatus } from '~/store/actions';
import formatter from '~/components/FuntionComponent/formatPrice';
import ButtonModal from '~/components/ButtonModal';

function OrderStatusSuccess() {
    const dispatch = useDispatch();

    const { orders, msg } = useSelector((state) => state.managerOrder);

    useEffect(() => {
        dispatch(getAllOrder());
    }, [dispatch]);

    // console.log(orders);
    const handleConfirm = (orderId) => {
        console.log(orderId);
        dispatch(putOrderStatus(orderId));
        if (!msg) {
            toast.success('Xác nhận đơn hàng thành công!');
            dispatch(getAllOrder());
        } else {
            toast.error('Xác nhận thất bại!');
        }
    };

    const handleDelete = (orderId) => {};

    // useEffect(() => {
    //     if (statusDelete === true) {
    //         toast.success('Xóa sản phẩm thành công!');
    //         dispatch(getAllProduct());
    //     }
    // }, [dispatch, statusDelete]);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.orderManager}>Đơn hàng</Link>
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
                            Trạng thái
                        </th>
                        <th scope="col" colSpan={3} className="text-center">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.length > 0 &&
                        orders.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td className="text-center">{item.phone}</td>
                                    <td className="text-center">{item.quantity}</td>
                                    <td className="text-center">{formatter.format(item.total_Price)}</td>
                                    <td className="text-center">{item.status}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleConfirm(item.id)}
                                            className="bolder  border-0 p-2 rounded-3 bg-warning text-white"
                                        >
                                            Xác nhận
                                        </button>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/product/edit/${item.id}`}
                                            className="d-flex justify-content-center align-items-center bg-primary p-2 rounded-3 text-white"
                                        >
                                            Xem
                                        </Link>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="px-3 d-flex justify-content-center align-items-center">
                                                <span
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    className="bg-danger p-2 rounded-3 text-white"
                                                >
                                                    Hủy
                                                </span>

                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                    Huỳ đơn hàng
                                                                </h1>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Bạn có chắc muốn hủy đơn hàng {item.id} không?
                                                                <div className="modal-footer fs-3">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-secondary"
                                                                        data-bs-dismiss="modal"
                                                                    >
                                                                        Hủy
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleDelete(item.id)}
                                                                        className="btn btn-primary"
                                                                        data-bs-dismiss="modal"
                                                                    >
                                                                        Xóa
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default OrderStatusSuccess;
