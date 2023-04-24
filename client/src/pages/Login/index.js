// import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Login.scss';
import routesConfig from '~/config/routes';

function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5 mx-3">
            <div className="login w-100 border border-2 rounded-5">
                <div className="header-login text-center ">
                    <h2 className="fw-bolder">ĐĂNG NHẬP</h2>
                </div>
                <form className="form-login">
                    <div className="mb-3 form-login-item">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="abc@gmail.com"
                        />
                    </div>
                    <div className="mb-3 form-login-item form-item-password">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            <strong>Mật khẩu</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Nhập mật khẩu ...."
                        />
                        <span>
                            <AiFillEye />
                        </span>
                        <span>
                            <AiFillEyeInvisible />
                        </span>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">
                        <strong>Đăng Nhập</strong>
                    </button>

                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <span>Bạn chưa có tài khoản?</span>
                            </div>
                            <div>
                                <Link to={routesConfig.register}>Đăng kí</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
