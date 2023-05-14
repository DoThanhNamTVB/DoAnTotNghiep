import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';

import '~/components/CSSForm/index.scss';
import routesConfig from '~/config/routes';
import ButtonModal from '~/components/ButtonModal';
import noImage from '~/assets/images/no-image.png';
import './UserManager.scss';
import { getCurrentUser, putInfoUser } from '~/store/actions';
import { ToastContainer, toast } from 'react-toastify';

function UserManagerInfo() {
    const { user } = useSelector((state) => state.auth);

    const { msgPutInfo, statusPutInfo } = useSelector((state) => state.managerUser);

    const dispatch = useDispatch();

    const [display, setDisplay] = useState('d-none');

    const handleClick = () => {
        setDisplay('d-block');
        if (display === 'd-block') {
            setDisplay('d-none');
        }
    };

    const [payload, setPayload] = useState({
        email: '',
        userName: '',
        phone: '',
        gender: '',
        address: '',
    });

    useEffect(() => {
        if (user) {
            setPayload((prev) => ({
                ...prev,
                email: user?.email || '',
                userName: user?.userName || '',
                phone: user?.phone || '',
                gender: user?.gender || '',
                address: user?.address || '',
            }));
        }
    }, [user]);

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.name]: e.target.value }));
        if (errors && errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
        }
    };

    const [errors, setErrors] = useState();

    //set image
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState();

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    useEffect(() => {
        return () => {
            imagePreview && URL.revokeObjectURL(imagePreview);
        };
    });

    var regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const validateForm = (value) => {
        const errors = {};
        if (!value.userName) {
            errors.productName = 'Trường này là bắt buộc !';
        }
        if (!value.phone) {
            errors.categoryId = 'Trường này là bắt buộc !';
        } else if (!value.phone.match(regexPhoneNumber)) {
            errors.phone = 'Số điện thoại không hợp lệ';
        }
        if (!value.gender) {
            errors.price = 'Trường này là bắt buộc !';
        }
        if (!value.address) {
            errors.discount = 'Trường này là bắt buộc !';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            const formData = new FormData();

            for (let key in payload) {
                formData.append(key, payload[key] || '');
            }
            formData.append('img', image);
            // for (const [key, value] of formData) {
            //     console.log(`${key}: ${value}`);
            // }
            dispatch(putInfoUser(formData, user.id));
            if (msgPutInfo) {
                toast.error('Lỗi thông tin không hợp lệ!');
            } else {
                toast.success('Cập nhật thông tin thành công!');
                dispatch(getCurrentUser());
                setDisplay('d-none');
            }
        }
    };

    useEffect(() => {
        if (statusPutInfo) {
            dispatch(getCurrentUser());
        }
    }, [dispatch, statusPutInfo]);

    return (
        <div className="p-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.home}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.managerInfoPage}>Quản lý thông tin cá nhân</Link>
                    </li>
                </ol>
            </nav>
            <div className="d-flex justify-content-center align-items-center py-5 row">
                <div className="w-100 border border-2 rounded-5 col-12 mb-5 p-5 row user-info">
                    <div className="col-md-4 col-12 avatar mb-3">
                        {user?.img ? (
                            <img
                                src={process.env.REACT_APP_SERVER_URL + user.img}
                                className="d-block w-100"
                                alt={'anh dai dien'}
                            />
                        ) : (
                            <img src={noImage} className="d-block w-100 rounded-4" alt={'Không có ảnh đại diện'} />
                        )}
                    </div>
                    <div className="col-md-8 col-12 d-block user-info-detail px-0 ps-3">
                        <div className="mb-3">
                            <b>Tên người dùng : </b>
                            <span>{user?.userName}</span>
                        </div>
                        <div className="mb-3">
                            <b>Email : </b>
                            <span>{user?.email}</span>
                        </div>
                        <div className="mb-3">
                            <b>Số điện thoại : </b>
                            <span>{user?.phone}</span>
                        </div>
                        <div className="mb-3">
                            <b>Giới tính : </b>
                            <span>{user?.gender}</span>
                        </div>
                        <div className="mb-3">
                            <b>Địa chỉ : </b>
                            <span>{user?.address}</span>
                        </div>
                        <div className="mb-3 button-setting">
                            <button className="btn btn-primary fs-3" onClick={handleClick}>
                                Chỉnh sửa thông tin
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`register col-12 w-100 border border-2 rounded-5 ${display}`}>
                    <div className="header-register text-center ">
                        <h2 className="fw-bolder">QUẢN LÝ THÔNG TIN CÁ NHÂN</h2>
                    </div>
                    <form className="form-register row">
                        <div className="mb-3 form-register-item col-md-6 col-12">
                            <label htmlFor="email-user" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email-user"
                                name="email"
                                placeholder={payload?.email}
                                disabled
                            />
                            {errors?.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div className="mb-3 form-register-item col-md-6 col-12">
                            <label htmlFor="userName" className="form-label">
                                Tên người dùng
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="userName"
                                id="userName"
                                value={payload?.userName || ''}
                                onChange={handChange}
                            />
                            {errors?.userName && <small className="text-danger">{errors.userName}</small>}
                        </div>
                        <div className="mb-3 form-register-item col-md-6">
                            <label htmlFor="phone" className="form-label">
                                SĐT
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={payload?.phone || ''}
                                onChange={handChange}
                            />
                            {errors?.phone && <small className="text-danger">{errors.phone}</small>}
                        </div>
                        <div className="mb-3 form-register-item col-md-6">
                            <label htmlFor="gender" className="form-label">
                                Giới tính
                            </label>
                            <select
                                className="form-select"
                                name="gender"
                                id="gender"
                                value={payload?.gender}
                                onChange={handChange}
                            >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                            {errors?.gender && <small className="text-danger">{errors.gender}</small>}
                        </div>
                        <div className="mb-3 col-12 col-md-12">
                            <label htmlFor="avatar" className="form-label">
                                Ảnh đại diện
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="avatar"
                                name="img"
                                onChange={handleChangeImage}
                                accept="image/*"
                            />
                        </div>
                        <div className="row">
                            {user?.img && (
                                <img
                                    src={process.env.REACT_APP_SERVER_URL + user?.img}
                                    alt="anh mau san pham"
                                    className="col-md-3 img-fluid px-0 me-4 rounded-2"
                                />
                            )}
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="anh dai dien"
                                    className="col-md-3 img-fluid px-0 rounded-2"
                                />
                            )}
                        </div>
                        <div className="col-12 col-md-12">
                            <label htmlFor="address" className="form-label">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={payload?.address || ''}
                                onChange={handChange}
                            />
                            {errors?.address && <small className="text-danger">{errors.address}</small>}
                        </div>
                    </form>
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <div className="w-50">
                            <ButtonModal
                                id="btnUpdateUser"
                                nameButtonAll="Cập nhật"
                                className="btn-primary w-100 fs-3 p-3 "
                                title="Cập nhật"
                                modalBody="Bạn có chắc chắn muốn thay đổi?"
                                nameButtonClose="Hủy"
                                nameButtonSubmit="Cập nhật"
                                onclick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose="2000" />
        </div>
    );
}

export default UserManagerInfo;
