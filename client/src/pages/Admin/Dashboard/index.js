function Dashboard() {
    return (
        <>
            <div className="w-100 bg-white row rounded-3 text-white p-0">
                <div className="row rounded-3 p-0">
                    <div className="col-md-3 bg-primary py-5 px-3 text-center">
                        <h2>20</h2>
                        <span>Nhân viên</span>
                    </div>
                    <div className="col-md-3 bg-warning py-5 px-3 text-center">
                        <h2>4</h2>
                        <span>Đơn hàng đang vận chuyển</span>
                    </div>
                    <div className="col-md-3 bg-danger py-5 px-3 text-center">
                        <h2>10</h2>
                        <span>Đơn hàng chưa xác nhận</span>
                    </div>
                    <div className="col-md-3 bg-primary py-5 px-3 text-center">
                        <h2>15</h2>
                        <span>Đơn hàng thành công</span>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button className="btn btn-primary fs-3">Xem thống kê</button>
            </div>
        </>
    );
}

export default Dashboard;
