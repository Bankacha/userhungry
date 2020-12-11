const initialState = {
    polls: []
};

const pollsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POLLS':
            return {...state, polls: action.payload}
        
        default:
            return state
    }
    
}

export default pollsReducer;