<template>
  <div class="container">
    <div class="about-us">
      <div v-for="(data, index) in dataAbout" :key="index">
        <h2 class="title-section">{{ data.title }}</h2>
        <div class="text-section">
          {{ data.desc }}
        </div>
      </div>

      <BlockQuote />

      <div class="text-section">
        Who else if not we should support our younger brothers, especially in
        difficult times? Let's be friends!
      </div>
      <div class="iframe-youtube">
        <iframe
          width="100%"
          height="590"
          src="https://www.youtube.com/embed/5Wk1rp99B7o?si=lin22cw7K7KgWeyV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import BlockQuote from "./main/BlockQuote.vue";
import { gsap } from "gsap";

const dataAbout = [
  {
    title: "We Are",
    desc: "Team of like-minded people, secially active companies, Media personalities volunteers who help low-income shelters and foster carers to support homeless animals",
  },
  {
    title: "Our Primary Goal",
    desc: "is to provide animals with the most necessary things - food, medicine, and urgent needs for the livelihood of shelters. We believe in our power and the power of conscious citizens who care about the environment and their health, who understand the importance of helping each other, especially our little friends. Growth begins with your care for your loved ones. Animals are one of the closest creatures to humans who remain with us throughout our lives. We all know the healing power of warmth, grace, and big loving eyes.",
  },
];

onMounted(() => {
  gsap.from(".iframe-youtube", {
    opacity: 0,
    y: 100,
    duration: 1,
  });
});
</script>

<style lang="scss">
.about-us {
  padding-block: 10%;

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
}
</style>
