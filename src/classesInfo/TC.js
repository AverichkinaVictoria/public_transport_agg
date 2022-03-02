import {makeAutoObservable} from "mobx"

export default class TC {
    constructor() {
        this._companies = [
            {id: 1, isActive: true, name: 'RZD1', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
            {id: 2, isActive: false, name: 'RZD2', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
            {id: 3, isActive: true, name: 'RZD3', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
            {id: 4, isActive: true, name: 'RZD4', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
            {id: 5, isActive: false, name: 'RZD5', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
            {id: 6, isActive: false, name: 'RZD6', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
            {id: 7, isActive: false, name: 'RZD7', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'},
            {id: 8, isActive: false, name: 'RZD8', address: 'moscow moscow moscow moscow', phone: '+798217377288', website: "www", documents: 'dskjfksj'}
        ]

        makeAutoObservable(this)
    }

    setCompanies(companies) {
        this._companies = companies
    }


    get companies() {
        return this._companies
    }

    deleteItem(company) {
        const index = this._companies.indexOf(company);
        if (index > -1) {
            this._companies.splice(index, 1); // 2nd parameter means remove one item only
        }
    }

}