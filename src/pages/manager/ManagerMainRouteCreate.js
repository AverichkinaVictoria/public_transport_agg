import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import { getRoute, postRoute } from "../../http/managerAPI";
import { MANAGER_MAIN_ROUTES_ROUTE } from "../../utils/consts";
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ManagerMainRouteCreate = () => {
    const [depCity, setDepCity] = useState('')
    const [arrCity, setArrCity] = useState('')
    const [depDate, setDepDate] = useState()
    const [duration, setDuration] = useState('')
    const [vehicleId, setVehicleId] = useState(0)

    const navigate = useNavigate()

    function createRoute() {
        // console.log(depDate)
        console.log("SEND ROUTE >>>")
        console.log(postRoute(depCity, arrCity, duration, depDate, vehicleId))
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
                            <p>Departure date</p>
                            <DatePicker
                                className="input-text"
                                selected={depDate}
                                onChange={d => setDepDate(d)}
                                showTimeSelect
                                dateFormat="Pp"
                                placeholderText="Departure date"
                            />
                            <p>Duration</p>
                            <p><input className="input-text" type="text" placeholder="00:00:00" onChange={e => setDuration(e.target.value)}></input></p>
                            <p>Vehicle ID</p>
                            <p><input className="input-text" type="text" placeholder="Vehicle ID" onChange={e => setVehicleId(e.target.value)}></input></p>
                            
                           
                            <p><button className="create-route" onClick={() => createRoute()}>Create route</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerMainRouteCreate;