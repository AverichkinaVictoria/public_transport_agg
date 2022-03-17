import React, { useEffect } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import * as consts from "../../utils/ConstantsManager";
import Route from './components/Route';
import { MANAGER_MAIN_ROUTE_CREATE_ROUTE, MANAGER_MAIN_ROUTE_EDIT_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router';
import { getRoutes } from '../../http/managerAPI';

const ManagerMainRoutes = () => {
    useEffect(() => {
        console.log("GETTING ROUTES >>>")
        getRoutes().then(data => {
            console.log(data.data)
        }).finally()
    })

    const navigate = useNavigate();

    function printRoutes() {
        return(
            <div className='routes'>
                {consts.ROUTES.map(route => (
                    <p className='routeRecord' key={route.id}><Route key={route.id} route={route}></Route></p>
                ))}
            </div>
        )
    }

    function createRoute() {
        navigate(MANAGER_MAIN_ROUTE_CREATE_ROUTE);
    }

    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        <div className='routes-container'>
                            <button className='create-route' onClick={() => createRoute()}>Create route</button>
                            {printRoutes()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainRoutes;