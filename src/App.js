import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite"
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {check, getUserInfo} from "./http/userAPI";
import {getCurrentUserProfile} from "./http/moderatorAPI";
import {toJS} from "mobx";

const App = observer(() => {
    const {user} = useContext(Context)

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        // user.setUser(localStorage.getItem('user'))
        const a = (localStorage.getItem('language') == null) ? localStorage.setItem('language', 'eng') : false;

        check().then(data => {
            const ans1 = getCurrentUserProfile(localStorage.getItem('email')).then(function (response){
                user.setUser(response.data)
                console.log('THIS USER from USE EFFECT>>>')
                console.log(toJS(user.user))
            }).catch(function(){console.log('ERROR ON CHECKING USER>>>')})
            // user.setUser({id: 1, firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'})
            user.setIsAuth(true)
            user.setRole(localStorage.getItem('role'))
            console.log('CHECKING>>>')
        }).catch(function() {
            console.log('Invalid token!')
            user.setUser({})
            user.setIsAuth(false)
            localStorage.clear()
            // отказ
        }).finally(() => setLoading(false))

    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        );
});

export default App;