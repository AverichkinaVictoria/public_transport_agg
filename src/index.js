import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserInfo from "./classesInfo/UserInfo";
import TC from "./classesInfo/TC";
import User from "./classesInfo/User";
import Feedbacks from "./classesInfo/Feedbacks";

export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)
ReactDOM.render(
    <Context.Provider value={{
        user: new UserInfo(),
        companies: new TC(),
        usersArr: new User(),
        feedbacksArr: new Feedbacks(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);


