<template>
  <div
    class="collection-item---partner"
    v-for="(data, index) in datas"
    :key="index"
  >
    <div class="partner-wrap">
      <img
        :src="data.img"
        :alt="data.alt ? data.alt : data.name"
        class="partner-logo"
      />
      <div class="team-name" v-if="data.title">{{ data.title }}</div>
      <div class="team-title" v-if="data.desc">{{ data.desc }}</div>
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

<style lang="scss">
.collection-item---partner {
  background-color: #0000;
  flex: none;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  width: 22%;
  display: flex;

  .partner-wrap {
    border: 0.25em #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0;
    display: flex;

    .partner-logo {
      //   filter: grayscale();
      width: auto;
      height: auto;
      margin-bottom: 1rem;
    }
    .team-name {
      color: var(--black);
      text-align: center;
      margin-bottom: 0.5em;
      font-family: DM Sans, sans-serif;
      font-size: 1.5vw;
      line-height: 1.25em;
    }
    .team-title {
      color: var(--black);
      text-align: center;
      font-family: DM Sans, sans-serif;
      font-size: 1.25vw;
      font-weight: 400;
      line-height: 1.5em;
    }
  }
}

@media screen and (max-width: 480px) {
  .collection-item---partner {
    width: 48%;
    .partner-wrap {
      .team-name {
        font-size: 1em;
      }
      .team-title {
        font-size: 0.9em;
      }
    }
  }
}
</style>
