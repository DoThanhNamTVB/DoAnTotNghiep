import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import '~/components/CSSForm/index.scss';
import ButtonModal from '~/components/ButtonModal';
import routesConfig from '~/config/routes';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteAdmin, deleteCategory, getAnAdmin, getAnCategory, putAdmin, putCategory } from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function CategoryEdit() {
    const navigate = useNavigate();

    let { id } = useParams();
    const { category } = useSelector((state) => state.managerCategory);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnCategory(id));
    }, [id]);

    const [payload, setPayload] = useState({
        categoryName: '',
    });
    useEffect(() => {
        if (category) {
            category.categoryName &&
                setPayload({
                    ...payload,
                    categoryName: category.categoryName,
                });
        }
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(putCategory(payload, id));
        navigate(routesConfig.categoryManager);
    };

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCategory(id));
        navigate(routesConfig.categoryManager);
    };

    return (
        <>
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
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="col-12 col-md-12">
                            <ButtonModal
                                id="btnUpdateCategory"
                                nameButtonAll="Cập nhật"
                                className="btn-primary mt-4 px-0 w-100"
                                title="Cập nhật"
                                modalBody="Bạn có chắc chắn muốn thay đổi?"
                                nameButtonClose="Hủy"
                                nameButtonSubmit="Cập nhật"
                                onclick={handleSubmit}
                            />
                        </div>
                        <div className="col-12 col-md-12">
                            <ButtonModal
                                id="btnDeleteCategory"
                                nameButtonAll="Xóa danh mục"
                                className="btn-danger mt-4 px-0 w-100"
                                title="Xóa danh mục"
                                modalBody="Bạn có chắc chắn muốn xóa không?"
                                nameButtonClose="Hủy"
                                nameButtonSubmit="Xóa"
                                onclick={handleDelete}
                            />
                        </div>

                        <Link to={routesConfig.categoryManager}>
                            <button className="btn btn-dark mt-4 mb-3 w-100">
                                <strong>Quay lại</strong>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CategoryEdit;
