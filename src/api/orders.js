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

export function getOrder(orderId) {
    return Http.get(`/orders/${orderId}`)
}

export function sendOrderItems(orderId, payloads) {
    return Http.post(`/orders/${orderId}/items`, {
        ...payloads
    })
}

export function getOrderItems(orderId){
    return Http.get(`/orders/${orderId}/items`)
}
