import { AiFillSetting } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import routesConfig from '~/config/routes';
import { getAllProduct, deleteProduct } from '~/store/actions/managerProduct';
// import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip } from 'react-tooltip';

function ProductManager() {
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
                        <Link to={routesConfig.productManagerEdit}>Danh sách sản phẩm</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="9" className="text-center">
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
                        <th scope="col" className="text-center">
                            Xuất sứ
                        </th>
                        <th scope="col" className="text-center">
                            Xóa
                        </th>
                        <th scope="col" className="text-center">
                            Sửa
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products?.length > 0 &&
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item?.productName}</td>
                                    <td>{item?.Category?.categoryName}</td>
                                    <td className="text-center">{item?.price}</td>
                                    <td className="text-center">{item?.genderFor}</td>
                                    <td className="text-center">{item?.origin}</td>
                                    <td className="text-center">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <MdDelete
                                                data-bs-toggle="modal"
                                                data-bs-target={`#dongho${item?.id}`}
                                                className="fs-3 text-danger"
                                            />

                                            <div
                                                className="modal fade"
                                                id={`dongho${item?.id}`}
                                                tabIndex="-1"
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-2" id="exampleModalLabel">
                                                                Xóa sản phẩm
                                                            </h1>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>
                                                        <div className="modal-body fs-4">
                                                            Bạn có chắc muốn xóa sản phẩm {item?.productName} không?
                                                            <div className="modal-footer fs-4 mt-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary fs-4"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Hủy
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleDelete(item.id)}
                                                                    className="btn btn-primary fs-4"
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
                                    </td>
                                    <td className="text-center">
                                        {' '}
                                        <Link
                                            to={`/admin/product/edit/${item?.id}`}
                                            className=" fs-3 d-flex justify-content-center align-items-center"
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
            {/* <Tooltip anchorSelect="#tooltip3" />
            <Tooltip anchorSelect="#tooltip2" />
            <Tooltip anchorSelect="#tooltip1" /> */}
        </>
    );
}

export default ProductManager;
