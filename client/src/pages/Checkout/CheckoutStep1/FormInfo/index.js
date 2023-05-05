import { Link } from 'react-router-dom';
import { FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';

import './Form.scss';
import routesConfig from '~/config/routes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function FormInfo() {
    //get user current
    const { user } = useSelector((state) => state.auth);
    // console.log(user)
    const [payload, setPayload] = useState({
        userName: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
        // payment: '',
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
                    // payment: 'COD',
                }));
        }
    }, [user]);

    const handleChange = (e) => {
        // setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
        // if (errors && errors[e.target.id]) {
        //     setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        // }
    };

    const [errors, setErrors] = useState();

    const validateForm = (value) => {
        const errors = {};
        if (!value.userName) {
            errors.userName = 'Trường này là bắt buộc !';
        }
        if (!value.email) {
            errors.email = 'Trường này là bắt buộc !';
        }
        if (!value.phone) {
            errors.phone = 'Trường này là bắt buộc !';
        } else if (isNaN(value.phone) || value.phone.length !== 10) {
            errors.phone = 'Trường này hãy nhập số điện thoại có 10 chữ số';
        }
        if (!value.address) {
            errors.address = 'Trường này là bắt buộc !';
        }
        if (!value.notes) {
            errors.notes = 'Trường này là bắt buộc !';
        }
        // if (!value.payment) {
        //     errors.payment = 'Trường này là bắt buộc !';
        // }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalPayload = { ...payload };
        // console.log(finalPayload);
        const formErrs = validateForm(finalPayload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            // dispatch(putProduct(finalPayload, id));
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
                        value={payload.userName}
                        onChange={handleChange}
                        placeholder="Nguyen Van A"
                    />
                </div>
                <div className="col-md-7">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={payload.email}
                        onChange={handleChange}
                        placeholder="nguyenvana@gmail.com"
                    />
                </div>
                <div className="col-md-5">
                    <label htmlFor="phone" className="form-label">
                        Số điện thoại
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={payload.phone}
                        onChange={handleChange}
                        placeholder="0123456789"
                    />
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
                        value={payload.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 col-md-12">
                    <label htmlFor="notes" className="form-label">
                        Ghi chú đơn hàng
                    </label>
                    <textarea className="form-control" id="notes" rows="3"></textarea>
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
                                name="inlineRadioOptions"
                                id="cod"
                                value="COD"
                            />
                            <label className="form-check-label" htmlFor="cod">
                                <FaMoneyBillAlt />
                                <span className="ms-4">Thanh toán khi giao hàng</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-12 py-2">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="bank"
                                value="BANK"
                                disabled
                            />
                            <label
                                className="form-check-label d-flex justify-content-center align-items-center"
                                htmlFor="bank"
                            >
                                <FaMoneyCheckAlt />
                                <span className="ms-4">Chuyển khoản qua ngân hàng</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-6 px-0 py-2">
                    <Link to={routesConfig.cartPage}>
                        <button className="btn btn-primary p-3 border-2">Quay lại giỏ hàng</button>
                    </Link>
                </div>
                <div className="col-6 px-0 py-2 mb-5 text-end">
                    <Link to={routesConfig.checkoutstep2Page}>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary p-3">
                            Hoàn tất đơn hàng
                        </button>
                    </Link>
                </div>
            </div>
            {/* <ToastContainer autoClose={2000} /> */}
        </div>
    );
}

export default FormInfo;
