import {useNavigate} from 'react-router-dom';
import { MANAGER_MAIN_VEHICLE_EDIT_ROUTE } from '../../../utils/consts';

const Vehicle = ({vehicle}) => {
const navigate = useNavigate();

function placesToText(places) {
return (
    <div>
        {places.map(place => (
          <div key={place.title} className="place">
            <p>{place.type}</p>
            <p>{place.vacant}</p>
            <p>{place.cost}</p>
          </div>
        ))}
    </div>
)
}

function editVehicle(vehicle) {
    navigate(MANAGER_MAIN_VEHICLE_EDIT_ROUTE, {state: {vehicle: vehicle}});
}

return (
    <div className="vehicle" onClick={() => {editVehicle(vehicle)}}>
        <div className="block">
            <p>Vehicle #{vehicle.id}</p>
            <p>Type: {vehicle.type}</p>
            <p>Brand: {vehicle.brand}</p>
            <p>Model: {vehicle.model}</p>
            <p>Year: {vehicle.year}</p>
            <p>Number: {vehicle.number}</p>
        </div>
        <div className="block">
            {placesToText(vehicle.places)}
        </div>
    </div>
)
}

export default Vehicle;