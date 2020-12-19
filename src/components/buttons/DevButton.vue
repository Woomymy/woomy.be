<template>
  <button
    class="focus:outline-none m-2 focus:border-none hover:border-none rounded-full py-3 px-6 text-white bg-gray-800"
    @click="open()"
  >
    <font-awesome-icon :icon="['fab', 'dev']" /> Dev.to
  </button>
</template>

<script>
export default {
  name: "DevButton",
  props: {
    username: String
  },
  methods: {
    open() {
      window.open(`https://dev.to/${this.username}`, "_blank");
    }
  }
};
</script>

<style></style>
