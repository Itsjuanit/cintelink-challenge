import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faExclamationCircle, faUnlockAlt)


Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
