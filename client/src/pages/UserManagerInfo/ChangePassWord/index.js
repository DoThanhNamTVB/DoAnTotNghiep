import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import ButtonModal from '~/components/ButtonModal';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, putPasswordUser, reset, resetMsg } from '~/store/actions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import routesConfig from '~/config/routes';

function ChangePassward() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoggedIn, user } = useSelector((state) => state.auth);
    //set type pw
    const [type1, setType1] = useState('password');
    const [type2, setType2] = useState('password');
    const [type3, setType3] = useState('password');

    const changeTypePW1 = () => {
        setType1('text');
        if (type1 === 'text') {
            setType1('password');
        }
    };
    const changeTypePW2 = () => {
        setType2('text');
        if (type2 === 'text') {
            setType2('password');
        }
    };
    const changeTypePW3 = () => {
        setType3('text');
        if (type3 === 'text') {
            setType3('password');
        }
    };

    const [payload, setPayLoad] = useState({
        passwordOld: '',
        passwordNew: '',
        passwordConfirm: '',
    });

    var passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const validateForm = (value) => {
        const error = {};
        if (!value.passwordNew.match(passwordRegExp)) {
            error.passwordNew = 'Mật khẩu phải lớn hơn 8 kí tự, ít nhất 1 số, 1 chữ in thường, 1 chữ in hoa !';
        } else if (!value.passwordNew) {
            error.passwordNew = 'Trường này không được bỏ trống!';
        }
        if (!value.passwordOld) {
            error.passwordOld = 'Trường này không được bỏ trống!';
        }
        if (value.passwordOld === value.passwordNew) {
            error.passwordNew = 'Mật khẩu mới không được trùng với mật khẩu hiện tại';
        }
        if (!value.passwordConfirm) {
            error.passwordConfirm = 'Trường này không được bỏ trống!';
        } else if (value.passwordNew !== value.passwordConfirm) {
            error.passwordConfirm = 'Mật khẩu không khớp!';
        }
        return error;
    };
    const [errors, setErrors] = useState();

    const handleChangePW = (e) => {
        setPayLoad((pre) => ({ ...pre, [e.target.id]: e.target.value }));
        if (errors && errors[e.target.id]) {
            setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
        }
    };
    const { msgUpdatePW } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(getCurrentUser());
            navigate(routesConfig.loginPage);
        }
    }, [isLoggedIn, dispatch, navigate]);
    const handleSubmitChangePW = () => {
        const formErrs = validateForm(payload);
        if (Object.keys(formErrs).length > 0) {
            setErrors(formErrs);
        } else {
            dispatch(putPasswordUser(payload, user.id));
        }
    };

    useEffect(() => {
        if (msgUpdatePW) {
            toast.error('Mật khẩu không chính xác');
            dispatch(resetMsg());
        }
    }, [msgUpdatePW, dispatch]);

    // useEffect(() => {
    //     if (statusUpdatePW === true) {
    //         setTimeout(() => {
    //             dispatch(logout());
    //             navigate(routesConfig.loginPage);
    //         }, 2000);
    //     }
    // }, [statusUpdatePW, dispatch, navigate]);

    return (
        <div>
            <div className="header-register text-center ">
                <h2 className="fw-bolder">Đổi mật khẩu</h2>
            </div>
            <form className="form-register row">
                <div className="mb-3 form-register-item form-item-password">
                    <label htmlFor="passwordOld" className="form-label">
                        Mật khẩu cũ
                    </label>
                    <input
                        type={type1}
                        className="form-control"
                        id="passwordOld"
                        placeholder="Nhập mật khẩu cũ ...."
                        value={payload?.passwordOld || ''}
                        onChange={handleChangePW}
                    />
                    <span onClick={() => changeTypePW1()}>
                        {type1 === 'text' ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                    {errors?.passwordOld && <small className="text-danger">{errors.passwordOld}</small>}
                </div>
                <div className="mb-3 form-register-item form-item-password">
                    <label htmlFor="passwordNew" className="form-label">
                        Nhập mật khẩu mới
                    </label>
                    <input
                        type={type2}
                        className="form-control"
                        id="passwordNew"
                        placeholder="Nhập mật khẩu mới "
                        value={payload?.passwordNew || ''}
                        onChange={handleChangePW}
                    />
                    <span onClick={() => changeTypePW2()}>
                        {type2 === 'text' ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                    {errors?.passwordNew && <small className="text-danger">{errors.passwordNew}</small>}
                </div>
                <div className="mb-3 form-register-item form-item-password">
                    <label htmlFor="passwordConfirm" className="form-label">
                        Nhập lại mật khẩu
                    </label>
                    <input
                        type={type3}
                        className="form-control"
                        id="passwordConfirm"
                        placeholder="Nhập lại mật khẩu ...."
                        value={payload?.passwordConfirm || ''}
                        onChange={handleChangePW}
                    />
                    <span onClick={() => changeTypePW3()}>
                        {type3 === 'text' ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                    {errors?.passwordConfirm && <small className="text-danger">{errors.passwordConfirm}</small>}
                </div>
            </form>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="w-50">
                    <ButtonModal
                        id="btnChangePassword"
                        nameButtonAll="Đổi mật khẩu"
                        className="btn-primary w-100 fs-3 p-3 "
                        title="Thay đổi"
                        modalBody="Bạn có chắc chắn muốn thay đổi?"
                        nameButtonClose="Hủy"
                        nameButtonSubmit="Đổi mật khẩu"
                        onclick={() => handleSubmitChangePW()}
                    />
                </div>
            </div>
            {/* <ToastContainer autoClose="200" /> */}
        </div>
    );
}

export default ChangePassward;
