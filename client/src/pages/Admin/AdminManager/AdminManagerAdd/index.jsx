import { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import { addAdmin, resetAdmin } from '~/store/actions';

function AdminManagerAdd() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { statusAdd } = useSelector((state) => state.managerAdmin);

    // console.log(statusAdd);

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

    //set type input password
    const [type1, setType1] = useState('password');
    const [type2, setType2] = useState('password');
    const changeTypePW1 = () => {
        setType1('text');
        if (type1 === 'text') {
            setType1('password');
        }
    };
    const changeTypePW2 = () => {
        setType2('text');
        if (type2 === 'text') {
            setType2('password');
        }
    };
    var passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
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
        } else if (!values.phone.match(regexPhoneNumber)) {
            errors.phone = 'Số điện thoại không hợp lệ!';
        }
        if (!values.address) {
            errors.address = 'Trường này là bắt buộc';
        }
        if (!values.password) {
            errors.password = 'Trường này là bắt buộc';
        } else if (!values.password.match(passwordRegExp)) {
            errors.password = 'Mật khẩu phải lớn hơn 8 kí tự, ít nhất 1 số, 1 chữ in thường, 1 chữ in hoa !';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Trường này là bắt buộc';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Mật khẩu không khớp';
        }
        return errors;
    };

    const [state, setState] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            dispatch(resetAdmin());
            dispatch(addAdmin(payload));
            setState(Math.random() + Math.floor(Math.random() + 1));
        }
    };

    useEffect(() => {
        if (statusAdd === true) {
            navigate(routesConfig.adminManagerAccount);
        }
        if (state) {
            if (statusAdd === false) {
                toast.error('Email đã tồn tại !');
                dispatch(resetAdmin());
            }
        }
    }, [statusAdd, navigate, dispatch, state]);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={routesConfig.adminManagerAccount}>Admin</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.adminCreateAccount}>Thêm mới tài khoản quản trị</Link>
                    </li>
                </ol>
            </nav>
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
                                type={type1}
                                className="form-control"
                                id="password"
                                placeholder="Mật khẩu phải lớn hơn 8"
                                value={payload.password}
                                onChange={handleChange}
                            />
                            <span onClick={() => changeTypePW1()}>
                                {type1 === 'text' ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </span>
                            {errors?.password && <small className="text-danger">{errors.password}</small>}
                        </div>
                        <div className="mb-3 form-register-item form-item-password">
                            <label htmlFor="confirmPassword" className="form-label">
                                Nhập lại mật khẩu
                            </label>
                            <input
                                type={type2}
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Nhập lại mật khẩu ...."
                                value={payload.confirmPassword}
                                onChange={handleChange}
                            />
                            <span onClick={() => changeTypePW2()}>
                                {type2 === 'text' ? <AiFillEye /> : <AiFillEyeInvisible />}
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
