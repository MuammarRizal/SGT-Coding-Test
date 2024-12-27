<template>
  <div v-for="(data, index) in datas" :key="index">
    <h2 class="title-section">{{ data.title }}</h2>
    <div class="text-section">
      {{ data.desc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped lang="scss">
.title-section {
  color: black;
  font-size: 4vw;
  font-weight: 700;
  line-height: 1.25em;
}

.text-section {
  color: black;
  font-size: 2.5vw;
  font-family: "DM Sans", sans-serif;
  line-height: 1.5em;
  display: block;
  margin-top: 0.5em;
  margin-bottom: 1em;
}

@media screen and (max-width: 480px) {
  .title-section {
    font-size: 2rem;
  }

  .text-section {
    font-size: 1.2rem;
  }
}
</style>
