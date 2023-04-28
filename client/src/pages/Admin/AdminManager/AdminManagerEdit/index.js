import { MdDeleteForever, MdEditDocument } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import routesConfig from '~/config/routes';
import { useEffect } from 'react';

import { getAllAdmin } from '~/store/actions/managerAdmin';
import { useDispatch, useSelector } from 'react-redux';

function AdminManagerEdit() {
    const dispatch = useDispatch();

    const { admins } = useSelector((state) => state.managerAdmin);

    // console.log(admins);

    useEffect(() => {
        dispatch(getAllAdmin());
    }, []);
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="7" className="text-center">
                            DANH SÁCH CÁC TÀI KHOẢN QUẢN TRỊ
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Quyền</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {admins?.length > 0 &&
                        admins.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <Link to={`/admin/${item.id}`}>
                                            <MdEditDocument />
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

export default AdminManagerEdit;
