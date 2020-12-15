import { Http } from './api';


export function postOrder(id, input) {
    return Http.post('/orders', {
        "restaurantId": id,
        "label": input
    }).then(r => console.log(r.data))
}

export function getOrders() {
    return Http.get('/orders').then(r=>console.log(r.data))
}