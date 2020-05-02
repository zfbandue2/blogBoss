import Vue from 'vue'
import Vuex from 'vuex';
import routers from '@components/common/router'
import VueRouter  from  'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import "@components/common/reset.css"
import "@components/common/global.css"
import  autoLoad from "@components/common/autoLoad"
import ElementUI, { Button } from 'element-ui'
Vue.use(require('vue-cookies'));
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store({
   state: {
     username: ""
   }
});
autoLoad.startLoad();
let router = new VueRouter({
    routes: routers
});
new Vue({
  el: '#app',
  store,
  router
})