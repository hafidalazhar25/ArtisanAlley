import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import ProductSingle from '../views/ProductSingle.vue';
import CheckoutPage from '../views/CheckoutPage.vue'
import CartPage from '../views/CartPage.vue'
import ContactPage from '../views/ContactPage.vue'
import BrandPage from '../views/BrandPage.vue'
import CategoriesPage from '../views/CategoriesPage.vue'


const merk = 'ArtisanAlley';

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HomePage,
    meta: { title: merk + ' | ' + 'Beranda' },
  },
  {
    path: '/product',
    name: 'Produk',
    component: ProductPage,
    meta: { title: merk + ' | ' + 'Produk' },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { title: merk + ' | ' + 'Login' },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
    meta: { title: merk + ' | ' + 'Checkout' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
    meta: { title: merk + ' | ' + 'Cart' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { title: merk + ' | ' + 'Contact' },
  },
  {
    path: '/brands',
    name: 'Brands',
    component: BrandPage,
    meta: { title: merk + ' | ' + 'Brands' },
  },
  {
    path: '/detail/:slug',
    name: 'Detail',
    component: ProductSingle,
    props: true,
    meta: { title: merk + ' | ' + 'Detail' },
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesPage,
    meta: { title: merk + ' | ' + 'Categories' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
