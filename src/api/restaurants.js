import { Http } from './api';

export function getRestaurants() {
    return Http.get('/restaurants')
}