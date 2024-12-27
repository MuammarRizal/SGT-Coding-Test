<template>
  <div class="section">
    <div class="container">
      <div id="about-us" class="container-group">
        <SectionGroup :datas="dataAbout" />
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

  <div class="section bg-blue">
    <div class="container-projects">
      <SectionGroup :datas="dataProjects" />
    </div>

    <div class="cards-project">
      <div class="card" data-aos="fade-right">
        <div class="card-content">
          <h2>Emergency Aid. WAR 2022.</h2>
          <p>
            providing food and medicine to the shelters and animals which lost
            their homes and families due to the war
          </p>
        </div>
      </div>
      <div class="card" data-aos="fade-right">
        <div class="card-content">
          <h2>Non-commercial feed line</h2>
          <p>
            construction of industrial production base where food for shelters
            will be produced on a free basis
          </p>
        </div>
      </div>
      <div class="card" data-aos="fade-right">
        <div class="card-content">
          <h2>Education and Control</h2>
          <p>
            lectures on communication, organisation and coordination of
            processes, control over the use of aid
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import BlockQuote from "./main/BlockQuote.vue";
import { gsap } from "gsap";
import SectionGroup from "./main/SectionGroup.vue";
import AOS from "aos";
import "aos/dist/aos.css";
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

const dataProjects = [
  {
    title: "Our Projects",
    desc: "are very different in terms of priority, scale and complexity of implementation",
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
.bg-blue {
  background-color: #3e88ff;
}

.container-projects {
  color: white;
}

.card {
  text-align: center;
  border: 0.25em solid #fff;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 4em;
  display: flex;
}

.card-content {
  font-family: Arial, sans-serif;
  h2 {
    text-align: start;
    color: white;
    font-size: 3vw;
    margin-bottom: 10px;
  }
  p {
    font-size: 2vw;
    text-align: start;
    color: white;
    line-height: 1.25em;
  }
}

.text-section {
  font-size: 2vw;
  line-height: 1.25em;
  color: black;
  margin-bottom: 1.3rem;
}

.cards-project {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
@media screen and (max-width: 480px) {
  .text-section {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .card-content {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2em;
    }
  }
}
</style>
