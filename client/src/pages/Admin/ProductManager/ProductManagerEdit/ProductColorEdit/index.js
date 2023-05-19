import { useState, useEffect } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import { toast } from 'react-toastify';
import InputLabel from '~/components/InputLabel';
import Select from 'react-select';
import { getByIdAnProductColor, getAllColor, putProductColor } from '~/store/actions';

function ProductColorEdit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let { idProduct, idColor } = useParams();

    const { productColor, msgPut, statusPut } = useSelector((state) => state.managerProductColor);
    // console.log(productColor);
    const { colors } = useSelector((state) => state.managerColor);
    // console.log(colors);
    useEffect(() => {
        dispatch(getByIdAnProductColor(idProduct, idColor));
    }, [dispatch, idProduct, idColor]);

    useEffect(() => {
        dispatch(getAllColor());
    }, [dispatch]);

    const [errors, setErrors] = useState({});

    const [payload, setPayload] = useState({
        colorId: '',
        quantity: '',
        status: '',
    });

    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState();

    useEffect(() => {
        if (productColor) {
            productColor.productId &&
                setPayload((prev) => ({
                    ...prev,
                    colorId: productColor.colorId,
                    quantity: productColor.quantity,
                    img: productColor.img,
                    // status: productColor.status,
                }));
        }
    }, [productColor]);

    const handleChange = (e) => {
        setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const [colorOptions, setColorOptions] = useState([]);

    useEffect(() => {
        const options = colors.map((color) => ({ value: color.id, label: color.colorName }));
        setColorOptions(options);
    }, [colors]);

    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if (productColor?.colorId) {
            setSelectedOption(productColor.colorId);
        }
    }, [productColor]);

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption?.value);
    };

    // console.log(selectedOption);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalPayload = { ...payload, colorId: selectedOption };
        const formErrs = validateForm(finalPayload);
        // console.log(formErrs);
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
            dispatch(putProductColor(formData, idProduct, idColor));
            if (msgPut) {
                toast.error(msgPut);
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
        if (statusPut === true) {
            navigate('/admin/product/edit/' + idProduct);
            dispatch(getByIdAnProductColor(idProduct));
        }
    }, [statusPut, navigate, idProduct, dispatch]);

    useEffect(() => {
        if (msgPut) {
            toast.error(msgPut);
        }
    }, [msgPut]);

    // console.log(payload);

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
                        <Link to={routesConfig.productColorEdit}>Sửa màu sản phẩm</Link>
                    </li>
                </ol>
            </nav>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="register w-100 border border-2 rounded-5">
                    <div className="header-register text-center ">
                        <h2 className="fw-bolder">TẠO DANH MỤC MỚI</h2>
                    </div>
                    <form className="form-register row">
                        <div className="mb-3 form-sample-item col-sm-6 col-12">
                            <label className="form-label">Màu sắc</label>
                            <Select
                                key={[colorOptions, payload.colorId]}
                                defaultValue={colorOptions?.find((option) => option.value === payload.colorId)}
                                onChange={handleChangeSelect}
                                options={colorOptions}
                                isSearchable
                                noOptionsMessage={() => 'Không có màu phù hợp'}
                            />
                            <span>{errors?.quantity && <small className="text-danger">{errors.quantity}</small>}</span>
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
                        <div className="row">
                            {productColor?.img && (
                                <img
                                    src={process.env.REACT_APP_SERVER_URL + productColor.img}
                                    alt="anh mau san pham"
                                    className="col-md-3 img-fluid px-0 me-4 rounded-2"
                                />
                            )}
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="anh mau san pham"
                                    className="col-md-3 img-fluid px-0 rounded-2"
                                />
                            )}
                        </div>
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
                                    <strong>Cập nhật</strong>
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

export default ProductColorEdit;
