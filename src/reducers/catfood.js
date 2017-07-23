const catfood = (state=[], action) => {
    switch (action.type) {
        case 'SOMETHING':
            return [
                ...state
                // something
            ]
        default:
            return state
    }
}

export default catfood;
