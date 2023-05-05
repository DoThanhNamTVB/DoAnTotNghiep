import { AiFillSetting } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, deleteProduct } from '~/store/actions/managerProduct';
import routesConfig from '~/config/routes';

import './OrderManager.scss';

function CategoryManager() {
    const dispatch = useDispatch();

    const { products, statusDelete } = useSelector((state) => state.managerProduct);

    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    useEffect(() => {
        if (statusDelete === true) {
            toast.success('Xóa sản phẩm thành công!');
            dispatch(getAllProduct());
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
                        <Link to={routesConfig.orderManager}>Đơn hàng</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="8" className="text-center">
                            DANH SÁCH SẢN PHẨM
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" className="text-start">
                            Tên sản phẩm
                        </th>
                        <th scope="col">Loại sản phẩm</th>
                        <th scope="col" className="text-center">
                            Giá
                        </th>
                        <th scope="col" className="text-center">
                            genderFor
                        </th>
                        <th scope="col" colSpan={2} className="text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products?.length > 0 &&
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.productName}</td>
                                    <td>{item.Category.categoryName}</td>
                                    <td className="text-center">{item.price}</td>
                                    <td className="text-center">{item.genderFor}</td>
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
                                                    <div className="modal-dialog">
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
                                            <Link
                                                to={`/product/edit/${item.id}`}
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

export default CategoryManager;
