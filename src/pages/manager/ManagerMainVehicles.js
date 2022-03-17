import React, { useEffect } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import Vehicle from './components/Vehicle';
import * as consts from "../../utils/ConstantsManager";
import { useNavigate } from 'react-router';
import { MANAGER_MAIN_VEHICLE_CREATE_ROUTE, MANAGER_MAIN_VEHICLE_EDIT_ROUTE } from '../../utils/consts';
import { getVehicles } from '../../http/managerAPI';

const ManagerMainVehicles = () => {
    useEffect(() => {
        console.log("LOADING getVehicles>>>")
        getVehicles().then(data => {
            console.log(data.data)
        }).finally()
    })

    const navigate = useNavigate();

    function printVehicles() {
        return(
            <div className='vehicles'>
                {consts.VEHICLES.map(vehicle => (
                    <p className='vehicleRecord' key={vehicle.id}><Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle></p>
                ))}
            </div>
        )
    }

    function createVehicle() {
        navigate(MANAGER_MAIN_VEHICLE_CREATE_ROUTE);
    }

    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        <div className='vehicle_container'>
                            <button className='create-route' onClick={() => createVehicle()}>Create vehicle</button>
                            {printVehicles()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainVehicles;