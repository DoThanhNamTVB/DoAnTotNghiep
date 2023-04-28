import { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import { addAdmin } from '~/store/actions';

function AdminManagerAdd() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState();

    const [payload, setPayload] = useState({
        userName: '',
        email: '',
        gender: 'Nam',
        address: '',
        phone: '',
        password: '',
        role: 'Nhân viên',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            dispatch(addAdmin(payload));
            navigate(routesConfig.adminManagerAccount);
        }
    };

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const validateForm = (values) => {
        const errors = {};
        if (!values.userName) {
            errors.userName = 'Trường này là bắt buộc';
        }
        if (!values.email) {
            errors.email = 'Trường này là bắt buộc';
        } else if (!values.email.match(validRegex)) {
            errors.email = 'email không hợp lệ';
        }
        if (!values.phone) {
            errors.phone = 'Trường này là bắt buộc';
        } else if (values.phone.length !== 10) {
            errors.phone = 'Nhập số đt có 10 chữ số!';
        }
        if (!values.address) {
            errors.address = 'Trường này là bắt buộc';
        }
        if (!values.password) {
            errors.password = 'Trường này là bắt buộc';
        } else if (values.password.length < 8) {
            errors.password = 'Mật khẩu phải lớn hơn 8 từ';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Trường này là bắt buộc';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Mật khẩu không khớp';
        }
        return errors;
    };
    return (
        <>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="register w-100 border border-2 rounded-5">
                    <div className="header-register text-center ">
                        <h2 className="fw-bolder">TẠO TÀI KHOẢN QUẢN TRỊ</h2>
                    </div>
                    <form className="form-register row">
                        <div className="mb-3 form-register-item col-md-6 col-12">
                            <label htmlFor="userName" className="form-label">
                                Tên người dùng
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="userName"
                                aria-describedby="emailHelp"
                                placeholder="Nguyen Van A"
                                value={payload.userName}
                                onChange={handleChange}
                            />
                            {errors?.userName && <small className="text-danger">{errors.userName}</small>}
                        </div>
                        <div className="mb-3 form-register-item col-md-6 col-12">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="abc@gmail.com"
                                value={payload.email}
                                onChange={handleChange}
                                required
                            />
                            {errors?.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div className="mb-3 form-register-item col-md-6">
                            <label htmlFor="phone" className="form-label">
                                SĐT
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                aria-describedby="emailHelp"
                                placeholder="0123xxxxxx"
                                value={payload.phone}
                                onChange={handleChange}
                            />
                            {errors?.phone && <small className="text-danger">{errors.phone}</small>}
                        </div>
                        <div className="mb-3 form-register-item col-md-3">
                            <label htmlFor="gender" className="form-label">
                                Giới tính
                            </label>
                            <select
                                className="form-select"
                                id="gender"
                                aria-label=" select example"
                                value={payload.gender}
                                onChange={handleChange}
                            >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                        <div className="mb-3 form-register-item col-md-3">
                            <label htmlFor="role" className="form-label">
                                Giới tính
                            </label>
                            <select
                                className="form-select"
                                id="role"
                                aria-label=" select example"
                                value={payload.role}
                                onChange={handleChange}
                            >
                                <option value="Nhân viên">Nhân viên</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-12">
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
                            {errors?.address && <small className="text-danger">{errors.address}</small>}
                        </div>
                        <div className="mb-3 form-register-item form-item-password">
                            <label htmlFor="password" className="form-label">
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Mật khẩu phải lớn hơn 8"
                                value={payload.password}
                                onChange={handleChange}
                            />
                            <span>
                                <AiFillEye />
                            </span>
                            <span>
                                <AiFillEyeInvisible />
                            </span>
                            {errors?.password && <small className="text-danger">{errors.password}</small>}
                        </div>
                        <div className="mb-3 form-register-item form-item-password">
                            <label htmlFor="confirmPassword" className="form-label">
                                Nhập lại mật khẩu
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Nhập lại mật khẩu ...."
                                value={payload.confirmPassword}
                                onChange={handleChange}
                            />
                            <span>
                                <AiFillEye />
                            </span>
                            <span>
                                <AiFillEyeInvisible />
                            </span>
                            {errors?.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                        </div>

                        <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-3">
                            <strong>Tạo mới</strong>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminManagerAdd;
