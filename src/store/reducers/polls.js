const initialState = [];

const pollsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POLLS':
            return {state: action.payload}
    }
}