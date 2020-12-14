const Vue = require("vue");
import App from './App.vue'
let app = Vue.createApp(App);
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub);
library.add(faHome);
library.add(faBook);
app.component('font-awesome-icon', FontAwesomeIcon);
import './styles/index.css'
app.mount('#app')