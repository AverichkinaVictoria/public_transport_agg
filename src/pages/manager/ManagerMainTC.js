import React from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import * as consts from "../../utils/ConstantsManager";

const ManagerMainTc = () => {
    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page-profile">
                        <div className="left">
                            <p><img src={consts.TRANSPORT_COMPANY.icon} alt='icon'/></p>
                            <p><button type="submit">Load icon</button></p>
                        </div>
                        <div className="right">
                            <p>Transport company</p>
                            <p><input type="text" defaultValue={consts.TRANSPORT_COMPANY.name} placeholder="Name" /></p>
                            <p>Description</p>
                            <p><textarea defaultValue={consts.TRANSPORT_COMPANY.description} rows="10" cols="40" placeholder='Description' /></p>
                            <p>Website</p>
                            <p><input type="text" defaultValue={consts.TRANSPORT_COMPANY.website} placeholder='Website' /></p>
                            <p>Phone</p>
                            <p><input type="text" defaultValue={consts.TRANSPORT_COMPANY.phone} placeholder='Phone' /></p>
                            <p>Payment details</p>
                            <p><input type="text" defaultValue={consts.TRANSPORT_COMPANY.payment_details} placeholder='Payment details' /></p>
                            <p>Tax number</p>
                            <p><input type="text" defaultValue={consts.TRANSPORT_COMPANY.tax_number} placeholder='Tax number' /></p>
                            <p><button type="submit">Save changes</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainTc;