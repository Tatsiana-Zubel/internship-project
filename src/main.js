import lodash from "lodash";

import 'bootstrap'
import '././styles/css/front.scss'
import Vue from 'vue'
import { loremIpsum } from "lorem-ipsum";
Vue.prototype._ = lodash;
Vue.prototype.lorem = loremIpsum;
import App from './components/Layout.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('footer-custom', require('./components/Footer.vue').default);

import Home from './components/Home.vue'
import Pricing from './components/Pricing.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Support from './components/Support.vue'

import BusinessesIndividuals from './components/components/services/BusinessesIndividuals.vue'
import Ecommerce from './components/components/services/Ecommerce.vue'
import ReferralProgram from './components/components/services/ReferralProgram.vue'
import ServiceProviders from './components/components/services/ServiceProviders.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/pricing', component: Pricing },
  { path: '/support', component: Support },
  { path: '/about', component: About },
  {
    path: '/services', component: Services,
    children: [
      { path: '', component: BusinessesIndividuals, name: 'BusinessesIndividuals' },
      { path: 'ecommerce', component: Ecommerce, name: 'Ecommerce' },
      { path: 'referral', component: ReferralProgram, name: 'ReferralProgram' },
      { path: 'providers', component: ServiceProviders, name: 'ServiceProviders' }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
