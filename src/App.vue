<template class="">
  <Navbar />
  <div
    class="bg-gradient-to-b from-green-600 to-white  text-2xl content-center text-center"
  >
    <h1 class="text-4xl content-center text-center">Plop!</h1>
    <h3 class="text-3xl font-bold content-center text-center">Woomy4680-exe</h3>
    <br />
    <p class="text-2xl content-center text-center">
      Plop! Je suis Woomy4680-exe, jeune dev' belge qui adore la programmation
      et l'informatique en plus général. Je fais pas mal de Rust, pas mal de
      powershell, de typescript et de bash. J'aime aussi faire un peu de HTML /
      CSS et utiliser Vue.JS et TailWindCSS, même si je n'ai
      <strong>aucun sens du desing</strong>. Je touche aussi pas mal à GNU/Linux
      et je tourne d'ailleurs sur
      <a href="https://calculate-linux.org" target="_blank"> Calculate Linux </a
      >, une distribution basée sur Gentoo, mais avec des binaires.
    </p>
    <GitHubButton link="https://github.com/Woomy4680-exe" />
    <RedditButton link="Woomy4680-exe" type="u" />
    <DevButton username="woomy4680exe" />
    <TwitterButton username="woomy4680" />
  </div>
  <div class="text-2xl content-center text-center">
    <h1 class="text-3xl font-bold">My projects</h1>
    <Project
      description="DetectionHSL est un script qui permet de récupérer et d'exécuter paralèlement des script powershell avec toute une série d'utilitaires"
      v-bind:langs="this.hslangs"
      name="DetectionHSL"
      ghlink="https://github.com/DetectionHSL"
      wslink="https://detectionHSL.fr"
    />
    <Project
      name="Blog"
      description="Mon blog"
      ghlink="https://github.com/Woomy4680-exe/Blog"
      v-bind:langs="this.bloglangs"
    />
    <Project
      description="DiscordJS-moka est une petite lib écrite en typescript qui aide à la création de bots Discord."
      v-bind:langs="this.mokalangs"
      name="DiscordJS-moka"
      ghlink="https://github.com/discordjs-moka"
      wslink="https://discdordjs-moka.github.io"
    />
    <Project
      name="Dotfiles"
      description="Ma configuration de bureau, pour I3-Gaps et Calculate Linux et les autres trucs que j'utilise."
      ghlink="https://github.com/Woomy4680-exe/Dotfiles"
      v-bind:langs="this.dotflangs"
    />
    <Project
      name="Woomy-Overlay"
      description="Un overlay pour gentoo qui inclut des packages pour mes projets / d'autres paquets utiles."
      ghlink="https://github.com/Woomy4680-exe/Woomy-overlay"
      v-bind:langs="this.overlaylangs"
    />
  </div>
</template>

<script>
import GitHubButton from "./components/buttons/GitHubButton";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import RedditButton from "./components/buttons/RedditButton";
import DevButton from "./components/buttons/DevButton";
import TwitterButton from "./components/buttons/TwitterButton";
export default {
  name: "App",
  components: {
    Navbar,
    GitHubButton,
    Project,
    RedditButton,
    DevButton,
    TwitterButton
  },
  data() {
    return {
      hslangs: ["powershell", "vue", "rust"],
      mokalangs: ["typescript"],
      dotflangs: ["bash"],
      overlaylangs: ["bash"],
      bloglangs: []
    };
  }
};
</script>

<style></style>
