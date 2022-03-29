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
    getCompaniesRequests, getCurrentUserProfile,
    postCompaniesRequests,
    putCompanies, putCompaniesFiles
} from "../../http/moderatorAPI";
import axios from "axios";
import {useTranslation} from "react-i18next";
import star from "../../UI/Star.svg";
import {toJS} from "mobx";




const ModeratorTc = observer(() => {
    const { t,i18n  } = useTranslation();
    const [tableData,setTableData] = useState([])
    const [tableDataAll,setTableDataAll] = useState([])
    const [tableDataArchieve,setTableDataArchieve] = useState([])
    const [feedbackVisible,setFeedbackVisible] = useState(false)
    const [feedbackCur,setFeedbackCur] = useState({})
    const [comment,setComment] = useState('')

    const [errorMessage, setErrorMessage] = useState('');

    const closeFeedback = () => {
        //запрос на удаление по id
        console.log("TEST COMPANY NOTES>>>")
        const req = putCompanies(feedbackCur.company.id,feedbackCur.company.code,feedbackCur.company.name,feedbackCur.company.legal_name,feedbackCur.company.address,feedbackCur.company.phone,feedbackCur.company.website,feedbackCur.company.description,comment.toString(),false)
        console.log("TEST COMPANY NOTES AFTER>>>")
        console.log(req)
        setFeedbackCur({})
        setFeedbackVisible(false)

    }

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
        {title: t('managers.moderator_email'), field: 'company.code'},
        {title: t('tc.moderator_phone'), field: 'company.phone', sorting: false},
        {title: t('tc.moderator_website'), field: 'company.website'}
    ]

    const columnsAll = [
        {title: "id", field: "id", hidden: true},
        {title: t('tc.moderator_name'), field: 'name' },
        {title: t('tc.moderator_address'), field: 'address'},
        {title: t('managers.moderator_email'), field: 'code'},
        {title: t('tc.moderator_phone'), field: 'phone', sorting: false},
        {title: t('tc.moderator_website'), field: 'website'}
    ]

    const columnsArchieve = [
        {title: "id", field: "company.id", hidden: true},
        {title: t('tc.moderator_name'), field: 'company.name' },
        {title: t('tc.moderator_address'), field: 'company.address'},
        {title: t('managers.moderator_email'), field: 'company.code'},
        {title: t('tc.moderator_phone'), field: 'company.phone', sorting: false},
        {title: t('tc.moderator_website'), field: 'company.website'}
    ]



    const {companies} = useContext(Context)

    const {usersArr} = useContext(Context)

    useEffect(() => {

        console.log("LOADING getCompanies>>>")
        getCompanies().then(data => {
            console.log("ALL>>>")
            console.log(data)
            setTableDataAll(data.data.companies)

        }).finally()

        getCompaniesRequests().then(data => {
            console.log('LOADING DATA getCompaniesRequests>>>')
            console.log(data)
            // console.log(data.data.list)
            const arr = []
            const arr2 = []
            data.data.list.forEach(function(entry) {
                if (!(entry.request===null)) {
                    if (entry.request.state==='Created') {
                        arr.push(entry)
                    }
                }
                if (entry.company.is_active===false) {
                    if (!(entry.request===null)) {
                        if (!(entry.request.state==='Created')){
                            arr2.push(entry)
                        }
                    }
                }
            });
            console.log(arr)
            setTableData(arr)
            console.log(arr2)
            setTableDataArchieve(arr2)

        }).finally()
    }, [])


    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">

                        <div className="card-header-2">
                            <div className="card__title-header-2"></div>
                            <div className="card__body-header-2">

                                <div className="inside-title-header-2" >
                                    {errorMessage && (
                                        <p className="error-new" style={{font:'16px'}}> {errorMessage} </p>
                                    )}

                                </div>
                            </div>
                        </div>


                        <div className="card-header">
                            <div className="card__title-header"></div>
                            <div className="card__body-header">

                                <div className="inside-title-header">
                                    {/*For moderation:*/}
                                    {t('tc.moderator_for_moderation')}

                                </div>
                            </div>
                        </div>

                        <div className={feedbackVisible ? "moderator-TC-card active" : "moderator-TC-card"}>

                            <div className="card__body" style={{background: "rgba(63, 165, 239, 0.26)", margin: "0rem 0rem 0rem 0",
                                padding: "0.8rem"}}>
                                <div style={{overflow: "hidden"}}>
                                    <h2 style={{marginLeft:"20px"}}>{t('feedbacks.moderator_reason_text')}</h2>
                                    <textarea placeholder={t('feedbacks.moderator_reason_placeh')} id="textComment" name="textComment"
                                              style={{paddingBottom:"30px",fontSize:"16px",height: "50px",width: "500px",background: "transparent", outline: "none", border: "none", margin:"20px"}} value={comment || ''} onChange={e => setComment(e.target.value)}>
                                    </textarea>
                                </div>

                            </div>

                            <div className="card-main">

                                <div className="bttns-moderator">
                                    <button className="yes-no-bttn" onClick={closeFeedback} style={{background:"rgba(63, 165, 239, 0.26)"}} ><img src={yes_bttn} /></button>
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
                                                       console.log(data)
                                                       setFeedbackCur(data)
                                                       setFeedbackVisible(true)

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

                                                       const addedData = [...tableDataArchieve]

                                                       addedData.push(data)
                                                       setTableDataArchieve(addedData)



                                                       }

                                               },
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={documents_bttn} style={{height: "35px", width: '35px'}}/></button>,
                                                   tooltip: t('tc.moderator_show_doc'),
                                                   onClick: (e, data) => {
                                                       console.log(data.request.document_id)

                                                       //ЗАМЕНИТЬ НА data.request.document_id

                                                       getCompaniesFiles(data.request.document_id).then(function (response){
                                                           window.open(response.data.url, "_blank")
                                                       }).catch(function(){
                                                           setErrorMessage('Document not found!');
                                                           const timeId = setTimeout(() => {
                                                               // After 3 seconds set the show value to false
                                                               setErrorMessage('');
                                                           }, 3000)
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
                                                       const req = putCompanies(data.id, data.code, data.name,data.legal_name, data.address, data.phone, data.website, data.description,data.notes, false)
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

                        <div className="card-header">
                            <div className="card__title-header"></div>
                            <div className="card__body-header">
                                <div className="inside-title-header">
                                    {/*Not active:*/}
                                    {t('tc.moderator_not_act')}

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

                                           ]}
                                           columns={columnsArchieve} data={tableDataArchieve} title=''/>
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