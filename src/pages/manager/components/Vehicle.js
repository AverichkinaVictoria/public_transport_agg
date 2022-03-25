import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { getSchema } from '../../../http/managerAPI';
import { MANAGER_MAIN_VEHICLE_EDIT_ROUTE } from '../../../utils/consts';

const Vehicle = ({vehicle}) => {
const navigate = useNavigate();
const [places, setPlaces] = useState(null)
const [ecoCost, setEcoCost] = useState()
const [busCost, setBusCost] = useState()
const [ecoCount, setEcoCount] = useState()
const [busCount, setBusCount] = useState()

function initiate() {
    getSchema(vehicle.vehicle_id).then(data => {
        if (places == null) {
            setPlaces(data.data.seats)
        }

        setEcoCount(data.data.seats.filter(d => d.seatClass === "Economy").length)
        setBusCount(data.data.seats.filter(d => d.seatClass === "Business").length)
        setEcoCost(data.data.seats.find(d => d.seatClass === "Economy").cost)
        setBusCost(data.data.seats.find(d => d.seatClass === "Business").cost)
    })
}

function placesToText() {
return (
    <div>
        <div className="place">
            <p>Economy</p>
            <p>{ecoCount}</p>
            <p>{ecoCost}$</p>
        </div>
        <div className="place">
            <p>Business</p>
            <p>{busCount}</p>
            <p>{busCost}$</p>
        </div>
    </div>
)
}

function editVehicle(vehicle) {
    navigate(MANAGER_MAIN_VEHICLE_EDIT_ROUTE, {state: {vehicle: vehicle, seats: places}});
}

return (
    <div className="vehicle" onClick={() => {editVehicle(vehicle)}}>
        <div className="block">
            <p><b>Vehicle #{vehicle.vehicle_id}</b></p>
            <p>Model: {vehicle.model_name}</p>
            <p>Year: {vehicle.production_year}</p>
            <p>Capacity: {vehicle.seats_count}</p>
        </div>
        <div className="block">
            {initiate()}
            {placesToText()}
        </div>
    </div>
)
}

export default Vehicle;