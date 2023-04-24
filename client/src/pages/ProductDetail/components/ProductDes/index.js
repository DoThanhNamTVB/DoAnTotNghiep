import './ProductDes.scss';

function ProductDes() {
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
                            <td>Nam</td>
                        </tr>
                        <tr>
                            <th>Loại máy</th>
                            <td>Automatic</td>
                        </tr>
                        <tr>
                            <th>Mặt kính</th>
                            <td>Sapphire</td>
                        </tr>
                        <tr>
                            <th>Chất liệu vỏ</th>
                            <td>Thép không gỉ 316L</td>
                        </tr>
                        <tr>
                            <th>Chất liệu dây</th>
                            <td>Thép không gỉ 316L</td>
                        </tr>
                        <tr>
                            <th>Độ chịu nước</th>
                            <td>30m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-4 col-12">
                <table className="w-100">
                    <tbody>
                        <tr>
                            <th>Kiểu dáng</th>
                            <td>Mặt tròn</td>
                        </tr>
                        <tr>
                            <th>Đường kính / Dài - rộng</th>
                            <td>39.3mm</td>
                        </tr>
                        <tr>
                            <th>Độ dày</th>
                            <td>9.8mm</td>
                        </tr>
                        <tr>
                            <th>Size dây</th>
                            <td>19mm</td>
                        </tr>
                        <tr>
                            <th>Màu mặt</th>
                            <td>Trắng</td>
                        </tr>
                        <tr>
                            <th>Xuất xứ</th>
                            <td>Thụy Sỹ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDes;
