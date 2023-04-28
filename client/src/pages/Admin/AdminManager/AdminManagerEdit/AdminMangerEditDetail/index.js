import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import '~/components/CSSForm/index.scss';
import ButtonModal from '~/components/ButtonModal';
import routesConfig from '~/config/routes';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteAdmin, getAnAdmin, putAdmin } from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function AdminMangerEditDetail() {
    const navigate = useNavigate();

    let { id } = useParams();
    // const { admin } = useSelector((state) => state.managerAdmin);
    const { admin } = useSelector((state) => state.managerAdmin);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnAdmin(id));
    }, [id]);

    const [payload, setPayload] = useState({
        userName: '',
        email: '',
        phone: '',
        gender: '',
        role: '',
        address: '',
        password: '',
    });
    useEffect(() => {
        if (admin) {
            admin.userName &&
                setPayload({
                    ...payload,
                    userName: admin.userName,
                    email: admin.email,
                    phone: admin.phone,
                    gender: admin.gender,
                    role: admin.role,
                    address: admin.address,
                    password: admin.password,
                });
        }
    }, [admin]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(putAdmin(payload, id));
        navigate(routesConfig.adminManagerAccount);
    };

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteAdmin(id));
        navigate(routesConfig.adminManagerAccount);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="sample w-100 border border-2 rounded-5">
                    <div className="header-sample text-center ">
                        <h2 className="fw-bolder">Thông tin tài khoản</h2>
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
                                value={payload.userName}
                                onChange={handChange}
                                aria-describedby="emailHelp"
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
                                value={payload.email}
                                onChange={handChange}
                                aria-describedby="emailHelp"
                                readOnly
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-6">
                            <label htmlFor="phone" className="form-label">
                                SĐT
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={payload.phone}
                                onChange={handChange}
                                id="phone"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-3">
                            <label htmlFor="gender" className="form-label">
                                Giới tính
                            </label>
                            <select
                                className="form-select"
                                id="gender"
                                value={payload.gender}
                                onChange={handChange}
                                aria-label=" select example"
                            >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                        <div className="mb-3 form-sample-item col-md-3">
                            <label htmlFor="role" className="form-label">
                                Phân quyền
                            </label>
                            <select
                                className="form-select"
                                id="role"
                                value={payload.role}
                                onChange={handChange}
                                aria-label=" select example"
                            >
                                <option value="Admin">Admin</option>
                                <option value="Nhân viên">Nhân viên</option>
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-12">
                            <label htmlFor="img" className="form-label">
                                Ảnh đại diện
                            </label>
                            <input className="form-control" type="file" id="img" />
                        </div>
                        <div className="col-12 col-md-12">
                            <label htmlFor="address" className="form-label">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={payload.address}
                                onChange={handChange}
                                id="address"
                            />
                        </div>
                        <div className="col-12 col-md-12">
                            <ButtonModal
                                id="btnUpdate"
                                nameButtonAll="Cập nhật"
                                className="btn-primary mt-4 px-0 w-100"
                                title="Cập nhật thông tin tài khoản"
                                modalBody="Bạn có chắc chắn muốn thay đổi?"
                                nameButtonClose="Hủy"
                                nameButtonSubmit="Cập nhật"
                                onclick={handleSubmit}
                            />
                        </div>
                        <div className="col-12 col-md-12">
                            <ButtonModal
                                id="btnDelete"
                                nameButtonAll="Xóa tài khoản"
                                className="btn-danger mt-4 px-0 w-100"
                                title="Xóa tài khoản"
                                modalBody="Bạn có chắc chắn muốn xóa không?"
                                nameButtonClose="Hủy"
                                nameButtonSubmit="Xóa"
                                onclick={handleDelete}
                            />
                        </div>

                        <Link to={routesConfig.adminManagerAccount}>
                            <button className="btn btn-dark mt-4 mb-3 w-100">
                                <strong>Quay lại</strong>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminMangerEditDetail;
