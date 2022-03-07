import React, {useContext} from 'react';
import {Routes, Route, Navigate, Redirect} from 'react-router-dom'
import {authRoutesManager, authRoutesModerator, publicRoutes} from "../routes";
import {AUTH_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && user.role==='manager' && authRoutesManager.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            {user.isAuth && user.role==='moderator' && authRoutesModerator.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            {(!user.isAuth || !(user.role==='manager'))&& authRoutesManager.map(({path, Component}) =>

                <Route key={path} path="*" element={<Navigate to={AUTH_ROUTE} replace />} />
            )}

            {(!user.isAuth || !(user.role==='moderator')) && authRoutesModerator.map(({path, Component}) =>
                <Route key={path} path="*" element={<Navigate to={AUTH_ROUTE} replace />} />
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

        </Routes>
    );
});

export default AppRouter;