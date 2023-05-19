import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import './AdminLogin.scss';
import routesConfig from '~/config/routes';
import * as actions from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function AdminLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn, role } = useSelector((state) => state.auth);

    useEffect(() => {
        isLoggedIn && role && navigate(routesConfig.admin);
    }, [isLoggedIn, navigate, role]);

    //set type input password
    const [type1, setType1] = useState('password');
    const changeTypePW1 = () => {
        setType1('text');
        if (type1 === 'text') {
            setType1('password');
        }
    };

    const [payload, setPayload] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState();

    const validateForm = (value) => {
        const errors = {};
        if (!value.email) {
            errors.email = 'Trường này là bắt buộc !';
        }
        if (!value.password) {
            errors.password = 'Trường này là bắt buộc !';
        }
        return errors;
    };

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const [state, setState] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            dispatch(actions.reset());
            dispatch(actions.loginAdmin(payload));
            setState(Math.random() + Math.floor(Math.random() + 1));
        }
    };

    useEffect(() => {
        if (state) {
            if (isLoggedIn === false && !role) {
                toast.error('Lỗi đăng nhập thất bại !');
                dispatch(actions.reset());
            }
        }
    }, [isLoggedIn, role, state, dispatch]);

    return (
        <div className="d-flex justify-content-center align-items-center py-5 mx-3">
            <div className="login w-100 border border-2 rounded-5">
                <div className="header-login text-center ">
                    <h2 className="fw-bolder">ĐĂNG NHẬP ADMIN</h2>
                </div>
                <form className="form-login">
                    <div className="mb-3 form-login-item">
                        <label htmlFor="email" className="form-label">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="abc@gmail.com"
                            value={payload.email}
                            onChange={handChange}
                            name="email"
                            // autoComplete="off"
                        />
                        {errors?.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <div className="mb-3 form-login-item form-item-password">
                        <label htmlFor="password" className="form-label">
                            <strong>Mật khẩu</strong>
                        </label>
                        <input
                            type={type1}
                            className="form-control"
                            id="password"
                            placeholder="Nhập mật khẩu ...."
                            value={payload.password}
                            onChange={handChange}
                        />
                        <span onClick={() => changeTypePW1()}>
                            {type1 === 'text' ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </span>
                        {errors?.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                    <button onClick={handleSubmit} className="btn btn-primary mb-3">
                        <strong>Đăng Nhập</strong>
                    </button>

                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <span>Bạn chưa có tài khoản?</span>
                            </div>
                            <div>
                                <Link to={routesConfig.registerPage}>Đăng kí</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
