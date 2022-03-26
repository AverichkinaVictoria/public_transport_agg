import {$host} from "./index";

const COMPANY_ID = 9

export const getCompany = async () => {
    const response = await $host.get('api/v1/companies/' + COMPANY_ID)
    return response
}

export const getVehicles = async () => {
    const response = await $host.get('api/v1/vehicles/company/' + COMPANY_ID)
    return response
}

export const getSchema = async (id) => {
    const response = await $host.get('api/v1/schemas/vehicle/' + id)
    return response
}

export const getRoutes = async () => {
    const response = await $host.get('api/v1/companies/' + COMPANY_ID + '/routes')
    return response
}

export const getSchedule = async () => {
    const response = await $host.get('api/v1/companies/' + COMPANY_ID+ '/schedule')
    return response
}

export const getRoute = async (id) => {
    const response = await $host.get('api/v1/routes/'+id)
    return response
}

export const postRoute = async (depCity, arrCity, hours, minutes, depTime, vehicleId) => {
    const res1 = await $host.post('api/v1/routes', {
        company_id: COMPANY_ID,
        departure_city: depCity,
        arrival_city: arrCity,
        duration: {
            hours: hours,
            minutes: minutes
        }
    })

    const res2 = await $host.post('api/v1/routes/schedule/new', {
        routeId: res1.data.route_id,
        departureDate: depTime,
        assignedVehicleId: vehicleId
    })

    return (res1, res2)
}

export const postVehicle = async (model, year, seats) => {
    const res1 = await $host.post('api/v1/vehicles', {
        company_id: COMPANY_ID,
        model_name: model,
        production_year: year,
        seats_count: seats.length,
        is_active: true
    })

    const res2 = await $host.post('api/v1/schemas/vehicle/' +  res1.data.vehicle_id, {
        seats: seats,
        passages: [
            {
                nextSeatsRow: 0,
                details: "right"
            }
        ]
    })

    return res2
}

export const putVehicle = async (id, model, year, seats) => {
    const response = await $host.put('api/v1/vehicles/' + id, {
        company_id: COMPANY_ID,
        model_name: model,
        production_year: year,
        seats_count: seats.length,
        is_active: true
    })

    return response
}

export const putSchema = async (id, seats) => {
    const response = await $host.put('api/v1/schemas/vehicle/' +  id, {
        seats: seats,
        passages: [
            {
                nextSeatsRow: 0,
                details: "right"
            }
        ]
    })

    return response
}