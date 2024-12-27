<template>
  <div class="list-container">
    <div v-for="item in items" :key="item" class="list-item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.list-item {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
}
</style>
