import Vue from 'vue'
import Router from 'vue-router'
import CycEliao from '@/components/CycEliao'
import WenDael from '@/components/WenDael'
import GbzQw from '@/components/GbzQw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cyceliao',
      name: 'CycEliao',
      component: CycEliao
    },
    {
      path: '/wendael',
      name: 'WenDael',
      component: WenDael
    },
    {
      path: '/gbzqw',
      name: 'GbzQw',
      component: GbzQw
    }
  ]
})
