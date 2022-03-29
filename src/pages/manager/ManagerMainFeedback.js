import React, {forwardRef, useContext, useEffect, useState} from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import {Context} from "../../index";
import {useTranslation} from "react-i18next";
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
import {deleteFeedback, getAllFeedbacks} from "../../http/moderatorAPI";
import MenuBarMain from "../moderator/components/MenuBarMain";
import star from "../../UI/Star.svg";
import no_bttn from "../../UI/no_button.svg";
import MaterialTable from "material-table";
import documents_bttn from "../../UI/documents.svg";
import Modal from "../moderator/components/modal";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const ManagerMainFeedback = observer(() => {
    const {feedbacksArr} = useContext(Context)
    const {user} = useContext(Context)

    const {usersArr} = useContext(Context)

    const [tableData,setTableData] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const [modalText,setModalText] = useState('')

    const [feedbackCur,setFeedbackCur] = useState({})
    const [feedbackVisible,setFeedbackVisible] = useState(false)
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
        {title: t('feedbacks.moderator_first_name'), field: 'firstName' },
        {title: t('feedbacks.moderator_middle_name'), field: 'middleName',sorting: false},
        {title: t('feedbacks.moderator_last_name'), field: 'lastName'},
        {title: t('feedbacks.moderator_email'), field: 'email'},
        {title: t('feedbacks.moderator_company'), field: 'companyName'},
        {title: t('feedbacks.moderator_vehicle'), field: 'vehicle'},
        {title: t('feedbacks.moderator_departure'), field: 'departure'},
        {title: t('feedbacks.moderator_arrival'), field: 'arrival'},
        {title: t('feedbacks.moderator_rating'), field: 'rating'},
        {title: 'Feedback', field: 'feedback', hidden: true}
    ]

    useEffect(() => {
        getAllFeedbacks().then(data => {
            console.log("All feedbacks")
            console.log(data.data)
            var arr = []
            data.data.forEach(function(entry) {

                console.log(entry.companyName)
                console.log(toJS(user.user).companyName)
                if (entry.companyName===toJS(user.user).companyName) {
                    arr.push(entry)
                }
            });
            setTableData(arr)
        }).finally()
    }, [])

    const closeFeedback = () => {
        //запрос на удаление по id
        setFeedbackCur({})
        setFeedbackVisible(false)

    }

    return (
        <div>
            <div className='moderator-menu-bar'>
                <div className="container">
                    <MenuBarManager></MenuBarManager>
                    <div className="content">
                        <Extra></Extra>
                        <div className="content-page">
                            <div className="card-header">
                                <div className="card__title-header"></div>
                                <div className="card__body-header">
                                    <div className="inside-title-header">
                                        {/*All feedbacks:*/}
                                        {t('feedbacks.moderator_all_feedbacks')}
                                    </div>
                                </div>
                            </div>

                            <div className={feedbackVisible ? "moderator-TC-card active" : "moderator-TC-card"}>

                                <div className="card__body" style={{background: "rgba(63, 165, 239, 0.26)", margin: "0rem 0rem 0rem 0",
                                    padding: "0.8rem"}}>
                                    <div className="card-moderator-1-f">
                                        <div className="card-moderator-2">
                                            <div className="card-moderator-3" >
                                                <p>{t('feedbacks.moderator_first_name')}</p>
                                                <p>{t('feedbacks.moderator_middle_name')}</p>
                                                <p>{t('feedbacks.moderator_last_name')}</p>
                                                <p>{t('feedbacks.moderator_email')}</p>
                                                <p>{t('feedbacks.moderator_company')}</p>
                                                <p>{t('feedbacks.moderator_vehicle')}</p>
                                                <p>{t('feedbacks.moderator_departure')}</p>
                                                <p>{t('feedbacks.moderator_arrival')}</p>
                                                <p>{t('feedbacks.moderator_rating')}</p>
                                            </div>
                                            <div className="card-moderator-4">
                                                <p>{feedbackCur.firstName}</p>
                                                <p>{feedbackCur.middleName}</p>
                                                <p>{feedbackCur.lastName}</p>
                                                <p>{feedbackCur.email}</p>
                                                <p>{feedbackCur.companyName}</p>
                                                <p>{feedbackCur.vehicle}</p>
                                                <p>{feedbackCur.departure}</p>
                                                <p>{feedbackCur.arrival}</p>
                                                {[...Array(feedbackCur.rating)].map((st) => {
                                                    return (
                                                        <img src={star} className="feedback-ic-star"/>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-main">

                                    <div className="description-moderator">
                                        <p>{feedbackCur.feedback}</p>
                                    </div>
                                    <div className="bttns-moderator">
                                        <button className="yes-no-bttn" onClick={closeFeedback} style={{background:"rgba(63, 165, 239, 0.26)"}} ><img src={no_bttn} /></button>
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
                                        emptyDataSourceMessage: t('feedbacks.moderator_no_records'),
                                    }
                                }} icons={tableIcons} options={{ headerStyle: { position: 'initial', top: 0, fontSize:'18px', fontWeight: 'bold' }, paginationType:'stepped'}}
                                               actions={[

                                                   {
                                                       icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={documents_bttn} style={{height: "35px", width: '35px'}}/></button>,
                                                       tooltip: t('feedbacks.moderator_show_feedback'),
                                                       onClick: (e, data) => {

                                                           setFeedbackCur(data)
                                                           setFeedbackVisible(true)



                                                       }

                                                   }
                                               ]}
                                               columns={columns} data={tableData} title=''/>
                            </div>



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
                <Modal active={modalActive} setActive={setModalActive}>
                    <h1 style={{textAlign: 'center', padding: '10px'}}>Feedback</h1>
                    <p style={{padding: '10px'}}>{modalText}</p>
                </Modal>

            </div>
        </div>
    );
});

export default ManagerMainFeedback;