import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {useLocation} from 'react-router-dom';
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { putRoute } from "../../http/managerAPI";

const ManagerMainRouteEdit = () => {
    const location = useLocation();
    const route = location.state.route;
    const schedule = location.state.schedule;

    const [depCity, setDepCity] = useState(route.departure_city)
    const [arrCity, setArrCity] = useState(route.arrival_city)
    const [depDate, setDepDate] = useState(new Date(schedule.departureDate))
    const [duration, setDuration] = useState(route.duration)
    const [vehicleId, setVehicleId] = useState(schedule.vehicleId)

    function saveChanges() {
        putRoute(route.route_id, depCity, arrCity, duration, depDate, vehicleId)
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
                            <p><input className="input-text" type="text" placeholder="Departure city" 
                                onChange={e => setDepCity(e.target.value)} defaultValue={depCity}></input></p>

                            <p>Arrival city</p>
                            <p><input className="input-text" type="text" placeholder="Arrival city" 
                            onChange={e => setArrCity(e.target.value)} defaultValue={arrCity}></input></p>

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
                            <p><input className="input-text" type="text" placeholder="00:00:00" 
                            onChange={e => setDuration(e.target.value)} defaultValue={duration}></input></p>

                            <p>Vehicle ID</p>
                            <p><input className="input-text" type="text" placeholder="Vehicle ID" 
                            onChange={e => setVehicleId(e.target.value)} defaultValue={vehicleId}></input></p>
                            
                            
                            <p><button className="create-route" onClick={() => saveChanges()}>Save changes</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerMainRouteEdit;