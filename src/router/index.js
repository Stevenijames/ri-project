import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Donate from "../views/Donate.vue";
import Contact from "../views/Contact.vue";
import Vote from "../views/Vote.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
  },
  {
    path: "/vote",
    name: "Vote",
    component: Vote,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
