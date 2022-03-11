import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {useLocation} from 'react-router-dom';

const ManagerMainRouteEdit = () => {
    const location = useLocation();
    const route = location.state.route;

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
                            <p>Route #{route.id}</p>
                            <p>Departure city</p>
                            <p><input className="input-text" type="text" placeholder="Departure city" defaultValue={route.departure_city}></input></p>
                            <p>Arrival city</p>
                            <p><input className="input-text" type="text" placeholder="Arrival city" defaultValue={route.arrival_city}></input></p>
                            <p>Departure time</p>
                            <p><input className="input-text" type="text" placeholder="Departure time" defaultValue={route.departure_time}></input></p>
                            <p>Arrival time</p>
                            <p><input className="input-text" type="text" placeholder="Arrival time" defaultValue={route.arrival_time}></input></p>
                            <p>Vehicle</p>
                            <p><input className="input-text" type="text" placeholder="Vehicle" defaultValue={route.vehicle}></input></p>
                            
                            <p>Costs:</p>
                            {route.costs.map(place => (
                            <div key={place.title} className="places-costs">
                                <p>{Capitalize(place.type)}</p>
                                <p><input className="input-text" type="text" placeholder={place.type} defaultValue={place.cost}></input></p>
                            </div>
                            ))}
                            <p><button className="create-route">Save changes</button></p>
                        </div>
                        <div className="regularity">
                            <p>Regularity:</p>
                            <p>
                                <input type="checkbox" name="monday"></input>
                                <label for="monday"> Monday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="tuesday"></input>
                                <label for="tuesday"> Tuesday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="wednesday"></input>
                                <label for="wednesday"> Wednesday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="thursday"></input>
                                <label for="thursday"> Thursday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="friday"></input>
                                <label for="friday"> Friday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="saturday"></input>
                                <label for="saturday"> Saturday</label>
                            </p>
                            <p>
                                <input type="checkbox" name="sunday"></input>
                                <label for="sunday"> Sunday</label>
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