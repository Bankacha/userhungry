import { Http } from './api';

export function getMeals (id) {
    return Http.get(`/restaurants/${id}/meals`)
}