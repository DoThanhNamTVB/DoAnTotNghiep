import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { privateRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentAdmin, getCurrentUser } from './store/actions';

function App() {
    const dispatch = useDispatch();

    const { isLoggedIn, role } = useSelector((state) => state.auth);

    useEffect(() => {
        setTimeout(() => {
            if (isLoggedIn && !role) {
                dispatch(getCurrentUser());
            }
            if (isLoggedIn && role) {
                dispatch(getCurrentAdmin());
            }
        }, 1000);
    }, [isLoggedIn, dispatch, role]);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {[...publicRoutes, ...privateRoutes].map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <ToastContainer autoClose={800} />
        </Router>
    );
}

export default App;
