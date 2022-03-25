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
        var v = data.data.seats

        if (places == null) {
            setPlaces(v)
        }

        setEcoCount(v.filter(d => d.seatClass === "Economy").length)
        setBusCount(v.filter(d => d.seatClass === "Business").length)
        setEcoCost(v.find(d => d.seatClass === "Economy") !== undefined ? v.find(d => d.seatClass === "Economy").cost : 0)
        setBusCost(v.find(d => d.seatClass === "Business") !== undefined ? v.find(d => d.seatClass === "Business").cost : 0)
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