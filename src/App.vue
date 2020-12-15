<template>
  <Navbar/>
  <div class=" bg-gradient-to-br from-green-500 to-green-300 text-2xl content-center text-center">
    <h1 class="text-4xl content-center text-center">Plop!</h1>
    <h3 class="text-3xl font-bold content-center text-center">Woomy4680-exe</h3>
    <br>
    <p class="text-2xl content-center text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aut nostrum, repellendus fugit possimus corporis doloremque accusantium, officiis, omnis sint totam tempora enim beatae esse rem architecto veritatis debitis laborum. </p>
    <button class="focus:outline-none m-2 border-none rounded-full py-3 px-6 text-white  bg-black" @click="gotoGH()"><font-awesome-icon :icon="['fab', 'github']"/> GitHub</button>
    <button class="focus:outline-none m-2 border-none rounded-full py-3 px-6 text-white bg-blue-500" @click="gotoTW()"><font-awesome-icon :icon="['fab', 'twitter']"/> Twitter</button>
    <button class="m-2 focus:border-none hover:border-none rounded-full py-3 px-6 text-white bg-gray-800" @click="gotoDEV()"><font-awesome-icon :icon="['fab', 'dev']"/> Dev.to</button>
    <button class="m-2 focus:border-none hover:border-none rounded-full py-3 px-6 text-white bg-yellow-500" @click="gotoRD()"><font-awesome-icon :icon="['fab', 'reddit']"/> Reddit</button>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
export default {
  name: 'App',
  components: {
    Navbar
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
