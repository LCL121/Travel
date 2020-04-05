import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

// 导出的是路由的配置项
export default new Router({
  routes: [
    {
      // 当用户访问根路径的时候，给用户展示的是HelloWorld组件
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
