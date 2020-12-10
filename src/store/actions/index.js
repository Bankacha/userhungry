const getAllPolls = (polls) => {
    return {
        type: 'GET_POLLS',
        payload: polls
    }
}