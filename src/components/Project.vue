<template>
  <div
    class="float-left text-white bg-blue-500 w-96 m-4 rounded-xl overflow-hidden"
  >
    <p class="font-bold text-2xl underline">{{ name }}</p>
    <img
      class="float-left m-2"
      v-if="this.langs.includes('powershell')"
      src="https://img.shields.io/static/v1?label=Made with&color=blue&style=for-the-badge&logo=Powershell&message=Powershell"
    />
    <img
      class="float-left m-2"
      v-if="this.langs.includes('rust')"
      src="https://img.shields.io/static/v1?label=Made with&color=red&style=for-the-badge&logo=Rust&message=Rust"
    />
    <img
      class="float-left m-2"
      v-if="this.langs.includes('vue')"
      src="https://img.shields.io/static/v1?label=Made with&color=green&style=for-the-badge&logo=Vue.js&message=Vue.JS"
    />
    <img
      class="float-left m-2"
      v-if="this.langs.includes('typescript')"
      src="https://img.shields.io/static/v1?label=Made with&color=blue&style=for-the-badge&logo=typescript&message=TypeScript"
    />
    <img
      class="float-left m-2"
      v-if="this.langs.includes('bash')"
      src="https://img.shields.io/static/v1?label=Made with&color=black&style=for-the-badge&logo=GNU Bash&message=Bash"
    />
    <p class="float-left m-1">{{ description }}</p>
    <br />
    <GitHubButton class="float-left" v-if="this.ghlink" v-bind:link="ghlink" />
    <WebSiteButton class="float-left" v-if="this.wslink" v-bind:link="wslink" />
  </div>
</template>

<script>
import GitHubButton from "./buttons/GitHubButton";
import WebSiteButton from "./buttons/WebSiteButton";
export default {
  name: "Project",
  props: {
    name: String,
    wslink: String,
    ghlink: String,
    langs: Array,
    description: String
  },
  components: {
    GitHubButton,
    WebSiteButton
  }
};
</script>

<style></style>
