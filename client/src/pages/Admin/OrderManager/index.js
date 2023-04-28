import { MdDeleteForever, MdEditDocument } from 'react-icons/md';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

function OrderManager() {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Quyền</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td className="icon-delete">
                            <MdDeleteForever />
                        </td>
                        <td>
                            <Link to={routesConfig.adminManagerEditDetail}>
                                <MdEditDocument />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td className="icon-delete">
                            <MdDeleteForever />
                        </td>
                        <td>
                            <Link to={routesConfig.adminManagerEditDetail}>
                                <MdEditDocument />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td className="icon-delete">
                            <MdDeleteForever />
                        </td>
                        <td>
                            <Link to={routesConfig.adminManagerEditDetail}>
                                <MdEditDocument />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default OrderManager;
