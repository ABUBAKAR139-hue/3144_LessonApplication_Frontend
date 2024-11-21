import { createRouter, createWebHistory } from "vue-router";
import LessonsPage from "../views/LessonsPage.vue/"; // Lessons Page
import ShoppingCartPage from "../views/ShoppingCartPage.vue"; // Shopping Cart Page
import ConfirmationPage from "../views/ConfirmationPage.vue"; // Confirmation Page

const routes = [
  {
    path: "/",
    name: "home",
    component: LessonsPage, // Route to Lessons Page
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCartPage, // Route to Shopping Cart Page
  },
  {
    path: "/confirmation",
    name: "confirmation",
    component: ConfirmationPage, // Route to Confirmation Page
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
