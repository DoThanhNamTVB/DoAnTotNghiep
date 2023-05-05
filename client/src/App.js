import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { privateRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './store/actions';

function App() {
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector((state) => state.auth);
    // console.log(user);

    useEffect(() => {
        setTimeout(() => {
            if (isLoggedIn) {
                dispatch(getCurrentUser());
            }
        }, 1000);
    }, [dispatch, isLoggedIn]);

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
        </Router>
    );
}

export default App;
