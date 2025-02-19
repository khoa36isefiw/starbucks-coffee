import React from 'react';
// import { safeParse } from "../util/localstorage";
import { Navigate, Outlet } from 'react-router-dom';

// check authentication for login?
// if user is not logged in then auto redirect to login page
function ProtectedRoute() {
    // const token = safeParse('token'); // get from the local storage
    const token = 'token';

    return token.length > 0 ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
