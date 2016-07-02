import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: function (resolve) {
      resolve(TimeEntries)
    },
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
