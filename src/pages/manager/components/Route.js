import moment from 'moment-timezone';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { MANAGER_MAIN_ROUTE_EDIT_ROUTE } from '../../../utils/consts';

const Route = ({route, schedule}) => {
    const navigate = useNavigate();

    const [d, setD] = useState(undefined)

    function placesToText(places) {
    return (
        <div>
            {places.map(place => (
              <div key={place.title} className="place">
                <p>{place.type}</p>
                <p>{place.vacant}</p>
                <p>{place.cost}$</p>
              </div>
            ))}
        </div>
    )
    }

    function editRoute(route) {
        navigate(MANAGER_MAIN_ROUTE_EDIT_ROUTE, {state: {route: route, schedule: schedule}});
    }

    function printInfo() {
        if (schedule === undefined) {
            return
        }

        if (d === undefined) {
            setD(new Date(schedule.departureDate))
        }

        return (
            <div className="block">
                <p><b>Route #{route.route_id}</b></p>
                <p>From {route.departure_city} to {route.arrival_city}</p>
                <p>Scheduled at {schedule.departureDate.replace("T", " ")}</p>
                <p>Duration: {route.duration}</p>
                <p>Vehicle #{schedule.vehicleId}</p>
            </div>
        )
    }

return(
    <div className="route" onClick={() => {editRoute(route)}}>
        {printInfo()}
        <div className="block">
            {/* {console.log(route)}
            {console.log(schedule)} */}
            {/* {placesToText(route.costs)} */}
        </div>
    </div>
)
}

export default Route;