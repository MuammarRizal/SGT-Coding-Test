<script setup>
// Import gambar hanya sekali, lebih rapi
import ImgDog from "../assets/images/6265332e63b917130ca8d702_isa-logo-dog-clean.svg";
import YoutubeIcon from "../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import InstagramIcon from "../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import FacebookIcon from "../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import PatreonIcon from "../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import TelegramIcon from "../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";
import SocialMediaItem from "./Header/SocialMedia-Item.vue";
// Definisikan data di dalam setup
const socialMediaLink = [
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Youtube Icon",
    img: YoutubeIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Instagram Icon",
    img: InstagramIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Facebook",
    img: FacebookIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Patreon Icon",
    img: PatreonIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Telegram Icon",
    img: TelegramIcon,
  },
];
</script>

<template>
  <header>
    <div class="container">
      <div class="hero-logo__wrapper">
        <div class="img-hero">
          <img :src="ImgDog" alt="Innovative Solutions for Animals Logo" />
        </div>
        <div class="text-hero">
          <h1 class="title-hero">
            Innovative <br />
            Solutions <br />
            for <br />
            Animals
          </h1>
        </div>
      </div>

      <div class="social-media__wrapper mt-3">
        <div class="social-media__title">charity organization</div>

        <div class="social-media__items">
          <!-- Looping social media links -->
          <SocialMediaItem
            v-for="(sosmed, index) in socialMediaLink"
            :key="index"
            :link="sosmed.link"
            :img="sosmed.img"
            :alt="sosmed.alt"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import url("../assets/styles/style.scss");
$bg-primary: #fcf944;
$colorBlack: #000;

header {
  width: 100%;
  height: 100vh;
  background-color: $bg-primary;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .hero-logo__wrapper {
      display: flex;
      gap: 30px;

      .img-hero img {
        max-width: 100%;
        height: auto;
      }

      .text-hero {
        display: flex;
        align-items: center;
        text-align: left;

        h1 {
          font-size: 4.1vw;
          line-height: 1.2;
          font-weight: 700;
          color: $colorBlack;
          font-family: DM Sans, sans-serif;
        }
      }
    }

    .social-media__wrapper {
      margin-top: 2rem;
      height: 100%;
      width: 100%;

      .social-media__title {
        color: $colorBlack;
        font-size: 2.5vw;
        font-family: DM Sans, sans-serif;
        text-align: center;
      }

      .social-media__items {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .social-media__item {
        margin-top: 15px;
        width: 5%;
        height: 5%;
        padding: 0.5rem;
      }
    }
  }
}
</style>
