import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RouterComp from './views/Router/RouterComp.vue'
import RouterCompDefault from './views/Router/RouterDefault.vue'
import RouterComp1 from './views/Router/RouterComp1.vue'
import NameView from './views/NameView/NameView.vue'
import One from './views/NameView/one.vue'
import Two from './views/NameView/two.vue'
import Three from './views/NameView/three.vue'

import NameRouter from './views/NameRouter/NameRouter.vue'
import TestName from './views/NameRouter/TestName.vue'

import NotFound from './views/common/NotFound.vue'
import Leave from './views/guard/leave.vue'
import Scroll from './views/scroll/scroll.vue'
import VuexModule from './views/vuex/vuexModule.vue'
import Count from './views/vuex/count.vue'
import LazyLoading from './views/lazyLoading/lazyLoading.vue'
const LazyModule = () => import (/* webpackChunkName: "LazyModule" */
"@/views/lazyLoading/lazyModule.vue");

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/router',
      name: 'router',
      component: RouterComp,
      children: [
        {
          path: '',
          component: RouterCompDefault
        }, {
          path: 'RouterComp1',
          component: RouterComp1
        }
      ]
    }, {
      path: '/nameView',
      component: NameView,
      children: [
        {
          path: 'normal',
          components: {
            default: One,
            two: Two,
            three: Three
          }
        }, {
          path: 'Special',
          components: {
            default: Three,
            two: Two,
            three: One
          }
        }
      ]
    }, {
      path: '/nameRouter',
      component: NameRouter
    }, {
      path: '/testName',
      name: 'testname',
      component: TestName
    }, {
      path: '/404',
      component: NotFound
    }, {
      path: '*',
      redirect: '/404'
    }, {
      path: '/guard',
      component: Leave
    }, {
      path: '/scroll',
      component: Scroll
    }, {
      path: '/lazyLoading',
      component: LazyLoading
    }, {
      path: '/lazyModule',
      component: LazyModule
    }, {
      path: '/Vuex',
      component: VuexModule,
      children: [
        {
          path: 'count',
          component: Count
        }
      ]
    }, {
      path: '/Vuex',
      component: VuexModule,
      children: [
        {
          path: 'count',
          component: Count
        }
      ]
    }
  ],
  //  滚动相关
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
})
