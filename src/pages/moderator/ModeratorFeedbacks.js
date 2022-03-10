import React, {forwardRef, useContext, useEffect, useState} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import CardManager from "./components/cardManager";
import {Context} from "../../index";
import CardFeedbacks from "./components/cardFeedbacks";
import Modal from "./components/modal.js";
import {observer} from "mobx-react-lite";
import {getCurrentUser} from "../../http/userAPI";
import MaterialTable from "material-table";
import no_bttn from "../../UI/no_button.svg";
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
import {MODERATOR_MAIN_SHOW_FEEDBACK, MODERATOR_MAIN_TC_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router";
import star from "../../UI/Star.svg";

const ModeratorFeedbacks = observer(() => {
    const {feedbacksArr} = useContext(Context)

    const {usersArr} = useContext(Context)

    const [tableData,setTableData] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const [modalText,setModalText] = useState('')

    const [feedbackCur,setFeedbackCur] = useState({})
    const [feedbackVisible,setFeedbackVisible] = useState(false)

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
        {title: 'First name', field: 'firstName' },
        {title: 'Middle name', field: 'middleName',sorting: false},
        {title: 'Last name', field: 'lastName'},
        {title: 'Email', field: 'email'},
        {title: 'Company', field: 'tc'},
        {title: 'Vehicle', field: 'vehicle'},
        {title: 'Departure', field: 'departureCity'},
        {title: 'Arrival', field: 'arrivalCity'},
        {title: 'Rating', field: 'rating'},
        {title: 'Feedback', field: 'desc', hidden: true}
    ]

    useEffect(() => {
        // getCurrentUser().then(data => {
        //     usersArr.setTest(data.data)
        //     console.log('USE EFFECT FEEDBACKS>>>')
        // }).finally()

        setTableData([
            {id: 1, firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 5, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше нЯ не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогдЯ не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогдЯ не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогдикогда не воспользуюсь данной компанией. И внукам советовать не буду!"},
            {id: 2, firstName: 'Victoria2', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 3, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогда не воспользуюсь данной компанией. И внукам советовать не буду!"},
            {id: 3, firstName: 'Victoria3', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 4, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогда не воспользуюсь данной компанией. И внукам советовать не буду!"},
            {id: 4, firstName: 'Victoria4', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 2, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогда не воспользуюсь данной компанией. И внукам советовать не буду!"}
        ])
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
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        <div className="card-header">
                            <div className="card__title-header"></div>
                            <div className="card__body-header">
                                <div className="inside-title-header">
                                    All feedbacks:
                                </div>
                            </div>
                        </div>

                        <div className={feedbackVisible ? "moderator-TC-card active" : "moderator-TC-card"}>

                            <div className="card__body" style={{background: "rgba(63, 165, 239, 0.26)", margin: "0rem 0rem 0rem 0",
                                padding: "0.8rem"}}>
                                <div className="card-moderator-1-f">
                                    <div className="card-moderator-2">
                                        <div className="card-moderator-3" >
                                            <p>First name:</p>
                                            <p>Middle name:</p>
                                            <p>Last name:</p>
                                            <p>Email:</p>
                                            <p>Company:</p>
                                            <p>Vehicle:</p>
                                            <p>Departure:</p>
                                            <p>Arrival:</p>
                                            <p>Rating:</p>
                                        </div>
                                        <div className="card-moderator-4">
                                            <p>{feedbackCur.firstName}</p>
                                            <p>{feedbackCur.middleName}</p>
                                            <p>{feedbackCur.lastName}</p>
                                            <p>{feedbackCur.email}</p>
                                            <p>{feedbackCur.tc}</p>
                                            <p>{feedbackCur.vehicle}</p>
                                            <p>{feedbackCur.departureCity}</p>
                                            <p>{feedbackCur.arrivalCity}</p>
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
                                    <p>{feedbackCur.desc}</p>
                                </div>
                                <div className="bttns-moderator">
                                    <button className="yes-no-bttn" onClick={closeFeedback} style={{background:"rgba(63, 165, 239, 0.26)"}} ><img src={no_bttn} /></button>
                                </div>
                            </div>
                        </div>


                        {/*{feedbacksArr.feedbacks.map(feedbacks =>{*/}
                        {/*    return <CardFeedbacks key={feedbacks.id} feedbacksAll= {feedbacksArr} feedbacks={feedbacks}/>}*/}
                        {/*)}*/}


                        <div className='moderator-table'>
                            <MaterialTable icons={tableIcons} options={{ headerStyle: { position: 'initial', top: 0, fontSize:'18px', fontWeight: 'bold' }, paginationType:'stepped'}}
                                           actions={[
                                               {
                                                   icon: () =>  <button className="yes-no-bttn" style={{height: "35px", width: '35px'}}><img src={no_bttn} style={{height: "35px", width: '35px'}} /></button>,
                                                   tooltip: "Delete",
                                                   onClick: (e, data) => {
                                                       console.log(data.name)
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
                                                   tooltip: "Show feedback",
                                                   onClick: (e, data) => {
                                                       console.log(data.desc)
                                                       setFeedbackCur(data)
                                                       setFeedbackVisible(true)

                                                       // setModalActive(true)
                                                       // setModalText(data.desc)


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

export default ModeratorFeedbacks;