<template>
  <div class="text-white bg-blue-500 m-10  rounded-xl overflow-hidden">
        <p class="font-bold text-2xl underline">{{ name }}</p>
        <img src="https://img.shields.io/static/v1?label=Made with&color=blue&style=for-the-badge&logo=Powershell&message=Powershell">
        <img src="https://img.shields.io/static/v1?label=Made with&color=red&style=for-the-badge&logo=Rust&message=Rust">
        <img src="https://img.shields.io/static/v1?label=Made with&color=green&style=for-the-badge&logo=Vue.js&message=Vue.JS">
        <p class="">DetectionHSL est un script qui permet de récupérer et d'exécuter paralèlement des script powershell avec toute une série d'utilitaires</p>
        <GitHubButton v-bind:link="ghlink"/>
        <WebSiteButton v-bind:link="wslink"/>
    </div>
</template>

<script>
import GitHubButton from "./GitHubButton"
import WebSiteButton from "./WebSiteButton"
export default {
    name: "Project",
    props: {
        name: String,
        wslink: String,
        ghlink: String
    },
    components: {
        GitHubButton,
        WebSiteButton
    }
}
</script>

<style>

</style>