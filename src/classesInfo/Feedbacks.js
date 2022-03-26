import {makeAutoObservable} from "mobx"

export default class Feedbacks {
    constructor() {
        this._feedbacks = [
            {id: 1, firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 5, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше нЯ не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогдЯ не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогдЯ не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогдикогда не воспользуюсь данной компанией. И внукам советовать не буду!"},
            {id: 2, firstName: 'Victoria2', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 5, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогда не воспользуюсь данной компанией. И внукам советовать не буду!"},
            {id: 3, firstName: 'Victoria3', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 5, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогда не воспользуюсь данной компанией. И внукам советовать не буду!"},
            {id: 4, firstName: 'Victoria4', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", tc: 'RZD', vehicle: '№299210', departureCity: 'Moscow', arrivalCity: 'Rostov', rating: 5, desc: "Я не довольна состоянием транспортного средства. Все разваливается, еле едет. Больше никогда не воспользуюсь данной компанией. И внукам советовать не буду!"}
        ]

        makeAutoObservable(this)
    }

    setFeedbacks(feedbacks) {
        this._feedbacks = feedbacks
    }

    get feedbacks() {
        return this._feedbacks
    }
}