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

export const getPollId = (id) => {
    return {
        type: 'GET_POLL_ID',
        payload: id
    }
}