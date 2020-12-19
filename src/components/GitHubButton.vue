<template>
    <button class="focus:outline-none hover:bg-gray-600 m-2 border-none rounded-full py-3 px-6 text-white  bg-black" @click="gotoGH()"><font-awesome-icon :icon="['fab', 'github']"/> GitHub</button>
</template>

<script>
export default {
    name: 'GitHubButton',
    methods: {
        gotoGH() {
            window.open(this.link, '_blank')
        }
    },
    props: {
        link: String
    }
}
</script>

<style>

</style>