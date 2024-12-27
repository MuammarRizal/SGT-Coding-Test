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
