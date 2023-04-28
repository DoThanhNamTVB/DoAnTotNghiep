// import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import './Login.scss';
import routesConfig from '~/config/routes';
import * as actions from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        isLoggedIn && navigate(routesConfig.home);
        console.log(isLoggedIn);
    }, [isLoggedIn, navigate]);

    const [payload, setPayload] = useState({
        email: '',
        password: '',
    });

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.login(payload));
    };

    return (
        <div className="d-flex justify-content-center align-items-center py-5 mx-3">
            <div className="login w-100 border border-2 rounded-5">
                <div className="header-login text-center ">
                    <h2 className="fw-bolder">ĐĂNG NHẬP</h2>
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
                        />
                    </div>
                    <div className="mb-3 form-login-item form-item-password">
                        <label htmlFor="password" className="form-label">
                            <strong>Mật khẩu</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Nhập mật khẩu ...."
                            value={payload.password}
                            onChange={handChange}
                        />
                        <span>
                            <AiFillEye />
                        </span>
                        <span>
                            <AiFillEyeInvisible />
                        </span>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-3">
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

export default Login;
