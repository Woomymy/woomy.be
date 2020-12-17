<template class="">
  <Navbar/>
  <div class="bg-gradient-to-b from-green-600 to-white  text-2xl content-center text-center">
    <h1 class="text-4xl content-center text-center">Plop!</h1>
    <h3 class="text-3xl font-bold content-center text-center">Woomy4680-exe</h3>
    <br>
    <p class="text-2xl content-center text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aut nostrum, repellendus fugit possimus corporis doloremque accusantium, officiis, omnis sint totam tempora enim beatae esse rem architecto veritatis debitis laborum. </p>
    <GitHubButton link="https://github.com/Woomy4680-exe"/>
    <button class="focus:outline-none m-2 border-none rounded-full py-3 px-6 text-white bg-blue-500" @click="gotoTW()"><font-awesome-icon :icon="['fab', 'twitter']"/> Twitter</button>
    <button class="m-2 focus:border-none hover:border-none rounded-full py-3 px-6 text-white bg-gray-800" @click="gotoDEV()"><font-awesome-icon :icon="['fab', 'dev']"/> Dev.to</button>
    <button class="m-2 focus:border-none hover:border-none rounded-full py-3 px-6 text-white bg-yellow-500" @click="gotoRD()"><font-awesome-icon :icon="['fab', 'reddit']"/> Reddit</button>
  </div>
  <div class="text-2xl content-center text-center">
    <h1 class="text-3xl font-bold">My projects</h1>
    <div class="text-white bg-blue-500 m-10  rounded-xl overflow-hidden">
        <p class="font-bold text-2xl underline">DetectionHSL</p>
        <img src="https://img.shields.io/static/v1?label=Made with&color=blue&style=for-the-badge&logo=Powershell&message=Powershell">
        <img src="https://img.shields.io/static/v1?label=Made with&color=red&style=for-the-badge&logo=Rust&message=Rust">
        <img src="https://img.shields.io/static/v1?label=Made with&color=green&style=for-the-badge&logo=Vue.js&message=Vue.JS">
        <p class="">DetectionHSL est un script qui permet de récupérer et d'exécuter paralèlement des script powershell avec toute une série d'utilitaires</p>
        <GitHubButton link="https://github.com/DetectionHSL"/>
        <WebSiteButton link="https://detectionhsl.fr"/>
    </div>
  </div>
</template>

<script>
import GitHubButton from "./components/GitHubButton"
import Navbar from "./components/Navbar"
import WebSiteButton from "./components/WebSiteButton"
export default {
  name: 'App',
  components: {
    Navbar,
    GitHubButton,
    WebSiteButton
  },
  methods: {
    gotourl(url) {
      window.open(url, "_blank")
    },
    gotoGH() {
      this.gotourl("https://github.com/Woomy4680-exe")
    },
    gotoTW() {
      this.gotourl("https://twitter.com/woomy4680");
    },
    gotoDEV() {
      this.gotourl("https://dev.to/woomy4680exe");
    },
    gotoRD() {
      this.gotourl("https://www.reddit.com/u/woomy4680-exe")
    }
  }
}
</script>

<style>

</style>
