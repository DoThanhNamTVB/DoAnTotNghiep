import './ProductDes.scss';
import { getAnProduct } from '~/store/actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function ProductDes() {
    const dispatch = useDispatch();

    const { product } = useSelector((state) => state.managerProduct);
    // console.log(product);

    const colorArr = product.Colors;

    const { productId } = useParams();
    useEffect(() => {
        dispatch(getAnProduct(productId));
    }, [dispatch, productId]);

    return (
        <div className="row mt-5 product-des justify-content-around align-items-center">
            <div className="title-product-des col-md-12 mb-1">
                <h1 className="text-center">Mô tả chi tiết sản phẩm</h1>
                <hr />
            </div>
            <div className="col-md-4 col-12">
                <table className="w-100">
                    <tbody>
                        <tr>
                            <th>Giới tính</th>
                            <td>{product.genderFor ? product.genderFor : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Loại máy</th>
                            <td>{product.productType ? product.productType : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Mặt kính</th>
                            <td>{product.glassSurface ? product.glassSurface : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Chất liệu vỏ</th>
                            <td>{product.shellMaterial ? product.shellMaterial : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Chất liệu dây</th>
                            <td>{product.wireMaterial ? product.wireMaterial : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Độ chịu nước</th>
                            <td>{product.waterproofDeft ? product.waterproofDeft : 'không có'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-4 col-12">
                <table className="w-100">
                    <tbody>
                        <tr>
                            <th>Kiểu dáng</th>
                            <td>{product.shape ? product.shape : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Đường kính / Dài - rộng</th>
                            <td>{product.dimension ? product.dimension : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Độ dày</th>
                            <td>{product.thichness ? product.thichness : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Size dây</th>
                            <td>{product.sizeWire ? product.sizeWire : 'không có'}</td>
                        </tr>
                        <tr>
                            <th>Màu mặt</th>
                            <td>
                                {colorArr?.length > 0 &&
                                    colorArr.map((item, index) => {
                                        return <span key={index}>{item.colorName} </span>;
                                    })}
                            </td>
                        </tr>
                        <tr>
                            <th>Xuất xứ</th>
                            <td>{product.origin ? product.origin : 'không có'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDes;
