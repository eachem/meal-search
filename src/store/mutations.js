export function setSearchedMeals(state, meals) {
    state.setSearchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
    state.mealsByIngredient = meals || []
}