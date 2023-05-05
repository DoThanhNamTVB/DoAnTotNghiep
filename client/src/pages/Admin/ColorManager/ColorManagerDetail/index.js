import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllColor, deleteColor } from '~/store/actions';

function ColorManager() {
    const dispatch = useDispatch();

    const { colors, statusDelete } = useSelector((state) => state.managerColor);

    // console.log(colors);

    useEffect(() => {
        dispatch(getAllColor());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteColor(id));
    };
    useEffect(() => {
        if (statusDelete === true) {
            toast.success('Xóa màu thành công!');
            dispatch(getAllColor());
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
                        <Link to={routesConfig.categoryManager}>Danh sách màu</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="4" className="text-center">
                            DANH SÁCH QUẢN LÝ MÀU SẢN PHẨM
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên màu</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col" className="text-center">
                            Xóa
                        </th>
                        <th scope="col" className="text-center">
                            Sửa
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {colors?.length > 0 &&
                        colors.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.colorName}</td>
                                    <td>{item.description}</td>
                                    <td>
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
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                    Xóa màu
                                                                </h1>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Bạn có chắc muốn xóa màu {item.colorName} không?
                                                                <div className="modal-footer fs-3">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-secondary"
                                                                        data-bs-dismiss="modal"
                                                                    >
                                                                        Hủy
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleDelete(item.id)}
                                                                        className="btn btn-primary"
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
                                        </div>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/color/edit/${item.id}`}
                                            className="px-3 fs-3 d-flex justify-content-center align-items-center"
                                        >
                                            <AiFillSetting />
                                        </Link>
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

export default ColorManager;
