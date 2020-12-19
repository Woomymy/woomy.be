<template>
  <header class="bg-black p-3 text-gray-200 text-xl">
    <a
      href="https://woomy4680-exe.github.io/"
      class="px-4 py-3 rounded-full hover:bg-gray-50 hover:text-gray-800"
      ><font-awesome-icon icon="home" /> Home
    </a>
    <a
      href="https://github.com/Woomy4680-exe/"
      target="_blank"
      class="px-4 py-3 rounded-full hover:bg-gray-50 hover:text-gray-800"
      ><font-awesome-icon :icon="['fab', 'github']" /> GitHub
    </a>
    <a
      href="https://woomy4680-exe.github.io/blog"
      target="_blank"
      class="px-4 py-3 rounded-full hover:bg-gray-50 hover:text-gray-800"
      ><font-awesome-icon :icon="['fas', 'book']" /> Blog</a
    >
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style></style>
