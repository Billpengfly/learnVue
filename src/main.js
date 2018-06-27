// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Layout from './components/layout'
import indexPage from './pages/indexPage'
import detail from './pages/detail'
import count from './pages/detailPage/count'
import forecast from './pages/detailPage/forecast'
import analysis from './pages/detailPage/analysis'
import publish from './pages/detailPage/publish'
import './assets/css/animate.css'
import velocity from './assets/js/velocity.js'
Vue.prototype.$velocity = velocity;
Vue.use(vueRouter)
Vue.use(vueResource)
var router = new vueRouter({
  mode:'history',
  routes:[
    {
      path:'',
      component:indexPage,
      name:'indexPage'
    },
    {
      path:'/detail',
      component:detail,
      redirect: '/detail/analysis',
      children:[
        {
          path:'count',
          component:count
        },
        {
          path:'forecast',
          component:forecast
        },{
          path:'analysis',
          component:analysis
        },
        {
          path:'publish',
          component:publish
        }
      ]
    }
  ]
})


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
