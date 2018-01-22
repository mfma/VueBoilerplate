import Vue from 'vue';
import Router from 'vue-router';
import Recommend from 'components/page/Recommend';
import Society from 'components/page/Society';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/society',
      name: 'Society',
      component: Society
    }
  ]
});
