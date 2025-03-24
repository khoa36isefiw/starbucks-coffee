import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import Hangout from './pages/Hangout';
import UserList from './pages/Test';
import DefaultLayout from './components/layouts/DefaultLayout';

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

                <Route path={'/hangout'} element={<UserList />} />

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
