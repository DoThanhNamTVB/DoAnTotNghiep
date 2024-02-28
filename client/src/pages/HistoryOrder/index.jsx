import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import routesConfig from '~/config/routes';
import {
    getOrderByStatus,
    getOrderByUserStatus,
    cancelOrder,
    putOrderStatus,
    getOrderById,
    addCart,
    getCartByUserId,
    getCurrentUser,
    getAllOrder,
} from '~/store/actions';
import Select from 'react-select';
import formatter from '~/components/FuntionComponent/formatPrice';
import ButtonModal from '~/components/ButtonModal';
import { toast } from 'react-toastify';

function HistoryOrder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    const { orderStatus, statusPutStatus, statusCancel, statusGetOrderID, order } = useSelector(
        (state) => state.managerOrder
    );

    // console.log(orderStatus);
    //set status
    const statusOrders = [
        { value: 'chua-xac-nhan', label: 'Chưa xác nhận' },
        { value: 'dang-giao', label: 'Đang giao' },
        { value: 'da-giao', label: 'Đã giao' },
        { value: 'da-huy', label: 'Đã hủy' },
    ];

    const [selectedOption, setSelectedOption] = useState(statusOrders[0]);

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    useEffect(() => {
        dispatch(getOrderByUserStatus(user?.id, selectedOption?.value));
    }, [dispatch, user, selectedOption]);

    useEffect(() => {
        dispatch(getOrderByStatus(selectedOption?.value));
    }, [dispatch, selectedOption]);

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

    const handleSubmitOrder = (orderId) => {
        const finalPayload = { status: 'da-giao' };
        dispatch(putOrderStatus(finalPayload, orderId));
    };

    useEffect(() => {
        if (statusPutStatus) {
            setSelectedOption({ value: 'da-giao', label: 'Đã giao' });
            dispatch(getOrderByUserStatus(user?.id, selectedOption?.value));
        }
        if (statusCancel) {
            setSelectedOption({ value: 'da-huy', label: 'Đã hủy' });
            dispatch(getOrderByUserStatus(user?.id, selectedOption?.value));
        }
    }, [statusPutStatus, statusCancel, selectedOption, dispatch, user?.id]);

    // mua lại hàng
    const [orderProduct, setOrderProduct] = useState([]);
    useEffect(() => {
        if (order?.Products?.length > 0) {
            setOrderProduct(order?.Products);
        }
    }, [order]);

    const handleAddCart = (orderId) => {
        dispatch(getOrderById(orderId));
    };

    const [stateAddCart, setStateAddCart] = useState([]);

    useEffect(() => {
        if (statusGetOrderID) {
            orderProduct?.length > 0 &&
                orderProduct?.forEach((item) => {
                    const payload = {
                        userId: user?.id,
                        productId: Number(item?.id),
                        colorId: Number(item?.Order_Detail?.color),
                        quantity: Number(item?.Order_Detail?.quantity),
                    };
                    if (payload) {
                        // dispatch(getAllOrder());
                        dispatch(addCart(payload, user?.id, Number(item?.id)));
                        setStateAddCart((pre) => [...pre, statusGetOrderID]);
                    }
                });
            dispatch(getAllOrder());
        }
    }, [statusGetOrderID, user, orderProduct, dispatch]);

    useEffect(() => {
        if (stateAddCart?.length > 0) {
            const checkTrue = stateAddCart?.every((item) => item === true);
            setStateAddCart([]);

            if (checkTrue) {
                dispatch(getCartByUserId(user?.id));
                dispatch(getCurrentUser());
                navigate(routesConfig.cartPage);
            }
        }
    }, [stateAddCart, dispatch, navigate, user]);

    return (
        <div className="py-5 px-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.home}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.historyOrder}>Lịch sử đơn hàng</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="7" className="text-center">
                            DANH SÁCH ĐƠN HÀNG
                        </th>
                        <th colSpan={1}>
                            <span className="form-label">Trạng thái</span>
                            <Select
                                key={[statusOrders]}
                                defaultValue={statusOrders && statusOrders[0]}
                                value={selectedOption}
                                onChange={handleChangeSelect}
                                options={statusOrders}
                                isSearchable
                                noOptionsMessage={() => 'Không có danh mục phù hợp'}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" className="text-start">
                            Tên người nhận
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
                    {orderStatus?.length > 0 ? (
                        orderStatus.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item?.userName}</td>
                                    <td>{item?.email}</td>
                                    <td className="text-center">{item?.phone}</td>
                                    <td className="text-center">{item?.quantity}</td>
                                    <td className="text-center">{formatter.format(item?.total_Price)}</td>
                                    <td className="text-center">
                                        {new Date(item?.createdAt).toLocaleDateString('en-GB')}
                                    </td>
                                    <td>
                                        {selectedOption.value === statusOrders[0].value ? (
                                            <div className={'d-flex align-items-center'}>
                                                <Link
                                                    to={`/history-order/detail/${item.id}`}
                                                    className=" bg-primary p-2 rounded-3 text-white me-1 w-50 text-center"
                                                >
                                                    Xem
                                                </Link>
                                                <ButtonModal
                                                    id="btnDelete"
                                                    nameButtonAll="Hủy đơn hàng"
                                                    className="btn-danger p-2 fs-4 w-50"
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
                                                            <option value="Người mua - Không muốn mua">
                                                                Không muốn mua nữa
                                                            </option>
                                                            <option value="Người mua - Mua sản phẩm khác">
                                                                Mua sản phẩm khác
                                                            </option>
                                                            <option value="Người mua - Không lý do">
                                                                Không muốn trả lời
                                                            </option>
                                                        </select>
                                                    }
                                                    nameButtonClose="Quay lại"
                                                    nameButtonSubmit="Hủy đơn"
                                                    onclick={() => handleDelete(item?.id, item?.Products)}
                                                />
                                            </div>
                                        ) : selectedOption.value === statusOrders[1].value ? (
                                            <div className={'d-flex align-items-center'}>
                                                <Link
                                                    to={`/history-order/detail/${item.id}`}
                                                    className="d-flex justify-content-center align-items-center bg-primary p-2 rounded-3 w-50 text-white me-1 text-center"
                                                >
                                                    Xem
                                                </Link>
                                                <button
                                                    className="btn btn-danger p-2 fs-4 w-50"
                                                    onClick={() => handleSubmitOrder(item?.id)}
                                                >
                                                    Đã nhận hàng
                                                </button>
                                            </div>
                                        ) : selectedOption.value === statusOrders[3].value ? (
                                            <div className={'d-flex align-items-center'}>
                                                <Link
                                                    to={`/history-order/detail/${item.id}`}
                                                    className="d-flex justify-content-center align-items-center w-50 bg-primary p-2 rounded-3 text-white me-1 text-center"
                                                >
                                                    Xem
                                                </Link>
                                                <button
                                                    className="btn btn-danger p-2 fs-4 w-50"
                                                    onClick={() => handleAddCart(item?.id)}
                                                >
                                                    Mua lại
                                                </button>
                                            </div>
                                        ) : (
                                            <Link
                                                to={`/history-order/detail/${item.id}`}
                                                className="d-flex justify-content-center align-items-center bg-primary p-2 rounded-3 text-white me-1 text-center"
                                            >
                                                Xem
                                            </Link>
                                        )}
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
            {/* <ToastContainer autoClose={200} /> */}
        </div>
    );
}

export default HistoryOrder;
