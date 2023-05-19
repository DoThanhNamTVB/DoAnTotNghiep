import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import routesConfig from '~/config/routes';

import './OrderManager.scss';
import { cancelOrder, getAllOrder, getOrderByStatus, putOrderStatus } from '~/store/actions';
import formatter from '~/components/FuntionComponent/formatPrice';
import ButtonModal from '~/components/ButtonModal';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';

function OrderStatusConfirming() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { orderAllStatus, msg, statusCancel } = useSelector((state) => state.managerOrder);
    // console.log(orderAllStatus);

    useEffect(() => {
        dispatch(getOrderByStatus('chua-xac-nhan'));
    }, [dispatch]);

    const handleConfirm = (orderId) => {
        const finalPayload = { status: 'dang-giao' };
        dispatch(putOrderStatus(finalPayload, orderId));
        if (!msg) {
            dispatch(getAllOrder());
            navigate(routesConfig.orderConfirmed);
        } else {
            toast.error('Xác nhận thất bại!');
        }
    };

    const [reason, setReason] = useState();

    const handleReason = (e) => {
        setReason(e?.target?.value);
    };

    const handleDelete = (orderId, product) => {
        if (reason) {
            const finalPayload = { reason: reason, product: product };
            dispatch(cancelOrder(finalPayload, orderId));
        } else {
            toast.error('Hãy chọn lý do để hủy');
        }
    };

    useEffect(() => {
        if (statusCancel) {
            dispatch(getOrderByStatus('chua-xac-nhan'));
        }
    }, [dispatch, statusCancel]);

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
                        <th colSpan="10" className="text-center">
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
                        <th scope="col" className="text-center">
                            Xác nhận
                        </th>
                        <th scope="col" className="text-center">
                            Xem
                        </th>
                        <th scope="col" className="text-center">
                            Hủy
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
                                            className="bolder border-0 p-2 rounded-3 text-warning fs-2 bg-transparent"
                                        >
                                            <GiConfirmed />
                                        </button>
                                    </td>
                                    <td className="text-center">
                                        <Link to={`/admin/order-confirming/` + item?.id}>
                                            <button className="bolder border-0 p-2 rounded-3 text-primary fs-2 bg-transparent">
                                                <AiFillEye />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <ButtonModal
                                            id={`Delete${item?.index}`}
                                            nameButtonAll={<AiFillDelete />}
                                            className="text-danger w-100 p-2 fs-2"
                                            title="Lý do hủy"
                                            modalBody={
                                                <select
                                                    className="form-select form-select-lg mb-3 fs-3"
                                                    aria-label=".form-select-lg example"
                                                    name="reason"
                                                    value={reason ? reason : ''}
                                                    onChange={handleReason}
                                                    autoFocus={false}
                                                >
                                                    <option>-Chọn lý do hủy đơn hàng-</option>
                                                    <option value="Không liên hệ được với người mua">
                                                        Không liên hệ được với người mua
                                                    </option>
                                                    <option value="Hết hàng">Hết hàng</option>
                                                </select>
                                            }
                                            nameButtonClose="Quay lại"
                                            nameButtonSubmit="Hủy đơn"
                                            onclick={() => handleDelete(item?.id, item?.Products)}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {/* <autoClose={500} /> */}
        </>
    );
}

export default OrderStatusConfirming;
