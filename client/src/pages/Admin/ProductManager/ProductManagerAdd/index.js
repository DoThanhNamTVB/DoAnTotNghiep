// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';

function ProductManagerAdd() {
    const navigate = useNavigate();
    const handleSunmit = (e) => {
        e.preventDefault();
        navigate(routesConfig.productManagerEdit);
    };
    return (
        <>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="sample w-100 border border-2 rounded-5">
                    <div className="header-sample text-center ">
                        <h2 className="fw-bolder">Thêm mới admin</h2>
                    </div>
                    <form className="form-sample row">
                        <div className="mb-3 form-sample-item col-md-6 col-12">
                            <label htmlFor="userName" className="form-label">
                                Tên người dùng
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="userName"
                                aria-describedby="emailHelp"
                                placeholder="Nguyen Van A"
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-6 col-12">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="abc@gmail.com"
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-6">
                            <label htmlFor="phonenumber" className="form-label">
                                SĐT
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="phonenumber"
                                aria-describedby="emailHelp"
                                placeholder="0123xxxxxx"
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-3">
                            <label htmlFor="gender" className="form-label">
                                Giới tính
                            </label>
                            <select className="form-select" id="gender" aria-label=" select example">
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                            </select>
                        </div>
                        <div className="mb-3 form-sample-item col-md-3">
                            <label htmlFor="gender" className="form-label">
                                Phân quyền
                            </label>
                            <select className="form-select" id="gender" aria-label=" select example">
                                <option value="1">Admin</option>
                                <option value="2">Nhân viên</option>
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-12">
                            <label htmlFor="formFile" className="form-label">
                                Ảnh đại diện
                            </label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="col-12 col-md-12">
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

                        <button type="submit" onClick={handleSunmit} className="btn btn-primary mb-3">
                            <strong>Thêm Mới</strong>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProductManagerAdd;
