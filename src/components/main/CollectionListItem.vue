<template>
  <div
    class="collection-item__ward"
    v-for="(data, index) in datas"
    :key="index"
  >
    <a href="#" class="project-link-wrap">
      <div class="wards-wrap">
        <div class="ward-name">{{ data }}</div>
      </div>
    </a>
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

<style lang="scss" scoped>
.collection-item__ward {
  background-color: white;
  flex: none;
  align-self: stretch;
  width: 31%;

  .project-link-wrap {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 100%;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: flex;

    .wards-wrap {
      border: 0.25em solid #000;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 2em;
      display: flex;

      .ward-name {
        color: black;
        text-align: center;
        margin-bottom: 0;
        font-family: Droid Sans, sans-serif;
        font-size: 1.5vw;
        line-height: 1.25em;
      }
    }
  }
}
</style>
