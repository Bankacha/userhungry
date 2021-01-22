import { Http } from './api';

export function getMeals (id) {
    return Http.get(`/restaurants/${id}/meals`)
}

export function createMeal (id, meal) {
    return Http.post(`/restaurants/${id}/meals`, {...meal, price: parseInt(meal.price, 10)})
}

export function deleteMeal (restId , mealId) {
    return Http.delete(`restaurants/${restId}/meals/${mealId}`)
}