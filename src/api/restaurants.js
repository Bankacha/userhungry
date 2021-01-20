import { Http } from './api';

export function getRestaurant(id) {
    return Http.get(`/restaurants/${id}`)
}

export function getRestaurants() {
    return Http.get('/restaurants')
}

export function updateRestaurant (id, restaurant) {
    return Http.patch(`/restaurants/${id}`, restaurant)
}