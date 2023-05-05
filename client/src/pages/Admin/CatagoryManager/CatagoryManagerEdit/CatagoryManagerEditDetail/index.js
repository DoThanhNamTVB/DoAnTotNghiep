import '~/components/CSSForm/index.scss';
import ButtonModal from '~/components/ButtonModal';
import routesConfig from '~/config/routes';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAnCategory, putCategory } from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import slugify from '@sindresorhus/slugify';

function CategoryEdit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let { id } = useParams();

    const { category, statusPut, msg } = useSelector((state) => state.managerCategory);

    useEffect(() => {
        dispatch(getAnCategory(id));
    }, [dispatch, id]);

    const [payload, setPayload] = useState({
        categoryName: '',
    });
    useEffect(() => {
        if (category) {
            category.categoryName &&
                setPayload((prev) => ({
                    ...prev,
                    categoryName: category.categoryName,
                }));
        }
    }, [category]);

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    };

    const [errors, setErrors] = useState();

    const validateForm = (value) => {
        const error = {};
        if (!value.categoryName) {
            error.categoryName = 'Trường này không được bỏ trống!';
        }
        return error;
    };

    useEffect(() => {
        if (statusPut === true) {
            navigate(routesConfig.categoryManager);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const errForm = validateForm(payload);
        if (Object.keys(errForm).length > 0) {
            setErrors(errForm);
        } else {
            const slug = slugify(payload.categoryName);
            dispatch(putCategory({ ...payload, slug }, id));
            if (statusPut === false) {
                toast.error(msg);
            }
        }
    };

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
                        <Link to={routesConfig.categoryEdit}>Sửa danh mục</Link>
                    </li>
                </ol>
            </nav>
            <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                <div className="sample w-100 border border-2 rounded-5">
                    <div className="header-sample text-center ">
                        <h2 className="fw-bolder">Thông tin tài khoản</h2>
                    </div>
                    <form className="form-sample row">
                        <div className="mb-3 form-sample-item col-md-6 col-12">
                            <label htmlFor="categoryName" className="form-label">
                                Tên danh mục
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="categoryName"
                                value={payload.categoryName}
                                onChange={handChange}
                            />
                            <span>
                                {errors?.categoryName && <small className="text-danger">{errors.categoryName}</small>}
                            </span>
                        </div>
                        <div className="row">
                            <Link
                                to={routesConfig.categoryManager}
                                className="col-sm-6 col-12 my-2 p-0 d-flex justify-content-center align-items-center"
                            >
                                <button className="btn btn-secondary w-100">
                                    <strong>Quay lại</strong>
                                </button>
                            </Link>
                            <div className="col-12 col-sm-6 my-2 p-0 d-flex justify-content-center align-items-center">
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

export default CategoryEdit;
