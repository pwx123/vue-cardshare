import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import VueCookie from 'vue-cookie'
import App from './App'
import router from './router'
import store from './store'
import './common/stylus/index.styl'

Vue.config.productionTip = false

var io = socketio('http://182.61.16.163:4000/', {
  autoConnect: false
})
Vue.use(VueSocketio, io)
Vue.use(VueCookie)

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
