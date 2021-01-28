import { Http } from './api';


export function postOrder(id, input) {
    return Http.post('/orders', {
        "restaurantId": id,
        "label": input
    })
}

export function getOrders() {
    return Http.get('/orders')
}

export function getOrder(pollId) {
    return Http.get(`/orders/${pollId}`)
}
