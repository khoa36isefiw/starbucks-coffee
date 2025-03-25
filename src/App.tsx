import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/routes';

import UserList from './pages/Test';
import DefaultLayout from './components/layouts/DefaultLayout';
import AdminPage from './pages/Admin/AdminPage';

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

                {privateRoutes.map((route) => {
                    const Component = route.component;
                    return <Route path={route.path} element={<Component />} key={route.path} />;
                })}

                <Route path={'/hangout'} element={<UserList />} />

                <Route path={'/starbucks-manager'} element={<AdminPage />} />

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
