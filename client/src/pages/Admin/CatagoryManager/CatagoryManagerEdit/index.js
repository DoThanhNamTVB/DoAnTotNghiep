import { MdEditDocument } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import routesConfig from '~/config/routes';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '~/store/actions';

function CategoryManager() {
    const dispatch = useDispatch();

    const { categories } = useSelector((state) => state.managerCategory);

    useEffect(() => {
        dispatch(getAllCategory());
    }, [categories]);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="3" className="text-center">
                            DANH SÁCH CÁC DANH MỤC
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.length > 0 &&
                        categories.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.categoryName}</td>
                                    <td>
                                        <Link to={`/admin/catagory/edit/${item.id}`}>
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

export default CategoryManager;
