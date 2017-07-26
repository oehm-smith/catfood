import { combineReducers } from 'redux';
import animals from "./animals";
import foods from "./foods";

const catFoodApp = combineReducers({
    animals,
    foods
})

export default catFoodApp
