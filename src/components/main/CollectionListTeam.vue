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

<template>
  <div class="collection-list---team">
    <div
      class="collection-item---team"
      v-for="(data, index) in datas"
      :key="index"
    >
      <div class="team-wrap">
        <img :src="data.img" alt="Rizal" class="team-photo" />
        <div class="team-name">{{ data.title }}</div>
        <div class="team-title">
          {{ data.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.collection-item---team {
  background-color: #fcf944;
  flex: none;
  align-self: stretch;
  width: 22%;

  .team-wrap {
    border: 0.25em solid #000;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 2em;
    transition: all 0.2s ease-in-out;
    display: flex;

    .team-photo {
      object-fit: cover;
      flex: 0 auto;
      align-self: auto;
      width: 100%;
      height: auto;
      max-height: none;
      margin-bottom: 2em;
    }
    .team-name {
      color: black;
      text-align: center;
      margin-bottom: 0.5em;
      font-family: DM Sans, sans-serif;
      font-size: 1.5vw;
      line-height: 1.25em;
    }
    .team-title {
      color: black;
      text-align: center;
      font-family: DM Sans, sans-serif;
      font-size: 1.25vw;
      font-weight: 400;
      line-height: 1.5em;
    }
  }
}
</style>
