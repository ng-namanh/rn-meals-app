import { create } from 'zustand'

const useFavoristList = create((set) => ({
  favoriteMeals: [],
  addFavoriteMeal: (meal) => {
    set((state) => ({
      favoriteMeals: [...state.favoriteMeals, meal]
    }))
  },
  removeFavoriteMeal: (mealId) => {
    set((state) => ({
      favoriteMeals: state.favoriteMeals.filter((meal) => meal.id !== mealId)
    }))
  }
}))

export default useFavoristList
