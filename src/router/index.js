import Vue from 'vue'
import Router from 'vue-router'
import NotesApp from '@/components/NotesApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NotesApp',
      component: NotesApp
    }
  ]
})
