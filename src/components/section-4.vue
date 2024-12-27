<script setup>
import StanislavImg from "../assets/images/628397b3f06d2066cfe8e9a2_14.jpg";
import OleksiyImg from "../assets/images/628398012a964488bb09078d_13.jpg";
import AlexanderImg from "../assets/images/627fcdfcb2137dcf7db53e7f_12.jpg";
import OksanaImg from "../assets/images/627fcdd72d729d8ecacf6de7_11.jpg";
import NatalkaImg from "../assets/images/627fcdaedc0f8eea17c92429_10.jpg";
import MaksymImg from "../assets/images/627fcd87d51b9051dfcbf349_09.jpg";
import KaterynaImg from "../assets/images/627fcd5ca9508410b3a0d824_08.jpg";
import IrmaImg from "../assets/images/627fcd3288758547e6ee0e22_07.jpg";
import IgorImg from "../assets/images/627fcd1790c298c49bc7c436_06.jpg";
import DmytroImg from "../assets/images/627fccf0fc672a5dcfa87ee9_05.jpg";
import DariaImg from "../assets/images/627fccc57c3cb5177369015e_04.jpg";
import VeraImg from "../assets/images/627fcc9bc50d7acc036982a9_03.jpg";
import AndriyImg from "../assets/images/627fcc7339e6f5389ed03013_02.jpg";
import AnastasiaImg from "../assets/images/627fcc4b694dfd4d65a13230_01.jpg";
import SectionGroup from "./main/SectionGroup.vue";
import CollectionListSupport from "./main/CollectionListSupport.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
const datas = [{ title: "Socially Active Citizens", desc: "Support Us" }];

onMounted(() => {
  AOS.init({
    duration: 1000,
    offset: 200,
  });
});

const datasSupport = [
  {
    img: OleksiyImg,
    title: "Eleksiy Tritenko",
    desc: "Theater and Film Actor",
  },
  {
    img: StanislavImg,
    title: "Stanixlav Boklan",
    desc: "People's Artist of Ukraine",
  },
  {
    img: AlexanderImg,
    title: "Alexander Rudinsky",
    desc: "Theater and film actor",
  },
  {
    img: OksanaImg,
    title: "Oksana Zhdanova",
    desc: "Theater and film actor",
  },
  {
    img: NatalkaImg,
    title: "Natalka Denisenko",
    desc: "Theater and film Actress",
  },
  {
    img: MaksymImg,
    title: "Maksym Samchyk",
    desc: "Theater and film actor",
  },
  {
    img: KaterynaImg,
    title: "Kateryna Vyshneva",
    desc: "Theater and film Actress",
  },
  {
    img: IrmaImg,
    title: "Irma Vitovska",
    desc: "Honored Actress of Ukraine",
  },
  {
    img: IgorImg,
    title: "Igor Portyanko",
    desc: "Actor of theater and cinema",
  },
  {
    img: DmytroImg,
    title: "Dmytro Surzhikov",
    desc: "Honored Artist of Ukraine",
  },
  {
    img: DariaImg,
    title: "Daria Barihashvili",
    desc: "Theater and Film Actress",
  },
  {
    img: VeraImg,
    title: "Vera Kobzar",
    desc: "Theater and Film Actress",
  },
  {
    img: AndriyImg,
    title: "Andriy Fedynchyk",
    desc: "Theater and Film Actress",
  },
  {
    img: AnastasiaImg,
    title: "Anastasia Nesterenko",
    desc: "Theater and Film Actress",
  },
];
</script>

<template>
  <div class="section bg-pink">
    <div class="container">
      <SectionGroup :datas="datas" />
    </div>

    <div class="collection-list-wrap">
      <div class="collection-list---partner" data-aos="fade-up">
        <CollectionListSupport :datas="datasSupport" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-pink {
  background-color: #ff97d0;
}

.collection-list-wrap {
  margin-top: 4em;

  .collection-list---partner {
    grid-column-gap: 4%;
    grid-row-gap: 5em;
    flex-flow: wrap;
    place-content: stretch flex-start;
    align-items: stretch;
    display: flex;
  }
}

img {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}
</style>
