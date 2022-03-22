import React, { useEffect, useState } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import { useNavigate } from 'react-router';
import { MANAGER_MAIN_VEHICLES_ROUTE } from '../../utils/consts';
import { postVehicle } from '../../http/managerAPI';
import { NoEncryption } from '@material-ui/icons';

const ManagerMainVehicleCreate = () => {
    const navigate = useNavigate()

    const [model, setModel] = useState('')
    const [year, setYear] = useState(0)
    const [rows, setRows] = useState(0)
    const [cols, setCols] = useState(0)
    const [seats, setSeats] = useState([])
    const [ecoCost, setEcoCost] = useState(0)
    const [busCost, setBusCost] = useState(0)

    function createVehicle() {
        postVehicle(model, year, seatsToJSON())
        navigate(MANAGER_MAIN_VEHICLES_ROUTE)
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

    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page-profile">
                        <div>
                            <p>Model</p>
                            <p><input type="text" placeholder="Model" onChange={e => setModel(e.target.value)}></input></p>
                            <p>Production year</p>
                            <p><input type="text" placeholder="Production year" onChange={e => setYear(e.target.value)}></input></p>
                            <p>Rows count</p>
                            <p><input type="text" placeholder="Rows count" onChange={e => updateSeats(e.target.value, cols)}></input></p>
                            <p>Columns count</p>
                            <p><input type="text" placeholder="Columns count" onChange={e => updateSeats(rows, e.target.value)}></input></p>
                            <p>Economy cost</p>
                            <p><input type="text" placeholder="Economy cost" onChange={e => setEcoCost(e.target.value)}></input></p>
                            <p>Business cost</p>
                            <p><input type="text" placeholder="Business cost" onChange={e => setBusCost(e.target.value)}></input></p>

                            <p><button onClick={() => createVehicle()}>Create vehicle</button></p>
                        </div>
                        <div className="seats">
                            {seats.map((row, i) => (
                            <div key={i}>
                                {row.map((col, j) => (
                                <span key={j} className="seats-entries">
                                    <select onChange={e => changeSeats(i, j, e.target.value)}>
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

export default ManagerMainVehicleCreate;