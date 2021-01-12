const Vue = require("vue");
import App from "./App.vue";
let app = Vue.createApp(App);
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHtml5,
  faGithub,
  faTwitter,
  faDev,
  faReddit,
  faTelegram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faGithub);
library.add(faHome);
library.add(faBook);
library.add(faTwitter);
library.add(faDev);
library.add(faReddit);
library.add(faHtml5);
library.add(faEnvelope);
library.add(faTelegram);
library.add(faDiscord);
app.component("font-awesome-icon", FontAwesomeIcon);
import "./styles/index.css";
app.mount("#app");
