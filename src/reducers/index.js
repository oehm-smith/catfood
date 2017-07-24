import { combineReducers } from 'redux';
import catfood from './catfood';
import animals from "./animals";

const catFoodApp = combineReducers({
    animals,
    catfood
})

export default catFoodApp
