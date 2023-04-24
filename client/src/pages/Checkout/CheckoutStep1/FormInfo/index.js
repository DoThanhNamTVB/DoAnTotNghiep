import { Link } from 'react-router-dom';
import { FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa';

import './Form.scss';
import routesConfig from '~/config/routes';

function FormInfo() {
    return (
        <div className="form-info">
            <form className="row g-3 form-info-item">
                <div className="col-md-12">
                    <label htmlFor="userName" className="form-label">
                        Họ và tên
                    </label>
                    <input type="text" className="form-control" id="userName" placeholder="Nguyen Van A" />
                </div>
                <div className="col-md-7">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="nguyenvana@gmail.com" />
                </div>
                <div className="col-md-5">
                    <label htmlFor="phoneNumber" className="form-label">
                        Số điện thoại
                    </label>
                    <input type="tel" className="form-control" id="phoneNumber" placeholder="0123456789" />
                </div>
                <div className="col-12">
                    <label htmlFor="address-detail" className="form-label">
                        Địa chỉ
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address-detail"
                        placeholder="Số nhà x, ngõ a/b, đường Cầu Diễn, quận Nam Từ Liêm, Hà Nội"
                    />
                </div>
                <div className="mb-3 col-md-12">
                    <label htmlFor="notes" className="form-label">
                        Ghi chú đơn hàng
                    </label>
                    <textarea className="form-control" id="notes" rows="2"></textarea>
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
                                id="inlineRadio1"
                                value="option1"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
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
                                id="inlineRadio3"
                                value="option3"
                                disabled
                            />
                            <label
                                className="form-check-label d-flex justify-content-center align-items-center"
                                htmlFor="inlineRadio3"
                            >
                                <FaMoneyCheckAlt />
                                <span className="ms-4">Chuyển khoản qua ngân hàng</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <Link to={routesConfig.cartPage}>
                        <button className="btn btn-primary">Quay lại giỏ hàng</button>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to={routesConfig.checkoutstep2Page}>
                        <button type="submit" className="btn btn-primary w-100">
                            Hoàn tất đơn hàng
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default FormInfo;
