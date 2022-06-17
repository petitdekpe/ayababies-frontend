import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/about",
  //   name: "about",

  //   component: () => import("../views/AboutView.vue"),
  // },
  {
    path: "/",
    name: "accueil",

    component: () => import("../views/Accueil.vue"),
  },
  {
    path: "/concours",
    name: "concous",

    component: () => import("../views/Concours.vue"),
  },

  {
    path: "/partenaires",
    name: "partenaires",

    component: () => import("../views/Partenaires.vue"),
  },
  {
    path: "/participer",
    name: "participer",

    component: () => import("../views/Participer.vue"),
  },
  {
    path: "/inscription",
    name: "inscription",

    component: () => import("../views/Inscription.vue"),
  },
  {
    path: "/connexion",
    name: "connexion",

    component: () => import("../views/Connexion.vue"),
  },
  {
    path: "/info",
    name: "info",

    component: () => import("../views/InfoConcours.vue"),
  },
  {
    path: "/galeries",
    name: "galeries",

    component: () => import("../views/Galeries.vue"),
  },
  {
    path: "/add",
    name: "add",

    component: () => import("../views/Add.vue"),
  },
  {
    path: "/edit",
    name: "edit",

    component: () => import("../views/Edit.vue"),
  },
  {
    path: "/profil",
    name: "profil",

    component: () => import("../views/Profil.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
