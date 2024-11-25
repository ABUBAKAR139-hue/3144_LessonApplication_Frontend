import { createRouter, createWebHistory } from "vue-router";
import LessonsPage from "../views/LessonsPage.vue";
import ShoppingCartPage from "../views/ShoppingCartPage.vue";
import ConfirmationPage from "../views/ConfirmationPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LessonsPage,
  },
  {
    path: "/cart",
    name: "ShoppingCartPage",
    component: ShoppingCartPage,
    props: (route) => ({ cart: route.params.cart || [] }),
  },
  {
    path: "/confirmation",
    name: "confirmation",
    component: ConfirmationPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
