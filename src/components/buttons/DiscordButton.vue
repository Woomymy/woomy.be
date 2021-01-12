<template>
  <button
    class="focus:outline-none m-2 focus:border-none hover:border-none rounded-full py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700"
    @click="open()"
  >
    <font-awesome-icon :icon="['fab', 'discord']" /> Discord
  </button>
</template>

<script>
export default {
  name: "DiscordButton",
  props: {
    link: String
  },
  methods: {
    open() {
      window.open(`https://discord.com/invite/${this.link}`, "_blank");
    }
  }
};
</script>

<style></style>
