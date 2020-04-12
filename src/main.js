import Vue from 'vue'
import routers from '@components/common/router'
import VueRouter  from  'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import "@components/common/reset.css"
import "@components/common/global.css"
import  autoLoad from "@components/common/autoLoad"
import ElementUI, { Button } from 'element-ui'
Vue.use(ElementUI);
Vue.use(VueRouter);
autoLoad.startLoad();
let router = new VueRouter({
    routes: routers
});
new Vue({
  el: '#app',
  router
})