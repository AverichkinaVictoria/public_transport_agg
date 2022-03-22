import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import { getRoute } from "../../http/managerAPI";

const ManagerMainRouteEdit = () => {
    const location = useLocation();
    const route = location.state.route;

    const [depCity, setDepCity] = useState('')
    const [arrCity, setArrCity] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [vehicleId, setVehicleId] = useState('')

    useEffect(() => {
        if (location.state.isNew) {
            return
        }

        console.log("GETTING ROUTE >>>")
        getRoute(route.id).then(data => {
            console.log(data.data)
            setDepCity(data.data.departure_city)
            setArrCity(data.data.arrival_city)
            setHours(data.data.duration.hours)
            setMinutes(data.data.duration.minutes)
            // setVehicleId()
        }).finally()
    })

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function printFeedback() {
        return(
            <div className='feedback'>
                {route.feedback.map(fb => (
                    <div className='feedbackRecord' key={fb.user}>
                        <p>{fb.user} rated {fb.rate} / 5.0</p>
                        <p>{fb.subject}</p>
                        <p>{fb.message}</p>
                    </div>
                ))}
            </div>
        )
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
                            <p><input className="input-text" type="text" placeholder="Departure city" defaultValue={depCity}></input></p>
                            <p>Arrival city</p>
                            <p><input className="input-text" type="text" placeholder="Arrival city" defaultValue={arrCity}></input></p>
                            <p>Departure time</p>
                            <p><input className="input-text" type="text" placeholder="Departure time" ></input></p>
                            <p>Duration</p>
                            <p><input className="input-text" type="text" placeholder="Hours" defaultValue={hours}></input></p>
                            <p><input className="input-text" type="text" placeholder="Minutes" defaultValue={minutes}></input></p>
                            <p>Vehicle</p>
                            <p><input className="input-text" type="text" placeholder="Vehicle" ></input></p>
                            
                           
                            <p><button className="create-route">Save changes</button></p>
                        </div>
                        <div className="regularity">
                            <p>Regularity:</p>
                            <p>
                                <input type="checkbox" name="monday"></input>
                                <label htmlFor="monday"> Monday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="tuesday"></input>
                                <label htmlFor="tuesday"> Tuesday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="wednesday"></input>
                                <label htmlFor="wednesday"> Wednesday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="thursday"></input>
                                <label htmlFor="thursday"> Thursday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="friday"></input>
                                <label htmlFor="friday"> Friday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="saturday"></input>
                                <label htmlFor="saturday"> Saturday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="sunday"></input>
                                <label htmlFor="sunday"> Sunday</label>
                            </p>
                            {printFeedback()}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerMainRouteEdit;