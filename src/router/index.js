import Vue from 'vue'
import Router from 'vue-router'

import home from  '@/page/home'
import duty from  '@/page/duty'
import dutyDetail from  '@/page/dutyDetail'
import dutyList from  '@/page/dutyList'
import pdf from  '@/page/pdf'
import dutytable from  '@/page/dutytable'
Vue.use(Router);
export default new Router({
  // mode: "history",
  routes: [
    
    {
      path: '/',
      component: duty
    },
    {
      path: '/detail',
      component: dutyDetail
    },
      {
          path: '/dutytable',
          component: dutytable
      },
        {
          path: '/list',
          component: dutyList
        },
    {
      path: '/pdf',
      component: pdf
    },
    {
      path: '/duty',
      component: duty
    }
  ]
});

