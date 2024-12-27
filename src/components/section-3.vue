<script setup lang="ts">
import SectionGroup from "./main/SectionGroup.vue";
import DarynaImg from "../assets/images/62744ee9fce7fbaf400c22f8_2.jpg";
import PolinaImg from "../assets/images/62744edaac91b4183ac27e10_5.jpg";
import BohdanImg from "../assets/images/62744ec97586a996f48f7a85_1.jpg";
import MykhayloImg from "../assets/images/62744eae22e10d8a15f909ef_9.jpg";
import KseniaImg from "../assets/images/62744e8e05f6c22bac85252a_7.jpg";
import AnnaImg from "../assets/images/62744f0eb7cd3462ef475ebf_6.jpg";
import AnatasiaImg from "../assets/images/62744e6761e425c6956af3a5_3.jpg";
import BasilImg from "../assets/images/626ae0bcd92bf48017c14083_basil-square.png";
import LinaImg from "../assets/images/626ae01da2a805d176b1606b_Якобчук.jpg";
import AnastasiaYevchenkoImg from "../assets/images/627fc796cf3602b53a7512cf_4.jpg";
import OfficeManagerImg from "../assets/images/6265332e63b917130ca8d702_isa-logo-dog-clean.svg";
import SeoImg from "../assets/images/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg";
import CollectionListTeam from "./main/CollectionListTeam.vue";
const dataOurTeam = [
  {
    title: "Our Team",
    desc: "Consists of completely different people who are united by ad common desire - to help",
  },
];
const datas = [
  {
    img: DarynaImg,
    title: "Daryna Deriy",
    desc: "Chairman of the board",
  },
  {
    img: PolinaImg,
    title: "Ponila Snisarenko Kulchytska",
    desc: "Curator of the foundation",
  },
  {
    img: BohdanImg,
    title: "Bohdan Kulchytsky",
    desc: "Executive Manager",
  },
  {
    img: MykhayloImg,
    title: "Mykhaylo Deriy",
    desc: "Operating Manager",
  },
  {
    img: KseniaImg,
    title: "Ksenia Nikishina",
    desc: "Office Manager",
  },
  {
    img: AnnaImg,
    title: "Anna Andriychuk",
    desc: "SMM-manager",
  },
  {
    img: AnatasiaImg,
    title: "Anastasia Kovalchuk",
    desc: "Director",
  },
  {
    img: BasilImg,
    title: "Basil Gloo",
    desc: "Web Developer",
  },
  {
    img: LinaImg,
    title: "Lina Yakobchuk",
    desc: "Designer",
  },
  {
    img: AnastasiaYevchenkoImg,
    title: "Anastasia Yevchenko",
    desc: "Translator",
  },
  {
    img: OfficeManagerImg,
    title: "Office Manager",
    desc: "Open Vacancy",
  },
  {
    img: SeoImg,
    title: "SEO Specialist",
    desc: "Open Vacancy",
  },
];
</script>

<template>
  <div class="section">
    <div class="container">
      <SectionGroup :datas="dataOurTeam" />
    </div>
    <div class="collection-list__wraps">
      <CollectionListTeam :datas="datas" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.collection-list__wraps {
  margin-top: 4em;

  .collection-list---team {
    grid-column-gap: 4%;
    grid-row-gap: 2em;
    flex-flow: wrap;
    place-content: stretch space-between;
    align-items: stretch;
    display: flex;
  }
}
</style>
