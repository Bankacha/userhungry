import { Http } from './api';

export function getPolls() {
    return Http.get('/orders');
}

export function createPoll(createPollData) {
    throw new Error('Method is not implemented.');
}