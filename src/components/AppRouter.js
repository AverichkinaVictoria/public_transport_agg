import React from 'react';
import {Routes, Route, Navigate, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {AUTH_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            {!isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path="*" element={<Navigate to={AUTH_ROUTE} replace />} />
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

        </Routes>
    );
};

export default AppRouter;