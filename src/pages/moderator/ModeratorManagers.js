import React, {forwardRef, useContext, useEffect, useState} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import CardsTc from "./components/cards_TC";
import CardsTcAll from "./components/cardsTCAll";
import CardManager from "./components/cardManager";
import {getComp, getCompanies, getRoutes} from "../../http/transportCompanyAPI";
import {check, getCurrentUser} from "../../http/userAPI";
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
import MaterialTable from "material-table";
import yes_bttn from "../../UI/yes_button.svg";
import no_bttn from "../../UI/no_button.svg";
import documents_bttn from "../../UI/documents.svg";
import {deleteUser, getCurrentUserProfile, getUsersList} from "../../http/moderatorAPI";
import {toJS} from "mobx";
import {useTranslation} from "react-i18next";

const ModeratorManagers = observer(() => {
    const [tableData,setTableData] = useState([])
    const {usersArr} = useContext(Context)
    const { t,i18n  } = useTranslation();

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
        {title: t('managers.moderator_first_name'), field: 'firstName' },
        {title: t('managers.moderator_middle_name'), field: 'middleName',sorting: false},
        {title: t('managers.moderator_last_name'), field: 'lastName'},
        {title: t('managers.moderator_email'), field: 'email', sorting: false},
        {title: t('managers.moderator_company'), field: 'companyName'},
        {title: t('managers.moderator_phone'), field: 'phone'}
    ]

    useEffect(() => {
        // getCurrentUser().then(data => {
        //     usersArr.setTest(data.data)
        //     console.log('USE EFFECT MANAGERS>>>')
        // }).finally()

        // setTableData([
        //     {id: 1, role: 'user', firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
        //     {id: 2, role: 'user', firstName: 'Victoria2', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
        //     {id: 3, role: 'manager', firstName: 'Victoria3', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
        //     {id: 4, role: 'user', firstName: 'Victoria4', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
        //     {id: 5, role: 'manager', firstName: 'Victoria5', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'}
        // ])

        getUsersList().then(data => {
            console.log('USERS LIST>>>')
            console.log(data.data)
            const arr = []
            data.data.forEach(function(entry) {
                if (entry.userType==='manager') {
                    arr.push(entry)
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
                                    {/*All managers:*/}
                                    {t('managers.moderator_all_managers')}
                                </div>
                            </div>
                        </div>

                        {/*{usersArr.users.map(users =>{ if(users.role==='manager'){*/}
                        {/*    return <CardManager key={users.id} usersAll= {usersArr} users={users}/>}}*/}
                        {/*)}*/}

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
                                    actions: t('tc.moderator_actions')
                                },
                                body: {
                                    emptyDataSourceMessage: t('managers.moderator_no_records'),
                                }
                            }} icons={tableIcons} options={{ headerStyle: { position: 'initial', top: 0, fontSize:'18px', fontWeight: 'bold' }, paginationType:'stepped'}}
                                           actions={[
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={no_bttn} style={{height: "35px", width: '35px'}} /></button>,
                                                   tooltip: t('feedbacks.moderator_delete_feedback'),
                                                   onClick: (e, data) => {
                                                       console.log(data.id)
                                                       //серверные запросы на удаление
                                                       const ans1 = deleteUser(data.id).then(function (response){
                                                           console.log('DELETE RES >>>')
                                                           console.log(response)
                                                       })



                                                       const updatedData = [...tableData]
                                                       const index = tableData.indexOf(data);
                                                       if (index > -1) {
                                                           updatedData.splice(index, 1); // 2nd parameter means remove one item only
                                                       }
                                                       setTableData(updatedData)

                                                       //обновить setTableDataAll

                                                   }

                                               }
                                           ]}
                                           columns={columns} data={tableData} title=''/>
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
        </div>
    );
});

export default ModeratorManagers;