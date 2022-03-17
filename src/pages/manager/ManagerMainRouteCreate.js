import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import { getRoute, postRoute } from "../../http/managerAPI";
import { MANAGER_MAIN_ROUTES_ROUTE } from "../../utils/consts";
import { useNavigate } from 'react-router';

const ManagerMainRouteCreate = () => {
    const [depCity, setDepCity] = useState('')
    const [arrCity, setArrCity] = useState('')
    const [depTime, setDepTime] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [vehicleId, setVehicleId] = useState('')

    const navigate = useNavigate()

    function createRoute() {
        console.log("SEND ROUTE >>>")
        console.log(postRoute(depCity, arrCity, hours, minutes, depTime, vehicleId))
        navigate(MANAGER_MAIN_ROUTES_ROUTE);
    }

    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page-route-edit">
                        <div className="routeInput">
                            <p>Departure city</p>
                            <p><input className="input-text" type="text" placeholder="Departure city" onChange={e => setDepCity(e.target.value)}></input></p>
                            <p>Arrival city</p>
                            <p><input className="input-text" type="text" placeholder="Arrival city" onChange={e => setArrCity(e.target.value)}></input></p>
                            <p>Departure time</p>
                            <p><input className="input-text" type="text" placeholder="Departure time" onChange={e => setDepTime(e.target.value)}></input></p>
                            <p>Duration</p>
                            <p><input className="input-text" type="text" placeholder="Hours" onChange={e => setHours(e.target.value)}></input></p>
                            <p><input className="input-text" type="text" placeholder="Minutes" onChange={e => setMinutes(e.target.value)}></input></p>
                            <p>Vehicle</p>
                            <p><input className="input-text" type="text" placeholder="Vehicle" onChange={e => setVehicleId(e.target.value)}></input></p>
                            
                           
                            <p><button className="create-route" onClick={() => createRoute()}>Create route</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerMainRouteCreate;