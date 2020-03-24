import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PopularItems from "../views/PopularItems.vue";
import ComingSoon from "../views/ComingSoon.vue";
import PickABrick from "../views/PickABrick.vue";
import PickAFig from "../views/PickAFig.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/popularitems",
    name: "PopularItems",
    component: PopularItems,
    props: true
  },
  {
    path: "/comingsoon",
    name: "ComingSoon",
    component: ComingSoon,
    props: true
  },
  {
    path: "/pickabrick",
    name: "PickABrick",
    component: PickABrick,
    props: true
  },
  {
    path: "/pickafig",
    name: "PickAFig",
    component: PickAFig,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
