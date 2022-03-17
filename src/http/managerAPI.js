import {$host} from "./index";
import axios from "axios";

export const getCompany = async () => {
    const response = await $host.get('api/v1/companies/9')
    return response
}

export const getVehicles = async () => {
    const response = await $host.get('api/v1/vehicles/company/9')
    return response
}

export const getRoutes = async () => {
    const response = await $host.get('api/v1/companies/9/routes')
    return response
}

export const getRoute = async (id) => {
    const response = await $host.get('api/v1/routes/'+id)
    return response
}

export const postRoute = async (depCity, arrCity, hours, minutes, depTime, vehicleId) => {
    const res1 = await $host.post('api/v1/routes', {
        company_id: 4, // TODO: ЗАМЕНИТЬ НА 9
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
        company_id: 4, // TODO: ЗАМЕНИТЬ НА 9
        model_name: model,
        production_year: year,
        seats_count: seats.length,
        is_active: true
    })

    const res2 = await $host.post('api/v1/vehicles/' + res1.data.vehicle_id + '/schema', {
        
    })
}