import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import { addCategory } from '~/store/actions';

function CategoryAdd() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState();

    const [payload, setPayload] = useState({
        categoryName: '',
    });
    const handleChange = (e) => {
        setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            dispatch(addCategory(payload));
            navigate(routesConfig.categoryManager);
        }
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.categoryName) {
            errors.categoryName = 'Trường này là bắt buộc';
        }
        return errors;
    };
    return (
        <>
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
        </>
    );
}

export default CategoryAdd;
