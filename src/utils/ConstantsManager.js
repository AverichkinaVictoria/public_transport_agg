export const TRANSPORT_COMPANY = {
    icon: "https://www.tadviser.ru/images/b/bb/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5_%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5_%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B8.png",
    name: "ОАО \"РЖД\"",
    description: "ОАО «РЖД» оказывает полный спектр услуг в таких сферах как грузовые перевозки, предоставление услуг локомотивной тяги и инфраструктуры; ремонт подвижного состава; пассажирские перевозки в дальнем и пригородном сообщении; а также прочие виды деятельности.",
    website: "https://www.rzd.ru/",
    phone: "88007750000",
    payment_details: "document",
    tax_number: "document",
    managers: [
        {
            first_name: "Aleksandr",
            middle_name: "Dmitrievich",
            last_name: "Kurylev",
            email: "adkurylev@edu.hse.ru"
        }
    ]
}

export const MANAGER_PROFILE = {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png",
    first_name: "Aleksandr",
    middle_name: "Dmitrievich",
    last_name: "Kurylev",
    email: "adkurylev@edu.hse.ru",
    phone: "88005553535",
    company: "ОАО \"РЖД\""
}

export const EMPTY_VEHICLE = {
    id: 124791,
    type: "",
    brand: "",
    model: "",
    year: "",
    number: "",
    places: [
        {
            type: "econom",
            vacant: 20,
            cost: "20$"
        },
        {
            type: "business",
            vacant: 5,
            cost: "50$"
        }
    ]
}

export const VEHICLES = [
    {
        id: 124789,
        type: "two-story bus",
        brand: "Mercedes-Benz",
        model: "eCitaro",
        year: "2018",
        number: "03OY",
        places: [
            {
                type: "econom",
                vacant: 20,
                cost: "20$"
            },
            {
                type: "business",
                vacant: 5,
                cost: "50$"
            }
        ]
    },
    {
        id: 124409,
        type: "bus",
        brand: "Volvo",
        model: "7900 Electric",
        year: "2020",
        number: "41OZ",
        places: [
            {
                type: "econom",
                vacant: 10,
                cost: "25$"
            },
            {
                type: "business",
                vacant: 2,
                cost: "60$"
            }
        ]
    }
]

export const SEATS = [
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 25,
        seatClass: "Econom",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 50,
        seatClass: "Business",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 50,
        seatClass: "Business",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 50,
        seatClass: "Business",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    },
    {
        cost: 50,
        seatClass: "Business",
        details: "vacant",
        rowLocation: 0,
        columnLocation: 0
    }
]

export const EMPTY_ROUTE = {
    id: 123810,
        departure_city: "",
        departure_time: "",
        arrival_city: "",
        arrival_time: "",
        vehicle: "",
        days: [],
        costs: [
            {
                type: "econom",
                vacant: "",
                cost: ""
            },
            {
                type: "business",
                vacant: "",
                cost: ""
            }
        ],
        feedback: []
}

export const ROUTES = [
    {
        id: 123804,
        departure_city: "Moscow",
        departure_time: "17:00",
        arrival_city: "Voronezh",
        arrival_time: "23:35",
        vehicle: 124789,
        days: ["mon", "tue", "thu"],
        costs: [
            {
                type: "econom",
                vacant: "20",
                cost: "20"
            },
            {
                type: "business",
                vacant: "5",
                cost: "50"
            }
        ],
        feedback: [
            {
                user: "Анастасия",
                rate: 4.5,
                subject: "Громкий звук",
                message: "Поездка прошла отлично, но в салоне что-то стучит, становится страшно за жизнь."
            },
            {
                user: "Сергей",
                rate: 2,
                subject: "Водитель хам",
                message: "При входе в автобус на станции 'Бебрино' водитель сказал, что проезд стоит 300 bucks, хотя я уже заплатил за билет. Разберитесь с этим!"
            }
        ]
    }
]