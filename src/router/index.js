import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

function route(path, component){
  return{
    path: path,
    component: ()=> import(`../pages/${component}.vue`)
  }
}

export default new Router({
  routes: [
    route('/','Dashboard'),
    route('/company','Company'),
    route('/floors','Floor'),
    route('/merchandise','Merchandise'),
    route('/thanks','Thanks')
  ]
})
