import Vue from 'vue'
import VueRouter from 'vue-router'
import Bill from '@/views/Bill.vue'
import Accounting from '@/views/Accounting.vue'
import Chart from '@/views/Chart.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/bill'
  },
  {
    path: '/bill',
    component: Bill
  },
  {
    path: '/accounting',
    component: Accounting
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '*',
    component: NotFound
  }
]
const router = new VueRouter({
  routes
})
export default router
