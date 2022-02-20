import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserInfo from "./classesInfo/UserInfo";

export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)
ReactDOM.render(
    <Context.Provider value={{
        user: new UserInfo()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);


