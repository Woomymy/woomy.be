<template class="">
  <Navbar/>
  <div class="bg-gradient-to-b from-green-600 to-white  text-2xl content-center text-center">
    <h1 class="text-4xl content-center text-center">Plop!</h1>
    <h3 class="text-3xl font-bold content-center text-center">Woomy4680-exe</h3>
    <br>
    <p class="text-2xl content-center text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aut nostrum, repellendus fugit possimus corporis doloremque accusantium, officiis, omnis sint totam tempora enim beatae esse rem architecto veritatis debitis laborum. </p>
    <GitHubButton link="https://github.com/Woomy4680-exe"/>
    <button class="focus:outline-none m-2 border-none rounded-full py-3 px-6 text-white bg-blue-500" @click="gotoTW()"><font-awesome-icon :icon="['fab', 'twitter']"/> Twitter</button>
    <DevButton username="woomy4680exe"/>
    <RedditButton link="Woomy4680-exe" type="u"/>
  </div>
  <div class="text-2xl content-center text-center">
    <h1 class="text-3xl font-bold">My projects</h1>
    <Project description="DetectionHSL est un script qui permet de récupérer et d'exécuter paralèlement des script powershell avec toute une série d'utilitaires" v-bind:langs="this.hslangs" name="DetectionHSL" ghlink="https://github.com/DetectionHSL" wslink="https://detectionHSL.fr"/>
    <Project description="DiscordJS-moka est une petite lib écrite en typescript qui aide à la création de bots Discord." v-bind:langs="this.mokalangs" name="DiscordJS-moka" ghlink="https://github.com/discordjs-moka" wslink="https://discdordjs-moka.github.io"/>
    <Project name="Dotfiles" description="Ma configuration de bureau, pour I3-Gaps et Calculate Linux et les autres trucs que j'utilise." ghlink="https://github.com/Woomy4680-exe/Dotfiles" v-bind:langs="this.dotflangs"/>
  </div>
</template>

<script>
import GitHubButton from "./components/GitHubButton"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import RedditButton from "./components/RedditButton"
import DevButton from "./components/DevButton"
export default {
  name: 'App',
  components: {
    Navbar,
    GitHubButton,
    Project,
    RedditButton,
    DevButton
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
    }
  },
  data(){
    return {
      hslangs: ['powershell', 'vue', 'rust'],
      mokalangs: ['typescript'],
      dotflangs: ['bash']
    }
  }
}
</script>

<style>

</style>
