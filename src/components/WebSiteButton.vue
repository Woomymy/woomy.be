<template>
    <button class="focus:outline-none m-2 border-none rounded-full py-3 px-6 text-white  bg-gray-600" @click="goto()"><font-awesome-icon :icon="['fab', 'google']"/> Website</button>
</template>

<script>
export default {
    name: 'WebSiteButton',
    methods: {
        goto() {
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