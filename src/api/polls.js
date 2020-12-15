import { Http } from './api';

export function getPolls() {
    return Http.get('/polls');
}

export function getPoll(id) {
    return Http.get(`/polls/${id}`);
}

export function pollDelete(id) {
    return Http.delete(`/polls/${id}`);
}

export function createPoll(label, restList) {
    return Http.post('/polls', {
        "label": label,
        "restaurants": restList})
    .then(r => console.log(r.data))
        .catch(function (error) {
            console.log(error);
        });
}