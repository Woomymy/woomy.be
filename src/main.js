const Vue = require("vue");
import App from './App.vue'
let app = Vue.createApp(App);
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon)
import './styles/index.css'
app.mount('#app')