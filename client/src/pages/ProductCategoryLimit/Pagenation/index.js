// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pagenation.scss';
import { FaBackward } from 'react-icons/fa';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import { useEffect, useState } from 'react';

function Pagenation({ count, currentNumber, currentSlug }) {
    const navigate = useNavigate();
    // const [numberPage, setNumberPage] = useState(+currentNumber);

    // useEffect(() => {
    //     setNumberPage(currentNumber);
    // }, [currentNumber]);

    // let [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(window.location.search));
    const limitNumber = 12;
    // const limitNumber = process.env.REACT_APP_LIMIT_NUMBER;
    // console.log('Limit : ', limitNumber);
    const pageNumbers = Math.ceil(count / limitNumber);
    const arrNumber = [];
    for (let i = 1; i <= pageNumbers; i++) {
        arrNumber.push(i);
    }
    // console.log(arrNumber);

    // useEffect(() => {
    //     function handleScroll() {
    //         console.log(window.scrollY);
    //     }
    //     window.addEventListener('scroll', handleScroll);
    // }, []);

    const handleChangePage = (item) => {
        navigate(`/danhmuc?categorySlug=${currentSlug}&page=${+item}`);
        window.scroll({
            top: 148,
            behavior: 'smooth',
        });
    };

    const handleFirstPage = () => {
        navigate(`/danhmuc?categorySlug=${currentSlug}&page=1`);
        handleChangePage(1);
    };
    const handleLastestPage = () => {
        const numberLast = arrNumber[arrNumber?.length - 1];
        navigate(`/danhmuc?categorySlug=${currentSlug}&page=${numberLast}`);
        handleChangePage(numberLast);
    };

    const [arrPageCurrent, setArrPageNumber] = useState([]);
    useEffect(() => {
        setArrPageNumber([]);
        const newArr = [];
        for (let i = +currentNumber - 2; i <= +currentNumber + 2; i++) {
            if (i > 0 && i <= pageNumbers) {
                newArr.push(i);
            }
        }
        setArrPageNumber(newArr);
    }, [currentNumber, pageNumbers]);
    // console.log(+currentNumber - 2);
    return (
        <>
            <div className="pagenationRoot">
                {arrNumber?.length > 1 && (
                    <div className="pagenation" onClick={handleFirstPage}>
                        <FaBackward />
                    </div>
                )}
                {arrPageCurrent?.length > 0 &&
                    arrPageCurrent?.map((item) => {
                        return (
                            <div
                                key={item}
                                onClick={() => handleChangePage(item)}
                                className={
                                    +currentNumber === +item ? 'activePage pagenation' : 'nonActivePage pagenation'
                                }
                            >
                                {item}
                            </div>
                        );
                    })}
                {arrNumber?.length > 1 && (
                    <div className="pagenation" onClick={handleLastestPage}>
                        <TbPlayerTrackNextFilled />
                    </div>
                )}
            </div>
        </>
    );
}

export default Pagenation;
