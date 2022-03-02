import {makeAutoObservable} from "mobx"

export default class User {
    constructor() {
        this._users = [
            {id: 1, role: 'user', firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
            {id: 2, role: 'user', firstName: 'Victoria2', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
            {id: 3, role: 'manager', firstName: 'Victoria3', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
            {id: 4, role: 'user', firstName: 'Victoria4', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'},
            {id: 5, role: 'manager', firstName: 'Victoria5', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'}
        ]

        makeAutoObservable(this)
    }

    setUsers(users) {
        this._users = users
    }


    get users() {
        return this._users
    }


}