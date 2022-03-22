import {useNavigate} from 'react-router-dom';
import { MANAGER_MAIN_ROUTE_EDIT_ROUTE } from '../../../utils/consts';

const Route = ({route, schedule}) => {
    const navigate = useNavigate();

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
        navigate(MANAGER_MAIN_ROUTE_EDIT_ROUTE, {state: {route: route}});
    }

return(
    <div className="route" onClick={() => {editRoute(route)}}>
        <div className="block">
            <p>Route #{route.route_id}</p>
            <p>From {route.departure_city} to {route.arrival_city}</p>
            <p>{route.duration}</p>
            <p>Vehicle #{schedule.vehicleId}</p>
        </div>
        <div className="block">
            {/* {placesToText(route.costs)} */}
        </div>
    </div>
)
}

export default Route;