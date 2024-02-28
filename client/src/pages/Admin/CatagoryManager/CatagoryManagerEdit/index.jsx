import { Link } from 'react-router-dom';
// import routesConfig from '~/config/routes';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import routesConfig from '~/config/routes';
import { getAllCategory, deleteCategory, getProductByCategory, resetProduct } from '~/store/actions';

function CategoryManager() {
    const dispatch = useDispatch();

    const { categories } = useSelector((state) => state.managerCategory);
    const { productCategory } = useSelector((state) => state.managerProduct);
    // console.log(productCategory);

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    const [id, setId] = useState();
    const handleDelete = (id, slug) => {
        dispatch(resetProduct());
        dispatch(getProductByCategory(slug));
        setId(id);
    };
    useEffect(() => {
        if (productCategory?.length === 0) {
            dispatch(deleteCategory(id));
            setId(null);
            dispatch(resetProduct());
            toast.success('Xóa danh mục thành công!');
            dispatch(getAllCategory());
        } else if (productCategory?.length > 0) {
            toast.error('Danh mục hiện tại đang có sản phẩm! Hãy xóa hết sản phẩm để thực hiện chức năng!');
            dispatch(resetProduct());
        }
    }, [productCategory, dispatch, id]);
    // useEffect(() => {
    //     if (statusDelete === true) {
    //         toast.success('Xóa danh mục thành công!');
    //         dispatch(getAllCategory());
    //     }
    // }, [dispatch, statusDelete]);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.categoryManager}>Danh sách danh mục</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="3" className="text-center">
                            DANH SÁCH CÁC DANH MỤC
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.length > 0 &&
                        categories.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.categoryName}</td>
                                    <td colSpan={2}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="px-3 d-flex justify-content-center align-items-center">
                                                <MdDelete
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#category${index}`}
                                                    className="fs-3 text-danger"
                                                />

                                                <div
                                                    className="modal fade"
                                                    id={`category${index}`}
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
                                                                Bạn có chắc muốn xóa danh mục {item.categoryName} không?
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
                                                                        onClick={() => handleDelete(item.id, item.slug)}
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
                                                to={`/admin/category/edit/${item.id}`}
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
        </>
    );
}

export default CategoryManager;
