import {makeAutoObservable} from "mobx"

export default class UserInfo {
    constructor() {
        this._isAuth = false
        this._user = {id: 1, firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}