import { Link } from 'react-router-dom';
// import routesConfig from '~/config/routes';
import { useEffect } from 'react';

import { getAllAdmin, deleteAdmin } from '~/store/actions/managerAdmin';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillSetting } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import routesConfig from '~/config/routes';

function AdminManagerEdit() {
    const dispatch = useDispatch();

    const { admins, statusDelete } = useSelector((state) => state.managerAdmin);

    // console.log(admins);

    useEffect(() => {
        dispatch(getAllAdmin());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteAdmin(id));
    };

    useEffect(() => {
        if (statusDelete === true) {
            toast.success('Xóa nhân viên thành công!');
            dispatch(getAllAdmin());
        }
    }, [dispatch, statusDelete]);
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.adminManagerAccount}>Danh sách tài khoản quản trị viên</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="7" className="text-center">
                            DANH SÁCH CÁC TÀI KHOẢN QUẢN TRỊ
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Quyền</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {admins?.length > 0 &&
                        admins.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.role}</td>
                                    <td colSpan={2}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="px-3 d-flex justify-content-center align-items-center">
                                                <MdDelete
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    className="fs-3 text-danger"
                                                />

                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog fs-3">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                    Xóa sản phẩm
                                                                </h1>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Bạn có chắc muốn xóa sản phẩm {item.productName} không?
                                                                <div className="modal-footer fs-3">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-secondary fs-3"
                                                                        data-bs-dismiss="modal"
                                                                    >
                                                                        Hủy
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleDelete(item.id)}
                                                                        className="btn btn-primary fs-3"
                                                                        data-bs-dismiss="modal"
                                                                    >
                                                                        Xóa
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to={`/admin/${item.id}`}
                                                className="px-3 fs-3 d-flex justify-content-center align-items-center"
                                            >
                                                <AiFillSetting />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <ToastContainer autoClose={2000} />
        </>
    );
}

export default AdminManagerEdit;
