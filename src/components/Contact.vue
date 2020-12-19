<template>
  <div class="float-left">
    <p class="m-5 text-3xl text-center">
      Voici les moyens de me contacter:
    </p>
    <ul class="m-5 text-xl">
      <li>
        <p>
          <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
          github@woomy.ovh
        </p>
        <p>
          <font-awesome-icon :icon="['fab', 'telegram']"></font-awesome-icon>
          <a href="https://t.me/woomy4680">Rejoindre</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style></style>
