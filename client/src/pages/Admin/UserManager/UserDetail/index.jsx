import '~/components/CSSForm/index.scss';
// import ButtonModal from '~/components/ButtonModal';
import routesConfig from '~/config/routes';
import { Link, useParams } from 'react-router-dom';
import { getAnUser } from '~/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import images from '~/assets/images';

function UserDetail() {
    let { id } = useParams();

    const { account } = useSelector((state) => state.managerUser);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAnUser(id));
    }, [dispatch, id]);

    const [payload, setPayload] = useState({
        userName: '',
        email: '',
        phone: '',
        gender: '',
        img: '',
        // status: '',
        address: '',
        password: '',
    });
    useEffect(() => {
        if (account) {
            account.userName &&
                setPayload((prev) => ({
                    ...prev,
                    userName: account.userName || '',
                    email: account.email || '',
                    phone: account.phone || '',
                    gender: account.gender || '',
                    img: account.img || '',
                    // status: account.status || '',
                    address: account.address || '',
                    password: account.password || '',
                }));
        }
    }, [account]);

    const handChange = (e) => {
        setPayload((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    };

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={routesConfig.userManager}>Quản lý người dùng</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.userDetail}>Chi tiết</Link>
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
                        <div className="mb-3 form-sample-item col-md-6">
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
                        {/* <div className="mb-3 form-sample-item col-md-3">
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="status"
                                value={payload.status}
                                onChange={handChange}
                                aria-label=" select example"
                                readOnly
                            />
                        </div> */}
                        <div className="mb-3 col-12 col-md-12">
                            <span>Ảnh đại diện</span>
                            <div>
                                <img
                                    src={
                                        account?.img ? process.env.REACT_APP_SERVER_URL + account?.img : images.noImage
                                    }
                                    alt="anh dai dien"
                                    width="100px"
                                    height="100px"
                                />
                            </div>
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
