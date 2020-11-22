import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLight from '../views/TrafficLight.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/red' },
  {
    path: '/red',
    name: 'Red',
    component: TrafficLight,
    props: {
      currentLightColor: 'red'
    }
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: TrafficLight,
    props: {
      currentLightColor: 'yellow'
    }
  },
  {
    path: '/green',
    name: 'Green',
    component: TrafficLight,
    props: {
      currentLightColor: 'green'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
