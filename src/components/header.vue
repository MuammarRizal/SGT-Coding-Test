<script setup>
// Import gambar hanya sekali, lebih rapi
import ImgDog from "../assets/images/6265332e63b917130ca8d702_isa-logo-dog-clean.svg";
import SocialMediaItem from "./Header/SocialMedia-Item.vue";
import ImgCat from "../assets/images/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg";

import { onMounted } from "vue";
import { gsap } from "gsap";

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
          <SocialMediaItem />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
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
        font-size: 2rem;
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
        width: 80px;
        padding: 0.5rem;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  header {
    .container {
      .hero-logo__wrapper {
        width: 50%;

        .img-hero img {
          width: 100%;
        }
      }
    }
  }
  .hero-logo__wrapper {
    gap: 10px;

    .text-hero h1 {
      font-size: 8vw; // Sesuaikan ukuran teks untuk layar kecil
    }
  }
}
</style>
