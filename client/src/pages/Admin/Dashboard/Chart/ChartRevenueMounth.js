import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartRevenueMonth, resetChart } from '~/store/actions';
import { Line } from 'react-chartjs-2';
import { Chart as Chartjs } from 'chart.js/auto';
import Select from 'react-select';

function ChartRevenueMounth() {
    const dispatch = useDispatch();
    const { dataRevenueMonth } = useSelector((state) => state.chart);
    const [yearNumber, setYearNumber] = useState([]);

    useEffect(() => {
        dispatch(resetChart());
        dispatch(chartRevenueMonth());
    }, [dispatch]);

    useEffect(() => {
        let label = dataRevenueMonth?.map((item) => item?.year);
        let year = label?.filter((value, index) => label.indexOf(value) === index);
        setYearNumber(year);
    }, [dataRevenueMonth]);

    const [years, setYears] = useState([]);

    const [selectedOption, setSelectedOption] = useState();

    useEffect(() => {
        if (years) {
            setSelectedOption(years[years?.length - 1]);
        }
    }, [years]);

    const handleChangeSelect = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    useEffect(() => {
        const options = yearNumber.map((item) => ({ value: item, label: 'Năm ' + item }));
        setYears(options);
    }, [yearNumber]);

    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {
        let total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if (dataRevenueMonth?.length > 0) {
            dataRevenueMonth?.forEach((item) => {
                if (item?.year === selectedOption?.value) {
                    total[Number(item?.month) - 1] = item?.total;
                }
            });
        }
        setTotalPrice(total);
    }, [dataRevenueMonth, selectedOption]);

    const [data, setData] = useState({
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: 'Doanh thu',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: totalPrice,
            },
        ],
    });

    useEffect(() => {
        if (selectedOption) {
            setData((pre) => ({
                ...pre,
                datasets: [
                    {
                        label: 'Doanh thu VND',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        lineTension: 0.5,
                        pointHoverBackgroundColor: 'red',
                        pointRadius: 5,
                        data: totalPrice,
                    },
                ],
            }));
        }
    }, [totalPrice, selectedOption]);
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <b>Thống kê doanh thu theo năm</b>
                </div>
                <div className="d-flex">
                    <Select
                        key={[years]}
                        defaultValue={years && years[years?.length - 1]}
                        value={selectedOption}
                        onChange={handleChangeSelect}
                        options={years}
                        isSearchable
                        noOptionsMessage={() => 'Không có danh mục phù hợp'}
                    />
                </div>
            </div>
            <Line data={data} />
        </>
    );
}

export default ChartRevenueMounth;
