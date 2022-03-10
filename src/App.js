import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite"
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {check, getUserInfo} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        check().then(data => {
            user.setUser({id: 1, firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'})
            console.log(user.user)
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