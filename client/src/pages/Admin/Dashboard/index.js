import { useEffect, useState } from 'react';
import ChartRevenueMounth from './Chart/ChartRevenueMounth';
import { useDispatch, useSelector } from 'react-redux';
import { chartOrder } from '~/store/actions';
import './dashboard.scss';
import routesConfig from '~/config/routes';
import { Link } from 'react-router-dom';

function Dashboard() {
    const dispatch = useDispatch();
    const { dataOrder } = useSelector((state) => state.chart);

    useEffect(() => {
        dispatch(chartOrder());
    }, [dispatch]);
    // console.log(dataOrder);
    const [statusDaGiao, setStatusDaGiao] = useState(0);
    const [statusDangGiao, setStatusDangGiao] = useState(0);
    const [statusChuaXN, setStatusChuaXN] = useState(0);
    const [statusDaHuy, setStatusDaHuy] = useState(0);

    useEffect(() => {
        dataOrder?.forEach((item) => {
            if (item?.status === 'da-giao') {
                setStatusDaGiao(item?.count);
            }
            if (item?.status === 'dang-giao') {
                setStatusDangGiao(item?.count);
            }
            if (item?.status === 'da-huy') {
                setStatusDaHuy(item?.count);
            }
            if (item?.status === 'chua-xac-nhan') {
                setStatusChuaXN(item?.count);
            }
        });
    }, [dataOrder]);

    return (
        <>
            <div className="w-100 bg-white row rounded-3 text-white p-0">
                <div className="row rounded-3 p-0 dashboard-status">
                    <Link className="col-md-3 py-5 px-3 text-center status-1" to={routesConfig.orderComfirming}>
                        <h2>{statusChuaXN}</h2>
                        <span>Đơn hàng chưa xác nhận</span>
                    </Link>
                    <Link className="col-md-3 py-5 px-3 text-center status-2" to={routesConfig.orderConfirmed}>
                        <h2>{statusDangGiao}</h2>
                        <span>Đơn hàng đang vận chuyển</span>
                    </Link>
                    <Link className="col-md-3 py-5 px-3 text-center status-3" to={routesConfig.orderSuccess}>
                        <h2>{statusDaGiao}</h2>
                        <span>Đơn hàng thành công</span>
                    </Link>
                    <Link className="col-md-3 py-5 px-3 text-center status-4" to={routesConfig.orderCancel}>
                        <h2>{statusDaHuy}</h2>
                        <span>Đơn hàng đã hủy</span>
                    </Link>
                </div>
            </div>
            <div className="mt-5 row d-flex justify-content-center">
                <div className="col-lg-9 col-12">
                    <ChartRevenueMounth />
                </div>
                {/* <div className="col-lg-9 col-12">
                    <ChartOrder />
                </div> */}
            </div>
        </>
    );
}

export default Dashboard;
