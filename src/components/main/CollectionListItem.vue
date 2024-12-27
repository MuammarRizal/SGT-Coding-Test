<template>
  <div
    class="collection-item__ward"
    v-for="(data, index) in datas"
    :key="index"
    data-aos="fade-up"
  >
    <a href="#" class="project-link-wrap">
      <div class="wards-wrap">
        <div class="ward-name">{{ data }}</div>
      </div>
    </a>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
export default {
  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
};

onMounted(() => {
  AOS.init({
    duration: 1000,
  });
});
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
@media screen and (max-width: 480px) {
  .collection-item__ward {
    width: 48%;
    .project-link-wrap {
      .wards-wrap {
        .ward-name {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
