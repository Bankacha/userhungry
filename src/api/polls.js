import { Http } from './api';

export function getPolls() {
    return Http.get('/polls');
}

export function getPoll(id) {
    return Http.get(`/polls/${id}`);
}

export function createPoll(createPollData) {
    throw new Error('Method is not implemented.');
}