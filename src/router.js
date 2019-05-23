import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      // name: 'home',
      component: Home,
      children: [{
          path: '/laporanrekap',
          name: 'laporanrekap',
          component: () => import( /* webpackChunkName: "laporanrekap" */ './views/Laporan_Rekap.vue'),
        },
        {
          path: '/laporanredzone',
          name: 'laporanredzone',
          component: () => import( /* webpackChunkName: "laporanredzone" */ './views/Laporan_Redzone.vue')
        },
        {
          path: '/lihatbarang',
          name: 'lihatbarang',
          component: () => import( /* webpackChunkName: "lihatbarang" */ './views/Lihat_Barang.vue')
        },
        {
          path: '/barangkeluar',
          name: 'barangkeluar',
          component: () => import( /* webpackChunkName: "barangkeluar" */ './components/Detail_Laporan_Rekap/Barang_Keluar.vue')
        },
        {
          path: '/barangmasuk',
          name: 'barangmasuk',
          component: () => import( /* webpackChunkName: "barangmasuk" */ './components/Detail_Laporan_Rekap/Barang_Masuk.vue')
        },
        {
          path: '/redzone/:id',
          name: 'redzone',
          component: () => import( /* webpackChunkName: "redzone" */ './components/Detail_Laporan_Redzone/Detail_Redzone.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})