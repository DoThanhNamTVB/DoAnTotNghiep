import { useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUser } from '~/store/actions';

function UserManager() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.managerUser);
    console.log(users);
    useEffect(() => {
        dispatch(getAllUser());
    }, [users]);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="text-center" colSpan="8">
                            DANH SÁCH NGƯỜI DÙNG
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Status</th>
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
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>{item.status}</td>

                                    <td>
                                        <Link to={`/admin/user-manager/${item.id}`}>
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
