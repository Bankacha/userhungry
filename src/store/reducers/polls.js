const initialState = {
    polls: []
};

const pollsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POLLS':
            return {...state, polls: action.payload}
        
        default:
            return state

        case 'DELETE_POLL':
            return {...state, polls: state.polls.filter( p => p.id !== action.payload)}
    }
    
}

export default pollsReducer;