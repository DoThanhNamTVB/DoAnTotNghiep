import '~/components/CSSForm/index.scss';
import ButtonModal from '~/components/ButtonModal';
import routesConfig from '~/config/routes';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AiFillSetting } from 'react-icons/ai';
import { getAllSetting, getSetting, putSetting } from '~/store/actions/setting';

function SettingInfo() {
    const dispatch = useDispatch();

    const { settings, setting, msg } = useSelector((state) => state.setting);

    useEffect(() => {
        dispatch(getAllSetting());
    }, [dispatch, msg]);

    const [payload, setPayload] = useState({
        id: '',
        email: '',
        time: '',
        phone: '',
    });
    useEffect(() => {
        if (setting) {
            setPayload((prev) => ({
                ...prev,
                id: setting?.id,
                email: setting?.email,
                time: setting?.time,
                phone: setting?.phone,
            }));
        }
    }, [setting]);

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const [errors, setErrors] = useState();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const validateForm = (value) => {
        const error = {};
        if (!value?.email) {
            error.email = 'Trường này không được bỏ trống!';
        } else if (!value?.email?.match(validRegex)) {
            errors.email = 'email không hợp lệ';
        }

        if (!value?.time) {
            error.time = 'Trường này không được bỏ trống!';
        }
        if (!value?.phone) {
            error.phone = 'Trường này không được bỏ trống!';
        } else if (!value?.phone?.match(regexPhoneNumber)) {
            errors.phone = 'Hãy nhập đúng số điện thoại theo định dạng!';
        }
        return error;
    };

    const [display, setDisplay] = useState('d-none');

    // if (settings?.length === 0) {
    //     setDisplay('d-block');
    // }
    const handleSetting = (id) => {
        setDisplay('d-block');
        dispatch(getSetting(id));
        if (display === 'd-block') {
            setDisplay('d-none');
        }
    };

    // console.log(payload);
    const handleSubmit = () => {
        const errForm = validateForm(payload);
        if (Object.keys(errForm).length > 0) {
            setErrors(errForm);
        } else {
            dispatch(putSetting(payload, payload.id));
            if (!msg) {
                toast.success('Cập nhật thành công !', { autoClose: 200 });
                setDisplay('d-none');
                dispatch(getAllSetting());
            } else {
                toast.error('Cập nhật thất bại !');
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
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.setting}>setting</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="4" className="text-center">
                            THÔNG TIN LIÊN HỆ CỦA WEBSITE
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col" className="text-center">
                            Thời gian hoạt động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {settings?.length > 0 &&
                        settings.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item?.email}</td>
                                    <td>{item?.phone}</td>
                                    <td className="text-center">{item?.time}</td>
                                    <td className="text-center">
                                        {' '}
                                        <button
                                            className=" fs-3 d-flex justify-content-center align-items-center border-0 text-primary"
                                            onClick={() => handleSetting(item?.id)}
                                        >
                                            <AiFillSetting />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <div className={display}>
                <div className="d-flex justify-content-center align-items-center py-5 mx-3">
                    <div className="sample w-100 border border-2 rounded-5">
                        <div className="header-sample text-center ">
                            <h2 className="fw-bolder">Quản lý thông tin website</h2>
                        </div>
                        <form className="form-sample row">
                            <div className="mb-3 form-sample-item col-md-6 col-12">
                                <label htmlFor="email" className="form-label">
                                    Email liên hệ
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={payload?.email || ''}
                                    onChange={handChange}
                                />
                                <span>{errors?.email && <small className="text-danger">{errors?.email}</small>}</span>
                            </div>
                            <div className="mb-3 form-sample-item col-md-6 col-12">
                                <label htmlFor="time" className="form-label">
                                    Thời gian hoạt động
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="time"
                                    value={payload?.time || ''}
                                    onChange={handChange}
                                />
                                <span>{errors?.time && <small className="text-danger">{errors?.time}</small>}</span>
                            </div>
                            <div className="mb-3 form-sample-item col-md-6 col-12">
                                <label htmlFor="phone" className="form-label">
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    value={payload?.phone || ''}
                                    onChange={handChange}
                                />
                                <span>{errors?.phone && <small className="text-danger">{errors?.phone}</small>}</span>
                            </div>
                            <div className="row">
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
            </div>
        </>
    );
}

export default SettingInfo;
