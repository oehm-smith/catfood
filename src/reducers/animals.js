const animals = (state=[], action) => {
    switch (action.type) {
        case 'ADD_ANIMAL':
            return [
                ...state,
                { id: action.id,
                  name: action.name,
                  species: action.species
                }
            ]
        default:
            // console.log('return default animals reducer: ', state);
            return state
    }
}

export default animals;
