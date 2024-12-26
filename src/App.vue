<template>
  <div class="box hello" ref="boxRef">Animate Me!</div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "GsapExample",
  mounted() {
    // Animasi sederhana menggunakan GSAP
    gsap.to(this.$refs.boxRef, { x: 100, duration: 1 });
  },
};
</script>

<style>
@import url("./assets/styles/style.scss");
</style>
