import Vue from 'vue'
import App from './App'
import store from './Store/index'

import fullCalendar from 'vue-fullcalendar'

Vue.component('full-calendar', fullCalendar)

// Vue2
new Vue({
  el : '#app',
  store,
  render: h => h(App),
  template : '<App/>',
  components : {
    App
  }
})