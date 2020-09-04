import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      props: true
    },
    {
      path: '/detalles',
      name: 'detalles',
      component: () => import('./views/Detalles.vue'),
      props: true
    },
    {
      path: '/Envios',
      name: 'Envios',
      component: () => import('./components/Envios.vue'),
      props: true
    },
    {
      path: '/GestionStock',
      name: 'GestionStock',
      component: () => import('./components/GestionStock.vue'),
      props: true
    },
    {
      path: '/Cajero',
      name: 'Cajero',
      component: () => import('./components/Cajero.vue'),
      props: true
    },
    {
      path: '/Venta',
      name: 'Venta',
      component: () => import('./components/Venta.vue'),
      props: true
    },
    {
      path: '/Venta/Productos',
      name: 'Venta',
      component: () => import('./components/DetaProductos.vue'),
      props: true
    },
    {
      path: '/Banca',
      name: 'Banca',
      component: () => import('./components/Banca.vue'),
      props: true
    },
    {
      path: '/Banca/Operaciones',
      name: 'Banca',
      component: () => import('./components/Operaciones.vue'),
      props: true
    },
    /*{
      path: '/porenviar',
      name: 'porenviar',
      component: () => import('./views/PorEnviarV.vue'),
      props: true
    },
    {
      path: '/encamino',
      name: 'encamino',
      component: () => import('./views/EnCaminoV.vue'),
      props: true
    },
    {
      path: '/enviados',
      name: 'enviados',
      component: () => import('./views/EnviadosV.vue'),
      props: true
    },*/
  ]
})
