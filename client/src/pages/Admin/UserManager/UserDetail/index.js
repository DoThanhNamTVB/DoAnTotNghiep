import '~/components/CSSForm/index.scss';
import ButtonModal from '~/components/ButtonModal';
import routesConfig from '~/config/routes';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAnUser, putUser } from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function UserDetail() {
    const navigate = useNavigate();

    let { id } = useParams();

    const { user } = useSelector((state) => state.managerUser);
    // console.log('get user : ', user);

    const dispatch = useDispatch();

    dispatch(getAnUser(id));

    const [payload, setPayload] = useState({
        userName: '',
        email: '',
        phone: '',
        gender: '',
        img: '',
        status: '',
        address: '',
        password: '',
    });
    useEffect(() => {
        if (user) {
            user.userName &&
                setPayload({
                    ...payload,
                    userName: user.userName,
                    email: user.email,
                    phone: user.phone,
                    gender: user.gender,
                    img: user.img,
                    status: user.status,
                    address: user.address,
                    password: user.password,
                });
        }
    }, [user]);

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(putUser(payload, id));
        navigate(routesConfig.userManager);
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
                            <label htmlFor="userName" className="form-label">
                                Tên người dùng
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="userName"
                                value={payload.userName}
                                onChange={handChange}
                                aria-describedby="userName"
                                readOnly
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-6 col-12">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={payload.email}
                                onChange={handChange}
                                aria-describedby="emailHelp"
                                readOnly
                                get
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-6">
                            <label htmlFor="phone" className="form-label">
                                SĐT
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={payload.phone}
                                onChange={handChange}
                                id="phone"
                                aria-describedby="emailHelp"
                                readOnly
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-3">
                            <label htmlFor="gender" className="form-label">
                                Giới tính
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="gender"
                                value={payload.gender}
                                onChange={handChange}
                                readOnly
                            />
                        </div>
                        <div className="mb-3 form-sample-item col-md-3">
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <select
                                className="form-select"
                                id="status"
                                value={payload.status}
                                onChange={handChange}
                                aria-label=" select example"
                            >
                                <option value="Active">Active</option>
                                <option value="Block">Block</option>
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-12">
                            <label htmlFor="img" className="form-label">
                                Ảnh đại diện
                            </label>
                            <div className="">
                                <img src={payload.img} alt="anh dai dien" width="100px" height="100px" readOnly />
                            </div>
                            {/* <input className="form-control" type="text" id="img" readOnly>
                                {payload.img}
                            </input> */}
                        </div>
                        <div className="col-12 col-md-12">
                            <label htmlFor="address" className="form-label">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={payload.address}
                                onChange={handChange}
                                id="address"
                                readOnly
                            />
                        </div>
                        <div className="col-12 col-md-12">
                            <ButtonModal
                                id="btnUpdateUser"
                                nameButtonAll="Cập nhật trạng thái tài khoản"
                                className="btn-primary mt-4 px-0 w-100"
                                title="Cập nhật trạng thái tài khoản"
                                modalBody="Bạn có chắc chắn muốn thay đổi?"
                                nameButtonClose="Hủy"
                                nameButtonSubmit="Cập nhật"
                                onclick={handleSubmit}
                            />
                        </div>

                        <Link to={routesConfig.userManager}>
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

export default UserDetail;
