<template>
  <footer class="section bg-green">
    <div class="container footer">
      <div class="row">
        <h2 class="title-footer">Contact Us</h2>
        <div class="text-footer">Kyiv, Ukraine</div>
        <div class="text-footer">mail@isa.co.ua</div>
        <div class="social-media__wrapper mt-3">
          <div class="social-media__items">
            <!-- Looping social media links -->

            <SocialMediaItem />
          </div>
        </div>
      </div>
      <div class="row">
        <img :src="ImgCats" alt="" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialMediaItem from "./Header/SocialMedia-Item.vue";
import ImgCats from "../assets/images/62647f9fbe07235ba9b28d67_star-white-with-animals.svg";
</script>

<style lang="scss">
.bg-green {
  background-color: #31be32;
}
.footer {
  display: flex;

  .row {
    width: 50%;

    .title-footer {
      color: black;
      -webkit-text-fill-color: inherit;
      background-clip: border-box;
      margin-top: 0;
      margin-bottom: 0;
      font-family: DM Sans, sans-serif;
      font-size: 4vw;
      font-weight: 700;
      line-height: 1.25em;
    }
    .text-footer {
      color: black;
      text-align: left;
      margin-top: 0.5em;
      font-family: DM Sans, sans-serif;
      font-size: 2.5vw;
      margin-bottom: 3rem;
      line-height: 1.5rem;
      display: block;
    }
  }
}

.social-media__items {
  display: flex;

  .social-media__item {
    margin-top: 15px;
    width: 10%;
    padding: 0.5rem;
  }
}
</style>
