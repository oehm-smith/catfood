const foods = (state=[], action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return [
                ...state,
                {
                   id: action.id,
                   name: action.name,
                   container: action.container
                }
            ]

        default:
            return state
    }
}

export default foods;
