import {makeAutoObservable} from "mobx"

export default class Vehicles {
    constructor() {
        this._vehicles = [
            {id: 124789,type: "two-story bus",brand: "Mercedes-Benz",model: "eCitaro",year: "2018",number: "03OY",places: [{type: "econom",vacant: 20,cost: "20"},{type: "business",vacant: 5,cost: "50"}]},
            {id: 124409,type: "bus",brand: "Volvo",model: "7900 Electric",year: "2020",number: "41OZ",places: [{type: "econom",vacant: 10,cost: "25"},{type: "business",vacant: 2,cost: "60"}]}
        ]

        makeAutoObservable(this)
    }

    setVehicles(vehicles) {
        this._vehicles = vehicles
    }

    get vehicles() {
        return this._vehicles
    }
}