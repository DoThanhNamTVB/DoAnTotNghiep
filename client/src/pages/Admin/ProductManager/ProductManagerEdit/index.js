import { AiFillSetting, AiFillEye } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import routesConfig from '~/config/routes';
import { deleteProduct } from '~/store/actions/managerProduct';
import { getAllCategory, getProductByCategory } from '~/store/actions';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import formatter from '~/components/FuntionComponent/formatPrice';

// import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip } from 'react-tooltip';

function ProductManager() {
    const { role } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const [categoryOptions, setCategoryOptions] = useState([]);

    const { statusDelete } = useSelector((state) => state.managerProduct);

    const { categories } = useSelector((state) => state.managerCategory);
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    useEffect(() => {
        const options = categories.map((category) => ({ value: category.slug, label: category.categoryName }));
        setCategoryOptions(options);
    }, [categories]);

    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if (categories) {
            setSelectedOption(categories[0]?.slug);
        }
    }, [categories]);

    // console.log(selectedOption);
    useEffect(() => {
        dispatch(getProductByCategory(selectedOption));
    }, [dispatch, selectedOption, categoryOptions]);
    const { productCategory } = useSelector((state) => state.managerProduct);
    // console.log(productCategory);

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption?.value);
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };
    // console.log(statusDelete);
    // console.log(selectedOption?.slug);

    useEffect(() => {
        if (statusDelete === true) {
            toast.success('Xóa sản phẩm thành công!');
            dispatch(getProductByCategory(selectedOption));
        }
    }, [dispatch, statusDelete, selectedOption]);

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
                        <th colSpan="6" className="text-center pb-5">
                            DANH SÁCH SẢN PHẨM
                        </th>
                        <th colSpan={2}>
                            <label className="form-label">Danh mục</label>
                            <Select
                                key={[categoryOptions]}
                                defaultValue={categoryOptions && categoryOptions[0]}
                                onChange={handleChangeSelect}
                                options={categoryOptions}
                                isSearchable
                                noOptionsMessage={() => 'Không có danh mục phù hợp'}
                            />
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
                        {role && role === 'Admin' && (
                            <th scope="col" className="text-center">
                                Xóa
                            </th>
                        )}
                        {role && role === 'Admin' ? (
                            <th scope="col" className="text-center">
                                Sửa
                            </th>
                        ) : (
                            <th scope="col" colSpan={2} className="text-center">
                                Xem
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {productCategory?.length > 0 &&
                        productCategory.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item?.productName}</td>
                                    <td>{item?.Category?.categoryName}</td>
                                    <td className="text-center">{formatter.format(item?.price)}</td>
                                    <td className="text-center">{item?.genderFor}</td>
                                    <td className="text-center">{item?.origin}</td>
                                    {role && role === 'Admin' && (
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
                                                                        onClick={() => handleDelete(item?.id)}
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
                                    )}
                                    <td className="text-center">
                                        {' '}
                                        <Link
                                            to={`/admin/product/edit/${item?.id}`}
                                            className=" fs-3 d-flex justify-content-center align-items-center"
                                        >
                                            {role && role === 'Admin' ? <AiFillSetting /> : <AiFillEye />}
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}

export default ProductManager;
