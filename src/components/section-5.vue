<script setup>
import AdviresImg from "../assets/images/62aa3401042d425391235aaa_Logo-adviRES.jpg";
import OvidWind from "../assets/images/62aa33e1380de680b7110ebf_ovid-wind-logo.png";
import TbsIndustryImg from "../assets/images/6265d803f32677c8352bc485_tbs_logo1-02.png";
import AccurlImg from "../assets/images/6265d7edf0c46ce38f559328_download.png";
import LaudisImg from "../assets/images/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy.png";
import KickBiteimg from "../assets/images/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21 20.43.09.jpeg";
import CollectionListSupport from "./main/CollectionListSupport.vue";
import SectionGroup from "./main/SectionGroup.vue";
const datas = [
  {
    title: "Our Partners",
    desc: "Are take care of our fund and help us with many questions",
  },
];

const dataPartners = [
  {
    img: AdviresImg,
    alt: "Advires",
  },
  {
    img: OvidWind,
    alt: "OvidWid",
  },
  {
    img: TbsIndustryImg,
    alt: "Tbs Industry",
  },
  {
    img: AccurlImg,
    alt: "Accurl Tech",
  },
  {
    img: LaudisImg,
    alt: "Laudis legal & Accountancy",
  },
  {
    img: KickBiteimg,
    alt: "KickBite",
  },
];
</script>

<template>
  <div class="section">
    <div class="container">
      <SectionGroup :datas="datas" />
    </div>

    <div class="collection-list-wrap">
      <div class="collection-list---partner">
        <CollectionListSupport :datas="dataPartners" />
      </div>
    </div>
  </div>
</template>
