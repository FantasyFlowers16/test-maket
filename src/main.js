import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.styl'
var VueScrollTo = require('vue-scrollto')

createApp(App).use(store).use(router).use(VueScrollTo, {
  el: '#about',
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}).mount('#app')
