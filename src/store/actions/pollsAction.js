export const setPolls = (polls) => {
    return {
        type: 'GET_POLLS',
        payload: polls
    }
}

export const deletePoll = (id) => {
    return {
        type: 'DELETE_POLL',
        payload: id
    }
}