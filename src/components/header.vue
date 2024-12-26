<script setup>
// Import gambar hanya sekali, lebih rapi
import ImgDog from "../assets/images/6265332e63b917130ca8d702_isa-logo-dog-clean.svg";
import ImgCat from "../assets/images/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg";
import YoutubeIcon from "../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import InstagramIcon from "../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import FacebookIcon from "../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import PatreonIcon from "../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import TelegramIcon from "../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";
import SocialMediaItem from "./Header/SocialMedia-Item.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
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

const images = [ImgDog, ImgCat];

onMounted(() => {
  gsap.from(".hero-logo__wrapper .img-hero img", {
    opacity: 0,
    y: -100,
    duration: 0.7,
  });

  gsap.from(".text-hero", {
    opacity: 0,
    x: 150,
    duration: 0.7,
  });

  gsap.from(".social-media__wrapper", {
    opacity: 0,
    y: 150,
    duration: 0.7,
  });
});
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

      <!-- <div class="arrow-scroll">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1000 1000"
          width="1000"
          height="1000"
          preserveAspectRatio="xMidYMid meet"
          style="
            width: 100%;
            height: 100%;
            transform: translate3d(0px, 0px, 0px);
            content-visibility: visible;
          "
        >
          <defs>
            <clipPath id="__lottie_element_2">
              <rect width="1000" height="1000" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clip-path="url(#__lottie_element_2)">
            <g
              transform="matrix(1,0,0,1,174.75,-37.319000244140625)"
              opacity="1"
              style="display: block"
            >
              <g opacity="1" transform="matrix(1,0,0,1,325.25,262.75)">
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(6,6,8)"
                  stroke-opacity="1"
                  stroke-width="80"
                  d=" M27.55299949645996,34.946998596191406 C11.376999855041504,51.12300109863281 -0.25,62.75 -0.25,62.75 C-0.25,62.75 -10.461999893188477,52.53799819946289 -25.04800033569336,37.95199966430664"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.7193397879600525,0.6946583986282349,-0.6946583986282349,0.7193397879600525,498.80828857421875,219.90750122070312)"
              opacity="1"
              style="display: block"
            >
              <path
                fill="rgb(0,0,0)"
                fill-opacity="1"
                d=" M68.28,68.28 C68.28,68.28 28.28,68.28 28.28,68.28 C28.28,68.28 28.28,28.28 28.28,28.28 C28.28,28.28 68.28,28.28 68.28,28.28 C68.28,28.28 68.28,68.28 68.28,68.28z"
              ></path>
              <g
                opacity="1"
                transform="matrix(1,0,0,1,48.284000396728516,48.284000396728516)"
              >
                <path
                  stroke-linecap="square"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="10"
                  stroke="rgb(6,6,8)"
                  stroke-opacity="1"
                  stroke-width="40"
                  d=" M20,20 C20,20 -20,20 -20,20 C-20,20 -20,-20 -20,-20 C-20,-20 20,-20 20,-20 C20,-20 20,20 20,20z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div> -->
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
        width: 5.5%;
        height: 5.5%;
        padding: 0.5rem;
      }
    }
  }
}
</style>
