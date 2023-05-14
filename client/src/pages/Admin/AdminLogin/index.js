// import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { Link, useNavigate } from 'react-router-dom';

import './AdminLogin.scss';
// import routesConfig from '~/config/routes';
// import * as actions from '~/store/actions';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';

function AdminLogin() {
    const handleSubmit = () => {};

    const handChange = () => {};
    return (
        <div className="d-flex justify-content-center align-items-center py-5 mx-3">
            <div className="admin-login w-100 border border-2 rounded-5">
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
                            // value={payload.email}
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
                            // value={payload.password}
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
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
