import {MEALS} from '../../data/meals_data'

const initialState = {
    meals: MEALS,
    favouriteMeals: [],
    filteredMeals: MEALS, 
}

const mealsReducer = (state=initialState, action) => {
    return state;
}

export default mealsReducer;