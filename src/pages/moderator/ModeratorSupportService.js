import React, {forwardRef, useContext, useEffect, useState} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import {Context} from "../../index";
import {getCurrentUser} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import MaterialTable from "material-table";
import no_bttn from "../../UI/no_button.svg";
import {deleteUser, getHelpDesk, getUsersList} from "../../http/moderatorAPI";
import AddBox from "@material-ui/icons/AddBox";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Edit from "@material-ui/icons/Edit";
import SaveAlt from "@material-ui/icons/SaveAlt";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Search from "@material-ui/icons/Search";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Remove from "@material-ui/icons/Remove";
import ViewColumn from "@material-ui/icons/ViewColumn";
import documents_bttn from "../../UI/documents.svg";
import star from "../../UI/Star.svg";
import {useTranslation} from "react-i18next";

const ModeratorSupportService = observer(() => {

    const {usersArr} = useContext(Context)
    const { t,i18n  } = useTranslation();

    const [tableData,setTableData] = useState([])
    const [reportCur,setReportCur] = useState({})
    const [reportVisible,setReportVisible] = useState(false)

    const closeReport = () => {
        //запрос на удаление по id
        setReportCur({})
        setReportVisible(false)

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
        {title: "id", field: "id", hidden: true},
        {title: t('support.moderator_type'), field: 'type' },
        {title: t('support.moderator_first_name'), field: 'firstName', grouping: false },
        {title: t('support.moderator_middle_name'), field: 'middleName',sorting: false,grouping: false},
        {title: t('support.moderator_last_name'), field: 'lastName',grouping: false},
        {title: t('support.moderator_phone'), field: 'phone', sorting: false,grouping: false},
        {title: t('support.moderator_email'), field: 'email',grouping: false},
        {title: 'Report', field: 'description', hidden: true}
    ]

    useEffect(() => {
        getHelpDesk().then(data => {
            console.log('REPORTS LIST>>>')
            console.log(data.data)
            setTableData(data.data)

        }).finally()


        // setTableData([
        //     {id: 1, type: 'economic problem',role: 'user', firstName: 'Nina1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
        //     {id: 2, type: 'economic problem',role: 'user', firstName: 'Nina2', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
        //     {id: 3, type: 'comfort problem',role: 'manager', firstName: 'Nina3', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
        //     {id: 4, type: 'bug problem',role: 'user', firstName: 'Nina4', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'}
        // ])
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
                                    {/*All reports:*/}
                                    {t('support.moderator_all_reports')}
                                </div>
                            </div>
                        </div>

                        <div className={reportVisible ? "moderator-TC-card active" : "moderator-TC-card"}>

                            <div className="card__body" style={{background: "rgba(63, 165, 239, 0.26)", margin: "0rem 0rem 0rem 0",
                                padding: "0.8rem", height: '180px'}}>
                                <div className="card-moderator-1-f">
                                    <div className="card-moderator-2">
                                        <div className="card-moderator-3" >
                                            <p>{t('support.moderator_first_name')}:</p>
                                            <p>{t('support.moderator_middle_name')}:</p>
                                            <p>{t('support.moderator_last_name')}:</p>
                                            <p>{t('support.moderator_email')}:</p>
                                            <p>{t('support.moderator_phone')}:</p>
                                        </div>
                                        <div className="card-moderator-4">
                                            <p>{reportCur.firstName}</p>
                                            <p>{reportCur.middleName}</p>
                                            <p>{reportCur.lastName}</p>
                                            <p>{reportCur.email}</p>
                                            <p>{reportCur.phone}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card-main">

                                <div className="description-moderator">
                                    <p>{reportCur.description}</p>
                                </div>
                                <div className="bttns-moderator">
                                    <button className="yes-no-bttn" onClick={closeReport} style={{background:"rgba(63, 165, 239, 0.26)"}} ><img src={no_bttn} /></button>
                                </div>
                            </div>
                        </div>


                        <div className='moderator-table'>
                            <MaterialTable localization={{
                                grouping: {
                                    placeholder: t('support.moderator_group'),
                                },
                                pagination: {
                                    labelDisplayedRows: '{from}-{to} of {count}',
                                    labelRowsSelect: t('support.moderator_rows'),
                                },
                                toolbar: {
                                    nRowsSelected: '{0} row(s) selected',
                                    searchPlaceholder: t('feedbacks.moderator_search')
                                },
                                header: {
                                    actions: t('tc.moderator_actions')
                                },
                                body: {
                                    emptyDataSourceMessage: t('support.moderator_no_records'),
                                }
                            }} icons={tableIcons} options={{ headerStyle: { position: 'initial', top: 0, fontSize:'18px', fontWeight: 'bold' }, paginationType:'stepped', grouping: true}}
                                           actions={[
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={no_bttn} style={{height: "35px", width: '35px'}} /></button>,
                                                   tooltip: t('feedbacks.moderator_delete_feedback'),
                                                   onClick: (e, data) => {
                                                       console.log(data.name)
                                                       //серверные запросы на удаление


                                                       const updatedData = [...tableData]
                                                       const index = tableData.indexOf(data);
                                                       if (index > -1) {
                                                           updatedData.splice(index, 1); // 2nd parameter means remove one item only
                                                       }
                                                       setTableData(updatedData)


                                                   }

                                               },
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={documents_bttn} style={{height: "35px", width: '35px'}}/></button>,
                                                   tooltip: t('support.moderator_show'),
                                                   onClick: (e, data) => {

                                                       setReportCur(data)
                                                       setReportVisible(true)

                                                       // setModalActive(true)
                                                       // setModalText(data.desc)


                                                   }

                                               }
                                           ]}
                                           columns={columns} data={tableData} title=''/>
                        </div>



                    </div>
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
    );
});

export default ModeratorSupportService;