import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealDetails from './views/MealDetails.vue'
import Ingredients from './views/Ingredients.vue'
import MealByIngredients from './views/MealByIngredients.vue'


const routes = [
  { path: '/meal-search/', name: 'Home', component: HomePage },
  { path: '/meal-search/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/meal-search/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/meal-search/by-ingredients/:ingredients?', name: 'MealByIngredients', component: MealByIngredients },
  { path: '/meal-search/:id', name: 'MealDetails', component: MealDetails },
  { path: '/meal-search/ingredients', name: 'Ingredients', component: Ingredients },
  { path: '/meal-search/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
