import { useState, useEffect } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import { addCategory, resetCategory } from '~/store/actions';
import { toast } from 'react-toastify';
import slugify from '@sindresorhus/slugify';

function CategoryAdd() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { statusAdd } = useSelector((state) => state.managerCategory);
    // console.log(msg);
    // console.log(data);

    const [errors, setErrors] = useState({});

    const [payload, setPayload] = useState({
        categoryName: '',
    });
    const handleChange = (e) => {
        setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.categoryName) {
            errors.categoryName = 'Trường này là bắt buộc';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            const slug = slugify(payload.categoryName);
            dispatch(resetCategory());
            dispatch(addCategory({ ...payload, slug }));
        }
    };

    // console.log(statusAdd);
    useEffect(() => {
        if (statusAdd === false) {
            toast.error('Danh mục đã tồn tại !');
            dispatch(resetCategory());
        }
        if (statusAdd === true) {
            navigate(routesConfig.categoryManager);
            dispatch(resetCategory());
        }
    }, [statusAdd, navigate, dispatch]);
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={routesConfig.categoryManager}>Danh mục</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.categoryAdd}>Thêm mới</Link>
                    </li>
                </ol>
            </nav>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="register w-100 border border-2 rounded-5">
                    <div className="header-register text-center ">
                        <h2 className="fw-bolder">TẠO DANH MỤC MỚI</h2>
                    </div>
                    <form className="form-register row">
                        <div className="mb-3 form-register-item col-md-6 col-12">
                            <label htmlFor="categoryName" className="form-label">
                                Tên danh mục
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="categoryName"
                                aria-describedby="emailHelp"
                                placeholder="Nhập tên danh mục mới"
                                value={payload.categoryName}
                                onChange={handleChange}
                            />
                            {errors?.categoryName && <small className="text-danger">{errors.categoryName}</small>}
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

export default CategoryAdd;
