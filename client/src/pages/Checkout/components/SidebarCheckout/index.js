import ProductCheckout from './components/ProductListCheckout';

function SidebarCheckout() {
    return (
        <>
            <div className="row px-5">
                <div className="col-12 product-list-checkout">
                    <ProductCheckout />
                </div>
                <hr />
                <div className="col-12">
                    <div className="row justify-content-between">
                        <span className="col">Tạm tính</span>
                        <span className="col text-end">2,328,000đ</span>
                    </div>
                </div>
                <div className="col-12 py-4">
                    <div className="row justify-content-between">
                        <span className="col">Phí vận chuyển</span>
                        <span className="col text-end">35,000đ</span>
                    </div>
                </div>
                <hr />
                <div className="col-12 py-4">
                    <div className="row justify-content-between">
                        <span className="col">
                            <strong>Tổng cộng</strong>
                        </span>
                        <span className="col text-end">
                            <strong>2,363,000đ</strong>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarCheckout;
