import { useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUser } from '~/store/actions';
import routesConfig from '~/config/routes';
import images from '~/assets/images';

function UserManager() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.managerUser);
    // console.log(users);
    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-">
                    <li className="breadcrumb-item">
                        <Link to={routesConfig.admin}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={routesConfig.userManager}>Quản lý người dùng</Link>
                    </li>
                </ol>
            </nav>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="text-center" colSpan="8">
                            DANH SÁCH NGƯỜI DÙNG
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avartar</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Địa chỉ</th>
                        {/* <th scope="col">Status</th> */}
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users?.length > 0 &&
                        users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img
                                            src={
                                                item?.img
                                                    ? process.env.REACT_APP_SERVER_URL + item?.img
                                                    : images.noImage
                                            }
                                            alt="anh dai dien"
                                            width="50px"
                                            height="50px"
                                            className="object-fit-contain"
                                        />
                                    </td>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    {/* <td>{item.status}</td> */}

                                    <td>
                                        <Link to={`/admin/user-manager/${item.id}`} className="fs-3">
                                            <AiFillEye />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}

export default UserManager;
