import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddTodo from '@/components/AddTodo'
import TodoInfo from '@/components/TodoInfo'

const err = { template: '<div>Error 404</div>' }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'AddTodo',
      component: AddTodo
    },
    {
      path: '*',
      name: 'err',
      component: err
    },
    {
      path: '/info/:id/:desc/:n',
      name: 'info',
      component: TodoInfo
    }
  ]
})
