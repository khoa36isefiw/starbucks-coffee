import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes/routes';

function App() {
    return (
        <Router>
            <Routes>
                {/* client for who not logged into the system */}
                <Route element={<DefaultLayout />}>
                    {publicRoutes.map((route) => (
                        <Route path={route.path} element={<route.component />} key={route.path} />
                    ))}
                </Route>

                {/* route for authenticated user */}

                {/* <Route element={<ProtectedRoute />}>
                    <Route element={<SalerLayout />}>
                        {salerRoutes.map((route) => (
                            <Route
                                path={route.path}
                                element={<route.component />}
                                key={route.path}
                            />
                        ))}
                    </Route>
                </Route> */}

                {/* admin */}
                <Route element={<DefaultLayout />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
