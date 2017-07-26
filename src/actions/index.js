let nextAnimalId = 0;
let nextFoodId = 0;
export const addAnimal = (name, species) => ({
    type: 'ADD_ANIMAL',
    id: nextAnimalId++,
    name, species
})

export const addFood = (name, container) => ({
    type: 'ADD_FOOD',
    id: nextFoodId++,
    name, container
})

export const showAnimals = (animal) => ({
    type: 'SHOW_ANIMALS_FOODS',
    animal
})

export const showFoods = (food) => ({
    type: 'SHOW_FOODS_ANIMALS',
    food
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})
