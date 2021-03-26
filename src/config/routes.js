// vue 路由配置
import MenusRouteConfig from './menu';
import {Error404, HelloWorld, BasicLayout, Login} from './allComponent'
const staticRouter = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/404',
    component: Error404
  },
  {
    path: '/test',
    menuName: 'ts-test',
    component: HelloWorld
  },
  {
    path: '/login',
    component: Login
  },
  // router@4.0 没有通配符了(加上会报错)
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const asyncRouter = [
  {
    path: '/admin',
    name: 'admin',
    component: BasicLayout,
    redirect: '/admin/a',
    children: MenusRouteConfig
  }
]

export {
  staticRouter,
  asyncRouter
};