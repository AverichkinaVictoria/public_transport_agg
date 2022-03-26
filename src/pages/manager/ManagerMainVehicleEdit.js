import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { putSchema, putVehicle } from "../../http/managerAPI";
import { MANAGER_MAIN_VEHICLES_ROUTE } from "../../utils/consts";
import { useState } from "react";

const ManagerMainVehicleEdit = () => {
    const location = useLocation();
    const vehicle = location.state.vehicle;
    const places = location.state.seats;

    const [init, setInit] = useState(false)

    const [model, setModel] = useState(vehicle.model_name)
    const [year, setYear] = useState(vehicle.production_year)
    const [rows, setRows] = useState(findRows())
    const [cols, setCols] = useState(findCols())
    const [seats, setSeats] = useState(jsonToArray())
    const [ecoCost, setEcoCost] = useState(places.find(d => d.seatClass === "Economy") !== undefined 
                                            ? places.find(d => d.seatClass === "Economy").cost : 0)
    const [busCost, setBusCost] = useState(places.find(d => d.seatClass === "Business") !== undefined 
                                            ? places.find(d => d.seatClass === "Business").cost : 0)

    const navigate = useNavigate()

    function findRows() {
        if (places === undefined) {
            return 0
        }

        var clone = places.slice(0)

        return clone.sort((a, b) => b.rowLocation - a.rowLocation)[0].rowLocation + 1
    }

    function findCols() {
        if (places === undefined) {
            return 0
        }

        var clone = places.slice(0)

        return clone.sort((a, b) => b.columnLocation - a.columnLocation)[0].columnLocation + 1
    }

    function jsonToArray() {
        if (init) {
            return
        }

        var arr = []

        for (var i = 0; i < rows; i++) {
            arr.push([])

            for (var j = 0; j < cols; j++) {
                arr[i].push(places[i*cols + j].seatClass == "Economy" ? "E" : "B")
            }
        }

        setInit(true)

        return arr
    }

    function saveChanges() {
        putVehicle(vehicle.vehicle_id, model, year, seatsToJSON())
        putSchema(vehicle.vehicle_id, seatsToJSON())
        navigate(MANAGER_MAIN_VEHICLES_ROUTE)
    }

    function seatsToJSON() {
        const jsonSeat = []

        for (var i = 0; i < seats.length; i++) {
            var seat = seats[i]

            for (var j = 0; j < seat.length; j++) {
                const c = seat[j] == 'E' ? ecoCost : busCost
                const s = seat[j] == 'E' ? "Economy" : "Business"

                jsonSeat.push({
                    cost: c,
                    seatClass: s,
                    details: "",
                    rowLocation: i,
                    columnLocation: j
                })
            }
        }

        return jsonSeat
    }

    function updateSeats(rows, cols) {
        setRows(parseInt(rows))
        setCols(parseInt(cols))

        const oldArr = []
        const newArr = []

        for (let i = 0; i < cols * rows; i++) oldArr.push('E')
        
        while (oldArr.length) newArr.push(oldArr.splice(0, cols))

        setSeats(newArr)
    }

    function changeSeats(i, j, value) {
        const oldArr = seats
        oldArr[i][j] = value
        setSeats(oldArr)
    }

    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page-profile">
                        <div>
                            <p>Model</p>
                            <p><input type="text" placeholder="Model" 
                                onChange={e => setModel(e.target.value)} defaultValue={model}></input></p>

                            <p>Production year</p>
                            <p><input type="text" placeholder="Production year" 
                                onChange={e => setYear(e.target.value)} defaultValue={year}></input></p>
                            
                            <p>Rows count</p>
                            <p><input type="text" placeholder="Rows count" 
                                onChange={e => updateSeats(e.target.value, cols)} defaultValue={rows}></input></p>
                            
                            <p>Columns count</p>
                            <p><input type="text" placeholder="Columns count" 
                                onChange={e => updateSeats(rows, e.target.value)} defaultValue={cols}></input></p>
                            
                            <p>Economy cost</p>
                            <p><input type="text" placeholder="Economy cost" 
                                onChange={e => setEcoCost(e.target.value)} defaultValue={ecoCost}></input></p>
                            
                            <p>Business cost</p>
                            <p><input type="text" placeholder="Business cost" 
                                onChange={e => setBusCost(e.target.value)} defaultValue={busCost}></input></p>
                            
                            <p><button onClick={() => saveChanges()}>Save changes</button></p>
                        </div>
                        <div className="seats">
                            {seats.map((row, i) => (
                            <div key={i}>
                                {row.map((col, j) => (
                                <span key={j} className="seats-entries">
                                    <select defaultValue={seats[i][j]} onChange={e => changeSeats(i, j, e.target.value)}>
                                        <option>E</option>
                                        <option>B</option>
                                    </select>
                                </span>
                                ))}
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerMainVehicleEdit;