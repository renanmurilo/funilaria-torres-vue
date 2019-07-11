import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Servicos from "./views/Servicos.vue";
import Seguradoras from "./views/Seguradoras.vue";
import Contato from "./views/Contato.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/servicos",
      name: "servicos",
      component: Servicos
    },
    {
      path: "/seguradoras",
      name: "seguradoras",
      component: Seguradoras
    },
    {
      path: "/contato",
      name: "contato",
      component: Contato
    }
  ]
});
