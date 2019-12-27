import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home-module" */ '../views/Home.vue')
const Price = () => import(/* webpackChunkName: "price-module" */ '../views/Price.vue')
const PriceClothes = () => import(/* webpackChunkName: "price-module" */ '../views/PriceClothes.vue')
const PriceClothesDetail = () => import(/* webpackChunkName: "price-module" */ '../views/PriceClothesDetail.vue')
const PriceBeauty = () => import(/* webpackChunkName: "price-module" */ '../views/PriceMakeUp.vue')

const Articles = () => import(/* webpackChunkName: "article-module" */ '../views/Articles.vue')
const ArticlesDetail = () => import(/* webpackChunkName: "article-module" */ '../views/ArticlesDetail.vue')

const Search = () => import(/* webpackChunkName: "view-module" */ '../views/Search.vue')
const Viewer = () => import(/* webpackChunkName: "view-module" */ '../views/Viewer.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/price',
    name: 'price',
    component: Price
  },
  {
    path: '/price/clothes',
    name: 'priceClothes',
    component: PriceClothes
  },
  {
    path: '/price/beauty',
    name: 'priceBeauty',
    component: PriceBeauty
  },
  {
    path: '/price/clothes/:id',
    name: 'priceClothesDetail',
    component: PriceClothesDetail
  },
  {
    path: '/costumes',
    meta: {
      kind: 0,
      childName: 'articlesDetailCostume'
    },
    name: 'articlesCostume',
    component: Articles
  },
  {
    path: '/idea',
    meta: {
      kind: 2,
      childName: 'articlesDetailIdea'
    },
    name: 'articlesIdea',
    component: Articles
  },
  {
    path: '/posing',
    meta: {
      kind: 1,
      childName: 'articlesDetailPosing'
    },
    name: 'articlesPosing',
    component: Articles
  },
  {
    path: '/articles/:id',
    name: 'articlesDetail',
    component: ArticlesDetail
  },
  {
    path: '/costumes/:id',
    name: 'articlesDetailCostume',
    meta: {
      kind: 0
    },
    component: ArticlesDetail
  },
  {
    path: '/idea/:id',
    meta: {
      kind: 1
    },
    name: 'articlesDetailIdea',
    component: ArticlesDetail
  },
  {
    path: '/posing/:id',
    meta: {
      kind: 2
    },
    name: 'articlesDetailPosing',
    component: ArticlesDetail
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/viewers/:id',
    name: 'viewer',
    component: Viewer
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
