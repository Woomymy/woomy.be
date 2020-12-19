<template>
  <button
    class="focus:outline-none m-2 border-none rounded-full py-3 px-6 text-white bg-blue-500 hover:bg-blue-400"
    @click="open()"
  >
    <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
  </button>
</template>

<script>
export default {
  name: "TwitterButton",
  props: {
    username: String
  },
  methods: {
    open() {
      window.open(`https://twitter.com/${this.username}`, "_blank");
    }
  }
};
</script>

<style></style>
