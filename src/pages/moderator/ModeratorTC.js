import React, {useContext, useEffect, useState} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import yes_bttn from "../../UI/yes_button.svg";
import no_bttn from "../../UI/no_button.svg";
import documents_bttn from "../../UI/documents.svg";
import {getCurrentUser, login} from "../../http/userAPI";
import CardsTc from "./components/cards_TC";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import CardsTcAll from "./components/cardsTCAll";

import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import {
    getCompanies,
    getCompaniesFiles,
    getCompaniesRequests,
    postCompaniesRequests,
    putCompanies, putCompaniesFiles
} from "../../http/moderatorAPI";
import axios from "axios";
import {useTranslation} from "react-i18next";




const ModeratorTc = observer(() => {
    const { t,i18n  } = useTranslation();
    const [tableData,setTableData] = useState([])
    const [tableDataAll,setTableDataAll] = useState([])

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const columns = [
        {title: "id", field: "company.id", hidden: true},
        {title: t('tc.moderator_name'), field: 'company.name' },
        {title: t('tc.moderator_address'), field: 'company.address'},
        {title: t('tc.moderator_phone'), field: 'company.phone', sorting: false},
        {title: t('tc.moderator_website'), field: 'company.website'}
    ]

    const columnsAll = [
        {title: "id", field: "id", hidden: true},
        {title: t('tc.moderator_name'), field: 'name' },
        {title: t('tc.moderator_address'), field: 'address'},
        {title: t('tc.moderator_phone'), field: 'phone', sorting: false},
        {title: t('tc.moderator_website'), field: 'website'}
    ]



    const {companies} = useContext(Context)

    const {usersArr} = useContext(Context)

    useEffect(() => {
        // setTableData([
        //     {id: 1, isActive: true, name: 'RZD1', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "http://rzd.ru/", documents: 'dskjfksj'},
        //     {id: 2, isActive: false, name: 'RZD2', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
        //     {id: 3, isActive: true, name: 'RZD3', address: 'moscow  moscow moscow  moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
        //     {id: 4, isActive: true, name: 'RZD4', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
        //     {id: 5, isActive: false, name: 'RZD5', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
        //     {id: 6, isActive: false, name: 'RZD6', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
        //     {id: 7, isActive: false, name: 'RZD7', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
        //     {id: 8, isActive: false, name: 'RZD8', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'}])

        // setTableData([
        //     {id: 9, isActive: true, name: 'RZD9', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "http://rzd.ru/", documents: 'dskjfksj'},
        //     {id: 10, isActive: true, name: 'RZD10', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "http://rzd.ru/", documents: 'dskjfksj'},
        //     {id: 11, isActive: true, name: 'RZD11', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "http://rzd.ru/", documents: 'dskjfksj'},
        //     {id: 12, isActive: true, name: 'RZD12', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "http://rzd.ru/", documents: 'dskjfksj'},
        // ])


        console.log("LOADING getCompanies>>>")
        getCompanies().then(data => {

            console.log(data)
            setTableDataAll(data.data.companies)

        }).finally()

        getCompaniesRequests().then(data => {
            console.log('LOADING DATA getCompaniesRequests>>>')
            console.log(data)
            // console.log(data.data.list)
            const arr = []
            data.data.list.forEach(function(entry) {
                if (!(entry.request===null)) {
                    if (entry.request.state==='Created') {
                        arr.push(entry)
                    }
                }
            });
            console.log(arr)
            setTableData(arr)

        }).finally()
    }, [])


    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">


                        <div className="card-header">
                            <div className="card__title-header"></div>
                            <div className="card__body-header">
                                <div className="inside-title-header">
                                    {/*For moderation:*/}
                                    {t('tc.moderator_for_moderation')}

                                </div>
                            </div>
                        </div>
                        <div className='moderator-table'>
                            <MaterialTable localization={{
                                pagination: {
                                    labelDisplayedRows: '{from}-{to} of {count}',
                                    labelRowsSelect: t('support.moderator_rows')
                                },
                                toolbar: {
                                    nRowsSelected: '{0} row(s) selected',
                                    searchPlaceholder: t('feedbacks.moderator_search')
                                },
                                header: {
                                    actions: t('feedbacks.moderator_actions')
                                },
                                body: {
                                    emptyDataSourceMessage: t('tc.moderator_no_records'),
                                }
                            }} icons={tableIcons} options={{ headerStyle: { position: 'initial', top: 0, fontSize:'18px', fontWeight: 'bold' }, paginationType:'stepped'}}
                                           actions={[
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={yes_bttn} style={{height: "35px", width: '35px'}}/></button>,
                                                   tooltip: t('tc.moderator_accept'),
                                                   onClick: (e, data) => {

                                                       const typ = true
                                                       console.log('TYPE OF>>>')
                                                       console.log(typeof parseInt(data.request.request_id))
                                                       const req = postCompaniesRequests(data.request.request_id, typ)
                                                       console.log("PRINTING DATA>>>")

                                                       console.log(req)
                                                           //серверные запросы на принятие
                                                       const updatedData = [...tableData]
                                                       const index = tableData.indexOf(data);
                                                       if (index > -1) {
                                                           updatedData.splice(index, 1); // 2nd parameter means remove one item only
                                                       }
                                                       setTableData(updatedData)
                                                       //обновить setTableDataAll
                                                       const addedData = [...tableDataAll]

                                                       addedData.push(data.company)
                                                       setTableDataAll(addedData)
                                                   }

                                               },
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={no_bttn} style={{height: "35px", width: '35px'}} /></button>,
                                                   tooltip: t('tc.moderator_decline'),
                                                   onClick: (e, data) => {
                                                       const req = postCompaniesRequests(data.request.request_id, false)
                                                       console.log("PRINTING DATA>>>")

                                                       console.log(req)
                                                       //серверные запросы на удаление

                                                       const updatedData = [...tableData]
                                                       const index = tableData.indexOf(data);
                                                       if (index > -1) {
                                                           updatedData.splice(index, 1); // 2nd parameter means remove one item only
                                                       }
                                                       setTableData(updatedData)

                                                       //обновить setTableDataAll

                                                       }

                                               },
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={documents_bttn} style={{height: "35px", width: '35px'}}/></button>,
                                                   tooltip: t('tc.moderator_show_doc'),
                                                   onClick: (e, data) => {
                                                       console.log(data.request.document_id)

                                                       //ЗАМЕНИТЬ НА data.request.document_id

                                                       getCompaniesFiles('144899549247705088').then(function (response){
                                                           window.open(response.data.url, "_blank")
                                                       })


                                                   }

                                               }
                                           ]}
                                           columns={columns} data={tableData} title=''/>
                        </div>

                        <div className="card-header">
                            <div className="card__title-header"></div>
                            <div className="card__body-header">
                                <div className="inside-title-header">
                                    {/*All:*/}
                                    { t('tc.moderator_all')}
                                </div>
                            </div>
                        </div>

                        <div className='moderator-table'>
                            <MaterialTable localization={{
                                pagination: {
                                    labelDisplayedRows: '{from}-{to} of {count}',
                                    labelRowsSelect: t('support.moderator_rows')
                                },
                                toolbar: {
                                    nRowsSelected: '{0} row(s) selected',
                                    searchPlaceholder: t('feedbacks.moderator_search')
                                },
                                header: {
                                    actions: t('feedbacks.moderator_actions')
                                },
                                body: {
                                    emptyDataSourceMessage: t('tc.moderator_no_records'),
                                }
                            }} icons={tableIcons} options={{ headerStyle: { position: 'initial', top: 0,fontSize:'18px', fontWeight: 'bold' }, paginationType:'stepped'}}
                                           actions={[
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={no_bttn} style={{height: "35px", width: '35px'}} /></button>,
                                                   tooltip: t('tc.moderator_delete'),
                                                   onClick: (e, data) => {
                                                       const req = putCompanies(data.id, false, data.code, data.name, data.address, data.phone, data.website, data.description)
                                                       console.log(req)
                                                       //серверные запросы на удаление

                                                       const updatedData = [...tableDataAll]
                                                       const index = tableDataAll.indexOf(data);
                                                       if (index > -1) {
                                                           updatedData.splice(index, 1); // 2nd parameter means remove one item only
                                                       }
                                                       setTableDataAll(updatedData)

                                                   }

                                               }
                                           ]}
                                           columns={columnsAll} data={tableDataAll} title=''/>
                        </div>


                        {/*{companies.companies.map(company =>{ if(company.isActive){*/}
                        {/*    return <CardsTc key={company.id} compAll= {companies} companies={company}/>}}*/}
                        {/*)}*/}



                        {/*<div className="card-header">*/}
                        {/*    <div className="card__title-header"></div>*/}
                        {/*    <div className="card__body-header">*/}
                        {/*        <div className="inside-title-header">*/}
                        {/*            All:*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*{companies.companies.map(company =>{ if(!company.isActive){*/}
                        {/*    return <CardsTcAll key={company.id} compAll= {companies} companies={company}/>}}*/}
                        {/*)}*/}
                        <div className="extra-bottom"></div>
                        <div className="extra-bottom"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>


                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModeratorTc;