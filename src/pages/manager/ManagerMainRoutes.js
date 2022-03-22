import React, { useEffect, useState } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import * as consts from "../../utils/ConstantsManager";
import Route from './components/Route';
import { MANAGER_MAIN_ROUTE_CREATE_ROUTE, MANAGER_MAIN_ROUTE_EDIT_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router';
import { getRoutes, getSchedule } from '../../http/managerAPI';

const ManagerMainRoutes = () => {
    const [routes, setRoutes] = useState([])
    const [schedule, setSchedule] = useState([])

    function loadRoutes() {
        console.log("GETTING ROUTES >>>")
        getRoutes().then(data => {
            console.log(data.data.routes)
            setRoutes(data.data.routes)
        }).finally()

        console.log("GETTING SCHEDULE >>>")
        getSchedule().then(data => {
            console.log(data.data.items)
            setSchedule(data.data.items)
        }).finally()
    }

    const navigate = useNavigate();

    function printRoutes() {
        return(
            <div className='routes'>
                {routes.map(route => (
                    <div className='routeRecord' key={route.route_id}>
                        <Route key={route.route_id} route={route} schedule={schedule.find(d => (d.routeId === route.route_id))}></Route></div>
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
                            {loadRoutes()}
                            {printRoutes()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainRoutes;