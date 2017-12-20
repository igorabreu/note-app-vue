import Vue from 'vue';
import Router from 'vue-router';
import Todolist from '@/components/Todolist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todolist',
      component: Todolist,
    },
  ],
});
