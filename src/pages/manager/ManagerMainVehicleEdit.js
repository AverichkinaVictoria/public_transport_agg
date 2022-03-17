import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {useLocation} from 'react-router-dom';

const ManagerMainVehicleEdit = () => {
    const location = useLocation();
    const vehicle = location.state.vehicle;
    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page-profile">
                        <div>
                            {/* <p className="vehicle-number">Vehicle #{vehicle.id}</p> */}
                            {/* <p>Type</p>
                            <p><input type="text" placeholder="Type" defaultValue={vehicle.type}></input></p>
                            <p>Brand</p>
                            <p><input type="text" placeholder="Brand" defaultValue={vehicle.brand}></input></p> */}
                            <p>Model</p>
                            <p><input type="text" placeholder="Model" defaultValue={vehicle.model}></input></p>
                            <p>Production year</p>
                            <p><input type="text" placeholder="Production year" defaultValue={vehicle.year}></input></p>
                            
                            <p><button>Save changes</button></p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerMainVehicleEdit;