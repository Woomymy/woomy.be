<template>
    <button class="m-2 focus:border-none hover:border-none rounded-full py-3 px-6 text-white bg-yellow-500" @click="gotoRD()"><font-awesome-icon :icon="['fab', 'reddit']"/> Reddit</button>
</template>

<script>
export default {
    name: 'RedditButton',
    props: {
        link: String,
        type: String
    },
    methods: {
        gotoRD() {
            window.open(`https://reddit.com/${this.type ? this.type : 'u' }/${this.link ? this.link : ''}`, '_blank')
        }
    }
}
</script>

<style>

</style>