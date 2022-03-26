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
        this._test = []
        this._img = 'none'
        this._language = []

        makeAutoObservable(this)
    }

    setUsers(users) {
        this._users = users
    }

    setTest(test) {
        this._test = test
    }

    setImg(img) {
        this._img = img
    }

    setLanguage(lan) {
        this._language = lan
    }

    get language() {
        return this._language
    }


    get img() {
        return this._img
    }

    get test() {
        return this._test
    }

    get users() {
        return this._users
    }
}