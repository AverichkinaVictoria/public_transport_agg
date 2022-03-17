import React, { useState } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import { useNavigate } from 'react-router';
import { MANAGER_MAIN_VEHICLES_ROUTE } from '../../utils/consts';
import { postVehicle } from '../../http/managerAPI';

const ManagerMainVehicleCreate = () => {
    const navigate = useNavigate()

    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [rows, setRows] = useState('')
    const [cols, setCols] = useState('')
    const [seats, setSeats] = useState([])

    function createVehicle() {
        console.log('SEND VEHICLE >>>')
        console.log(model + ' ' + year)
        // console.log(postVehicle(model, year, seats))
        // navigate(MANAGER_MAIN_VEHICLES_ROUTE);
    }

    function renderSeats(rows, cols) {
        setRows(rows)
        setCols(cols)

        
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
                            <p><input type="text" placeholder="Rows count" onChange={e => setRows(e.target.value)}></input></p>
                            <p>Columns count</p>
                            <p><input type="text" placeholder="Columns count" onChange={e => setCols(e.target.value)}></input></p>

                            <p><button onClick={() => createVehicle()}>Create vehicle</button></p>
                        </div>
                        <div className="seats">
                            {board.map((row, i) => (
                            <div key={i}>
                                {row.map((col, j) => (
                                <span key={j}>{col}</span>
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