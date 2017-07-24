let nextAnimalId = 0
export const addAnimal = (name, species) => ({
    type: 'ADD_ANIMAL',
    id: nextAnimalId++,
    name, species
})

export const showFoods = (animal) => ({
    type: 'SHOW_ANIMALS_FOODS',
    animal
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})
