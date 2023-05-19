import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import { toast } from 'react-toastify';
import InputLabel from '~/components/InputLabel';
import Select from 'react-select';
import { addProductColor, getAllColor } from '~/store/actions';

function ProductColorAdd() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let { idProduct } = useParams();

    const { statusAdd, msgAdd } = useSelector((state) => state.managerProductColor);
    const { colors } = useSelector((state) => state.managerColor);
    // console.log(colors);
    useEffect(() => {
        dispatch(getAllColor());
    }, [dispatch]);

    const [colorOptions, setColorOptions] = useState([]);

    const [errors, setErrors] = useState({});

    const [payload, setPayload] = useState({
        quantity: '',
        status: '',
    });

    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState();

    useEffect(() => {
        const options = colors.map((color) => ({ value: color.id, label: color.colorName }));
        setColorOptions(options);
    }, [colors]);

    const [selectedOption, setSelectedOption] = useState('');

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption?.value);
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.colorId) {
            errors.colorId = 'Trường này là bắt buộc';
        }
        if (!values.quantity) {
            errors.quantity = 'Trường này là bắt buộc';
        } else if (isNaN(values.quantity)) {
            errors.quantity = 'Trường này là số';
        }
        // if (!values.status) {
        //     errors.status = 'Trường này là bắt buộc';
        // }
        return errors;
    };

    const handleChange = (e) => {
        setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalPayload = { ...payload, productId: idProduct, colorId: selectedOption };
        // console.log(finalPayload);
        const formErrs = validateForm(finalPayload);

        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            const formData = new FormData();

            for (let key in finalPayload) {
                formData.append(key, finalPayload[key] || '');
            }
            formData.append('image', image);
            // for (const [key, value] of formData) {
            //     console.log(`${key}: ${value}`);
            // }

            dispatch(addProductColor(formData));
            if (msgAdd) {
                toast.error(msgAdd);
            }
        }
    };

    useEffect(() => {
        return () => {
            imagePreview && URL.revokeObjectURL(imagePreview);
        };
    });

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    useEffect(() => {
        if (statusAdd === true) {
            navigate('/admin/product/edit/' + idProduct);
        }
    }, [statusAdd, navigate, idProduct]);

    useEffect(() => {
        if (msgAdd) {
            toast.error(msgAdd);
        }
    }, [msgAdd]);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={routesConfig.categoryManager}>Sản phẩm</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.productColorAdd}>Thêm màu mới cho sản phẩm</Link>
                    </li>
                </ol>
            </nav>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="register w-100 border border-2 rounded-5">
                    <div className="header-register text-center ">
                        <h2 className="fw-bolder">THÊM MÀU MỚI CHO SẢN PHẨM</h2>
                    </div>
                    <form className="form-register row" method="post" encType="multipath/form-data">
                        <div className="mb-3 form-sample-item col-sm-6 col-12">
                            <label className="form-label">Màu sắc</label>
                            <Select
                                key={[colorOptions, payload.categoryName]}
                                defaultValue={colorOptions?.find((option) => option.label === payload.colorName)}
                                onChange={handleChangeSelect}
                                options={colorOptions}
                                isSearchable
                                noOptionsMessage={() => 'Không có màu phù hợp'}
                            />
                        </div>
                        <InputLabel
                            className="mb-3 form-sample-item col-sm-6 col-12"
                            type="text"
                            id="quantity"
                            label="Số lượng"
                            value={payload.quantity}
                            onChange={handleChange}
                            error={errors?.quantity && <small className="text-danger">{errors.quantity}</small>}
                        />
                        <InputLabel
                            className="mb-3 form-sample-item col-sm-6 col-12"
                            type="file"
                            id="img"
                            label="Hình ảnh"
                            onChange={handleChangeImage}
                            accept="image/*"
                        />
                        {/* <InputLabel
                            className="mb-3 form-sample-item col-sm-6 col-12"
                            type="text"
                            id="status"
                            label="Trạng thái"
                            value={payload.status}
                            onChange={handleChange}
                            error={errors?.status && <small className="text-danger">{errors.status}</small>}
                        /> */}
                        {imagePreview && (
                            <div className="row">
                                <img
                                    src={imagePreview}
                                    alt="anh san pham"
                                    className="col-md-3 img-fluid px-0 rounded-2"
                                />
                            </div>
                        )}

                        <div className="row">
                            <Link
                                to={`/admin/product/edit/${idProduct}`}
                                className="col-sm-6 col-12 my-2 p-0 d-flex justify-content-center align-items-center"
                            >
                                <button className="btn btn-secondary w-100 ">
                                    <strong>Quay lại</strong>
                                </button>
                            </Link>
                            <div className=" col-12 col-sm-6 d-flex justify-content-center align-items-center">
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                    <strong>Thêm mới</strong>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <ToastContainer autoClose={2000} /> */}
        </>
    );
}

export default ProductColorAdd;
