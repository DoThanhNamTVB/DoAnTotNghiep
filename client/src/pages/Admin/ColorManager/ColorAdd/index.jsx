import { useState, useEffect } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import { addColor } from '~/store/actions';
import { toast } from 'react-toastify';
import slugify from '@sindresorhus/slugify';

function ColorAdd() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { statusAdd, msgAdd } = useSelector((state) => state.managerColor);
    // console.log(statusAdd);
    // console.log(msg);
    // console.log(data);

    const [errors, setErrors] = useState({});

    const [payload, setPayload] = useState({
        colorName: '',
        description: '',
    });
    const handleChange = (e) => {
        setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    useEffect(() => {
        if (statusAdd === true) {
            navigate(routesConfig.colorManager);
        }
    }, [statusAdd, navigate]);

    const validateForm = (values) => {
        const errors = {};
        if (!values.colorName) {
            errors.colorName = 'Trường này là bắt buộc';
        }
        if (!values.description) {
            errors.description = 'Trường này là bắt buộc';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            const slug = slugify(payload.colorName);
            dispatch(addColor({ ...payload, slug }));
            if (msgAdd) {
                toast.error(msgAdd);
            }
        }
    };
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
                        <Link to={routesConfig.colorManager}>Màu sắc</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.colorAdd}>Thêm mới</Link>
                    </li>
                </ol>
            </nav>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="register w-100 border border-2 rounded-5">
                    <div className="header-register text-center ">
                        <h2 className="fw-bolder">TẠO MÀU MỚI</h2>
                    </div>
                    <form className="form-register row">
                        <div className="mb-3 form-register-item col-md-6 col-12">
                            <label htmlFor="colorName" className="form-label">
                                Tên màu mới
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="colorName"
                                aria-describedby="emailHelp"
                                placeholder="Nhập tên màu mới"
                                value={payload.colorName}
                                onChange={handleChange}
                            />
                            {errors?.colorName && <small className="text-danger">{errors.colorName}</small>}
                        </div>

                        <div className="mb-3 form-register-item col-md-6 col-12">
                            <label htmlFor="description" className="form-label">
                                Mô tả
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                aria-describedby="emailHelp"
                                placeholder="Nhập tên màu mới"
                                value={payload.description}
                                onChange={handleChange}
                            />
                            {errors?.description && <small className="text-danger">{errors.description}</small>}
                        </div>

                        <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-3">
                            <strong>Tạo mới</strong>
                        </button>
                    </form>
                </div>
            </div>
            {/* <ToastContainer autoClose={200} /> */}
        </>
    );
}

export default ColorAdd;
