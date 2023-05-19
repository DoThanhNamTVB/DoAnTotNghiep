import { Link, useNavigate } from 'react-router-dom';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import './Form.scss';
import routesConfig from '~/config/routes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addOrder, getCartByUserId, getCurrentUser } from '~/store/actions';

function FormInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //get user current
    const { user } = useSelector((state) => state.auth);
    const { msg } = useSelector((state) => state.managerOrder);

    // console.log(user);

    useEffect(() => {
        dispatch(getCartByUserId(user?.id));
    }, [dispatch, user?.id]);

    // const dispatch = useDispatch();
    const [payload, setPayload] = useState({
        userName: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
        payment: '',
    });

    useEffect(() => {
        if (user) {
            user?.userName &&
                setPayload((prev) => ({
                    ...prev,
                    userName: user?.userName || '',
                    email: user?.email || '',
                    phone: user?.phone || '',
                    address: user?.address || '',
                    notes: '',
                }));
        }
    }, [user]);

    const handleChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };
    const products = user?.Products;
    //get qty
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        const qtyTotal = products?.reduce((accumulator, currentValue) => accumulator + currentValue?.Cart?.quantity, 0);
        setQuantity(qtyTotal);
    }, [products]);
    //get totalPrice
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const sumPrice = products?.reduce(
            (accumulator, currentValue) =>
                accumulator +
                ((currentValue?.price * (100 - currentValue?.discount)) / 100) * currentValue?.Cart?.quantity,
            0,
        );
        setTotalPrice(sumPrice + 35000);
    }, [products]);

    const [errors, setErrors] = useState();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const validateForm = (value) => {
        const errors = {};
        if (!value.userName) {
            errors.userName = 'Trường này là bắt buộc !';
        }
        if (!value.email) {
            errors.email = 'Trường này là bắt buộc !';
        } else if (!value.email.match(validRegex)) {
            errors.email = 'email không hợp lệ';
        }
        if (!value.phone) {
            errors.phone = 'Trường này là bắt buộc !';
        } else if (!value.phone.match(regexPhoneNumber)) {
            errors.phone = 'Số điện thoại không hợp lệ';
        }
        if (!value.address) {
            errors.address = 'Trường này là bắt buộc !';
        }
        if (!value.payment) {
            errors.payment = 'Trường này là bắt buộc !';
        }
        return errors;
    };
    //call api order

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalPayload = {
            ...payload,
            notes: payload.notes,
            quantity: quantity,
            total_Price: totalPrice,
            userId: user?.id,
            products: products,
        };
        // console.log(finalPayload);
        const formErrs = validateForm(finalPayload);
        if (Object.keys(formErrs).length > 0 || !finalPayload.quantity || !finalPayload?.total_Price) {
            setErrors(formErrs);
            if (!finalPayload.quantity || !finalPayload?.total_Price) {
                toast.error('Đơn hàng đặt đang trống');
            }
        } else {
            dispatch(addOrder(finalPayload));
            if (!msg) {
                navigate('/checkoutstep2');
                dispatch(getCurrentUser());
            } else {
                toast.error('Lỗi ! Không thể đặt hàng !');
            }
        }
    };

    // useEffect(() => {
    //     if (msgPut) {
    //         toast.error(msgPut);
    //     }
    // }, [msgPut]);
    return (
        <div className="form-info">
            <div className="row g-3 form-info-item">
                <div className="col-md-12">
                    <label htmlFor="userName" className="form-label">
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        value={payload?.userName}
                        onChange={handleChange}
                        placeholder="Nguyen Van A"
                    />
                    {errors?.userName && <small className="text-danger">{errors.userName}</small>}
                </div>
                <div className="col-md-7">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={payload?.email}
                        onChange={handleChange}
                        placeholder="nguyenvana@gmail.com"
                    />
                    {errors?.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="col-md-5">
                    <label htmlFor="phone" className="form-label">
                        Số điện thoại
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={payload?.phone}
                        onChange={handleChange}
                        placeholder="0123456789"
                    />
                    {errors?.phone && <small className="text-danger">{errors.phone}</small>}
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">
                        Địa chỉ
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Số nhà x, ngõ a/b, đường Cầu Diễn, quận Nam Từ Liêm, Hà Nội"
                        value={payload?.address}
                        onChange={handleChange}
                    />
                    {errors?.address && <small className="text-danger">{errors.address}</small>}
                </div>
                <div className="mb-3 col-md-12">
                    <label htmlFor="notes" className="form-label">
                        Ghi chú đơn hàng
                    </label>
                    <textarea
                        className="form-control"
                        id="notes"
                        value={payload?.notes || ''}
                        onChange={handleChange}
                        rows="3"
                    ></textarea>
                </div>

                {/* Phương thức thanh toán */}
                <div className="col-md-12">
                    <span>Phương thức thanh toán</span>
                </div>
                <div className="row border border-2 p-4">
                    <div className="col-md-12 py-2 border-botton-2">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentOptions"
                                id="payment"
                                onChange={handleChange}
                                value="COD"
                            />
                            <label className="form-check-label" htmlFor="payment">
                                <FaMoneyBillAlt />
                                <span className="ms-4">Thanh toán khi giao hàng</span>
                            </label>
                        </div>
                    </div>
                    {/* <div className="col-md-12 py-2">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentOptions"
                                id="payment"
                                value="BANK"
                                onChange={handleChange}
                            />
                            <label
                                className="form-check-label d-flex justify-content-center align-items-center"
                                htmlFor="bank"
                            >
                                <FaMoneyCheckAlt />
                                <span className="ms-4">Chuyển khoản qua ngân hàng</span>
                            </label>
                        </div>
                    </div> */}
                    {errors?.payment && <small className="text-danger">{errors.payment}</small>}
                </div>
                <div className="col-6 px-0 py-2">
                    <Link to={routesConfig.cartPage}>
                        <button className="btn btn-primary p-3 border-2">Quay lại giỏ hàng</button>
                    </Link>
                </div>
                <div className="col-6 px-0 py-2 mb-5 text-end">
                    <Link to={routesConfig.checkoutstep2Page}>
                        <button onClick={handleSubmit} className="btn btn-primary p-3">
                            Hoàn tất đơn hàng
                        </button>
                    </Link>
                </div>
            </div>
            {/* <ToastContainer autoClose={200} /> */}
        </div>
    );
}

export default FormInfo;
