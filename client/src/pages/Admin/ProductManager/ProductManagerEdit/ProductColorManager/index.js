import { AiFillSetting } from 'react-icons/ai';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAnProduct } from '~/store/actions/managerProduct';
import { deleteProductColor, getByIdAllProductColor } from '~/store/actions/managerProductColor';
// import routesConfig from '~/config/routes';

function ProductColor() {
    const { role } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const { product } = useSelector((state) => state.managerProduct);
    const { productColors, statusDelete } = useSelector((state) => state.managerProductColor);
    // console.log(productColors);
    let { id } = useParams();

    useEffect(() => {
        dispatch(getByIdAllProductColor(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getAnProduct(id));
    }, [dispatch, id]);

    const handleDelete = (idProduct, idColor) => {
        dispatch(deleteProductColor(idProduct, idColor));
    };

    const handleGetColorName = (colorId) => {
        const find = product.Colors?.find((color) => color.id === colorId);
        return find?.colorName;
    };

    useEffect(() => {
        if (statusDelete === true) {
            toast.success('Xóa sản phẩm thành công!');
            dispatch(getByIdAllProductColor(id));
        }
    }, [dispatch, statusDelete, id]);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="6" className="text-center py-5">
                            DANH SÁCH THÔNG TIN THEO MÀU SẢN PHẨM
                        </th>
                    </tr>
                    {role && role === 'Admin' && (
                        <tr>
                            <th colSpan={5}>Thêm mới</th>
                            <td>
                                <Link
                                    to={`/admin/productColor/add/${id}`}
                                    className="p-0 fs-3 d-flex justify-content-center align-items-center"
                                >
                                    <BsDatabaseFillAdd />
                                </Link>
                            </td>
                        </tr>
                    )}

                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" className="text-start">
                            Ảnh sản phẩm
                        </th>
                        <th scope="col">Tên màu</th>
                        <th scope="col" className="text-center">
                            Số lượng
                        </th>
                        {/* <th scope="col" className="text-center">
                            Trạng thái
                        </th> */}
                        {role && role === 'Admin' && (
                            <th scope="col" className="text-center">
                                Sửa
                            </th>
                        )}
                        {role && role === 'Admin' && (
                            <th scope="col" className="text-center">
                                Xóa
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {productColors?.length > 0 &&
                        productColors.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img
                                            src={process.env.REACT_APP_SERVER_URL + item.img}
                                            alt="anh sp"
                                            className="img-fluid"
                                            width={100}
                                        />
                                    </td>
                                    <td>{handleGetColorName(item.colorId)}</td>
                                    <td className="text-center">{item.quantity}</td>
                                    {/* <td className="text-center">{item.status}</td> */}
                                    {role && role === 'Admin' && (
                                        <td className="text-center">
                                            <Link
                                                to={`/admin/productColor/edit/${item.productId}/${item.colorId}`}
                                                className=" fs-3 d-flex justify-content-center align-items-center"
                                            >
                                                <AiFillSetting />
                                            </Link>
                                        </td>
                                    )}
                                    {role && role === 'Admin' && (
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center align-items-center">
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
                                                                        onClick={() =>
                                                                            handleDelete(item.productId, item.colorId)
                                                                        }
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
                                        </td>
                                    )}
                                </tr>
                            );
                        })}
                    {productColors?.length === 0 && (
                        <>
                            <tr>
                                <td colSpan={7}>Danh sách rỗng</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
            {/* <ToastContainer autoClose={2000} /> */}
        </>
    );
}

export default ProductColor;
