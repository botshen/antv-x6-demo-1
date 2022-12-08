import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloVue from "@/pages/Hello-vue.vue";
import TreeMapPages from "@/pages/TreeMapPages.vue";


Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
    {path: '/foo', component: HelloVue},
    {path: '/', component: TreeMapPages}
]
const router = new VueRouter({
    routes
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
