import { MdOutlineAutoFixHigh } from 'react-icons/md';
import { AiTwotoneFilter } from 'react-icons/ai';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '~/components/ProductItem';

import { getAllCategory, getProductByCategory, getProductFilter } from '~/store/actions';

function SearchAdvanced() {
    const dispatch = useDispatch();
    const [categoryOptions, setCategoryOptions] = useState([]);

    const { categories } = useSelector((state) => state.managerCategory);

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    useEffect(() => {
        const options = categories.map((category) => ({ value: category.id, label: category.categoryName }));
        setCategoryOptions([{ value: '', label: 'Tất cả' }, ...options]);
    }, [categories]);

    const [selectedOption, setSelectedOption] = useState();

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption?.value);
    };

    useEffect(() => {
        dispatch(getProductByCategory('casio-edifice'));
    }, [dispatch]);
    const { productCategory } = useSelector((state) => state.managerProduct);
    // console.log(productCategory);

    const [payload, setPayLoad] = useState({});
    const handleChange = (e) => {
        setPayLoad((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };

    const { productFilters } = useSelector((state) => state.managerProduct);

    const handleSubmit = () => {
        const finalPayload = { ...payload, categoryId: selectedOption };
        // console.log(finalPayload);
        dispatch(getProductFilter(finalPayload));
    };

    const handleReset = () => {
        if (payload?.gender) {
            document.querySelector(`input[name="gender"][value=${payload?.gender}]`).checked = false;
        }
        if (payload?.price) {
            document.querySelector(`input[name="price"][value='${payload?.price}']`).checked = false;
        }
        if (payload?.discount) {
            document.querySelector(`input[name="discount"][value='${payload?.discount}']`).checked = false;
        }
    };

    return (
        <div className="py-5 px-3">
            <h1 className="text-center">
                <MdOutlineAutoFixHigh className="fs-2 me-3" />
                BỘ LỌC TÌM KIẾM
            </h1>
            <div className="row">
                <div className="row col-3 py-3 row">
                    <div className="border-end border-top">
                        <div className="col-12 d-flex justify-content-between fs-2">
                            <button className="border-0 bg-transparent text-primary" onClick={handleReset}>
                                {' '}
                                <AiTwotoneFilter />
                                Xóa bộ lọc
                            </button>

                            <button className="border-0 bg-transparent text-primary" onClick={handleSubmit}>
                                {' '}
                                <AiTwotoneFilter />
                                Lọc
                            </button>
                        </div>
                        <div className="col-12 pt-5">
                            <h3>Tìm kiếm theo danh mục</h3>
                            <hr />

                            <label className="form-label">Danh mục</label>
                            <Select
                                key={[categoryOptions]}
                                defaultValue={categoryOptions && ''}
                                onChange={handleChangeSelect}
                                options={categoryOptions}
                                isSearchable
                                // value={selectedOption}
                                name="categoryId"
                                noOptionsMessage={() => 'Không có danh mục phù hợp'}
                            />
                        </div>
                        <div className="col-12 pt-5">
                            <h3>Tìm kiếm theo giá</h3>
                            <hr />
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    value="0,999999"
                                    id="price1"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="price1">
                                    Dưới 1 triệu
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    value="1000000,4999999"
                                    id="price2"
                                    onChange={handleChange}
                                />
                                <label htmlFor="price2" className="form-check-label">
                                    Từ 1- 5 triệu
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    value="5000000,14999999"
                                    id="price3"
                                    onChange={handleChange}
                                    // defaultChecked
                                />
                                <label htmlFor="price3" className="form-check-label">
                                    Từ 5 - 15 triệu
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    value="15000000,1000000000"
                                    id="price4"
                                    onChange={handleChange}
                                />
                                <label htmlFor="price4" className="form-check-label">
                                    Trên 15 triệu
                                </label>
                            </div>
                        </div>
                        <div className="col-12 pt-5">
                            <h3>Tìm kiếm theo thuộc tính</h3>
                            <hr />
                            <b className="py-3">Giới tính</b>
                            <div className="d-flex justify-content-around">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="gender1"
                                        value="Nam"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="gender1" className="form-check-label">
                                        Nam
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="gender2"
                                        value="Nữ"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="gender2" className="form-check-label">
                                        Nữ
                                    </label>
                                </div>
                            </div>
                            <b className="py-3">Giảm giá</b>
                            <div>
                                <div className="form-check py-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="discount"
                                        value="0,4"
                                        id="discount1"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="discount1" className="form-check-label">
                                        Dưới 5%
                                    </label>
                                </div>
                                <div className="form-check py-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="discount"
                                        value="5,14"
                                        id="discount2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="discount2" className="form-check-label">
                                        Từ 5- 15 %
                                    </label>
                                </div>
                                <div className="form-check py-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="discount"
                                        value="15,100"
                                        id="discount3"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="discount3" className="form-check-label">
                                        Lớn hơn 15%
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9 py-3 px-3">
                    <div className="row row-cols-2 row-cols-md-4">
                        {productFilters?.length > 0 &&
                            productFilters?.map((item, index) => {
                                return (
                                    <ProductItem
                                        key={index}
                                        className="col"
                                        sale={item?.discount}
                                        image={
                                            item?.Colors?.length > 0
                                                ? process.env.REACT_APP_SERVER_URL + item?.Colors[0]?.Product_Color?.img
                                                : ''
                                        }
                                        name={item.productName}
                                        productId={item.id}
                                        categoryName={item?.Category?.categoryName}
                                        productName={item.productName}
                                        price={item.price}
                                        categorySlug={item?.Category?.slug}
                                    />
                                );
                            })}
                    </div>
                    {!productFilters || (productFilters?.length == 0 && <h2>Không có kết quả phù hợp</h2>)}
                </div>
            </div>
        </div>
    );
}

export default SearchAdvanced;
