import Vue from 'vue';
import Router from 'vue-router';
import Notetaking from '@/components/Notetaking';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notetaking',
      component: Notetaking,
    },
  ],
});
