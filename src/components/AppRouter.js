import React, {useContext} from 'react';
import {Routes, Route, Navigate, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {AUTH_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user.isAuth)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            {!user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path="*" element={<Navigate to={AUTH_ROUTE} replace />} />
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

        </Routes>
    );
});

export default AppRouter;