import Vue from 'vue';
import Router from 'vue-router';
import HpHome from './components/hp-home/hp-home.vue';

const routes = [
  { path: '/', component: HpHome },
];

Vue.use(Router);

const router = new Router({
  routes,
});

export default router;