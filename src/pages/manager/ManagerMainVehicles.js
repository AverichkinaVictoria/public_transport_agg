import React, { useEffect, useState } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import Vehicle from './components/Vehicle';
import { useNavigate } from 'react-router';
import { MANAGER_MAIN_VEHICLE_CREATE_ROUTE } from '../../utils/consts';
import { getVehicles } from '../../http/managerAPI';

const ManagerMainVehicles = () => {
    const [vehicles, setVehicles] = useState([])

    function loadVehicles() {
        console.log("LOADING getVehicles>>>")
        getVehicles().then(data => {
            console.log(data.data.vehicles)
            setVehicles(data.data.vehicles)
        }).finally()
    }

    const navigate = useNavigate();

    function printVehicles() {
        return(
            <div className='vehicles'>
                
                {vehicles.map(vehicle => (
                    <p className='vehicleRecord' key={vehicle.vehicle_id}><Vehicle key={vehicle.vehicle_id} vehicle={vehicle}></Vehicle></p>
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
                            {loadVehicles()}
                            {printVehicles()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainVehicles;