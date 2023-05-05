import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import InputLabel from '~/components/InputLabel';
import ButtonModal from '~/components/ButtonModal';
import { getAnProduct, putProduct } from '~/store/actions/managerProduct';
import { getAllCategory } from '~/store/actions';
import ProductColor from '../ProductColorManager';
// import { IoLogoHackernews } from 'react-icons/io5';

function ProductManagerEditDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { id } = useParams();

    const { categories } = useSelector((state) => state.managerCategory);
    const { product, statusPut, msgPut } = useSelector((state) => state.managerProduct);

    // console.log(product);

    // console.log(statusPut);

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAnProduct(id));
    }, [dispatch, id]);

    const [payload, setPayload] = useState({
        productName: '',
        categoryName: '',
        price: '',
        discount: '',
        description: '',
        genderFor: '',
        productType: '',
        glassSurface: '',
        shellMaterial: '',
        wireMaterial: '',
        waterproofDeft: '',
        shape: '',
        dimension: '',
        thichness: '',
        sizeWire: '',
        origin: '',
    });

    const [categoryOptions, setCategoryOptions] = useState([]);

    useEffect(() => {
        if (product) {
            product.productName &&
                setPayload((prev) => ({
                    ...prev,
                    productName: product.productName || '',
                    categoryName: product.Category.categoryName || '',
                    price: product.price || '',
                    discount: product.discount || '',
                    description: product.description || '',
                    genderFor: product.genderFor || '',
                    productType: product.productType || '',
                    glassSurface: product.glassSurface || '',
                    shellMaterial: product.shellMaterial || '',
                    wireMaterial: product.wireMaterial || '',
                    waterproofDeft: product.waterproofDeft || '',
                    shape: product.shape || '',
                    dimension: product.dimension || '',
                    thichness: product.thichness || '',
                    sizeWire: product.sizeWire || '',
                    origin: product.origin || '',
                }));
        }
    }, [product]);

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const [errors, setErrors] = useState();

    const validateForm = (value) => {
        const errors = {};
        if (!value.productName) {
            errors.productName = 'Trường này là bắt buộc !';
        }
        if (!value.categoryId) {
            errors.categoryId = 'Trường này là bắt buộc !';
        }
        if (!value.price) {
            errors.price = 'Trường này là bắt buộc !';
        } else if (isNaN(value.price)) {
            errors.price = 'Trường này hãy nhập số';
        }
        if (!value.discount) {
            errors.discount = 'Trường này là bắt buộc !';
        } else if (isNaN(value.discount)) {
            errors.discount = 'Trường này hãy nhập số';
        }
        if (!value.description) {
            errors.description = 'Trường này là bắt buộc !';
        }
        if (!value.origin) {
            errors.origin = 'Trường này là bắt buộc !';
        }
        if (!value.genderFor) {
            errors.genderFor = 'Trường này là bắt buộc !';
        }
        if (!value.productType) {
            errors.productType = 'Trường này là bắt buộc !';
        }
        return errors;
    };

    useEffect(() => {
        const options = categories.map((category) => ({ value: category.id, label: category.categoryName }));
        setCategoryOptions(options);
    }, [categories]);

    const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {
        if (product?.categoryId) {
            setSelectedOption(product.categoryId);
        }
    }, [product]);

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption?.value);
    };

    useEffect(() => {
        if (statusPut === true) {
            navigate(routesConfig.productManagerEdit);
        }
    }, [statusPut, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalPayload = { ...payload, categoryId: selectedOption };
        // console.log(finalPayload);
        const formErrs = validateForm(finalPayload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            dispatch(putProduct(finalPayload, id));
        }
    };

    useEffect(() => {
        if (msgPut) {
            toast.error(msgPut);
        }
    }, [msgPut]);
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={routesConfig.productManagerEdit}>Danh sách sản phẩm</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.productManagerEditDetail}>Sửa thông tin</Link>
                    </li>
                </ol>
            </nav>
            <div className="header-sample text-center mt-3">
                <h2 className="fw-bolder">Thông tin chung về sản phẩm</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="sample w-100 border border-2 rounded-5">
                    <form className="form-sample row">
                        <div className="row">
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="productName"
                                label="Tên sản phẩm"
                                value={payload.productName}
                                onChange={handChange}
                                error={
                                    errors?.productName && <small className="text-danger">{errors.productName}</small>
                                }
                            />
                            <div className="mb-3 form-sample-item col-sm-4 col-12">
                                <label className="form-label">Danh mục</label>
                                <Select
                                    key={[categoryOptions, payload.categoryName]}
                                    defaultValue={categoryOptions?.find(
                                        (option) => option.label === payload.categoryName,
                                    )}
                                    onChange={handleChangeSelect}
                                    options={categoryOptions}
                                    isSearchable
                                    noOptionsMessage={() => 'Không có danh mục phù hợp'}
                                />
                            </div>
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="origin"
                                label="Xuất sứ"
                                value={payload.origin}
                                onChange={handChange}
                                error={errors?.origin && <small className="text-danger">{errors.origin}</small>}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="price"
                                label="Giá sản phẩm"
                                value={payload.price}
                                onChange={handChange}
                                error={errors?.price && <small className="text-danger">{errors.price}</small>}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="discount"
                                label="Phần trăm giảm giá"
                                value={payload.discount}
                                onChange={handChange}
                                error={errors?.disscount && <small className="text-danger">{errors.discount}</small>}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="genderFor"
                                label="Giành cho"
                                value={payload.genderFor}
                                onChange={handChange}
                                error={errors?.genderFor && <small className="text-danger">{errors.genderFor}</small>}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="productType"
                                label="Kiểu máy"
                                value={payload.productType}
                                onChange={handChange}
                                error={
                                    errors?.productType && <small className="text-danger">{errors.productType}</small>
                                }
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="wireMaterial"
                                label="Chất liệu dây"
                                value={payload.wireMaterial}
                                onChange={handChange}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="waterproofDeft"
                                label="Độ chống nước"
                                value={payload.waterproofDeft}
                                onChange={handChange}
                            />
                            <InputLabel
                                textarea
                                row="5"
                                className="mb-3 form-sample-item col-12"
                                type="text"
                                id="description"
                                label="Mô tả"
                                value={payload.description}
                                onChange={handChange}
                                error={
                                    errors?.description && <small className="text-danger">{errors.description}</small>
                                }
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="glassSurface"
                                label="Mặt kính"
                                value={payload.glassSurface}
                                onChange={handChange}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="shellMaterial"
                                label="Chất liệu vỏ"
                                value={payload.shellMaterial}
                                onChange={handChange}
                            />

                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="shape"
                                label="Kiểu dáng"
                                value={payload.shape}
                                onChange={handChange}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="dimension"
                                label="Kích thước"
                                value={payload.dimension}
                                onChange={handChange}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="thichness"
                                label="Độ dày"
                                value={payload.thichness}
                                onChange={handChange}
                            />
                            <InputLabel
                                className="mb-3 form-sample-item col-sm-4 col-12"
                                type="text"
                                id="sizeWire"
                                label="size dây"
                                value={payload.sizeWire}
                                onChange={handChange}
                            />
                        </div>
                        <div className="table my-3 pb-3">
                            <ProductColor />
                        </div>
                        <div className="row mt-3">
                            <Link to={routesConfig.productManagerEdit} className="col-12 col-md-6 p-0">
                                <button className="btn btn-dark w-100">
                                    <strong>Quay lại</strong>
                                </button>
                            </Link>
                            <div className="col-12 col-md-6 p-0">
                                <ButtonModal
                                    id="btnUpdateCategory"
                                    nameButtonAll="Cập nhật"
                                    className="btn-primary w-100"
                                    title="Cập nhật"
                                    modalBody="Bạn có chắc chắn muốn thay đổi?"
                                    nameButtonClose="Hủy"
                                    nameButtonSubmit="Cập nhật"
                                    onclick={handleSubmit}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </>
    );
}

export default ProductManagerEditDetail;
